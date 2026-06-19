import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { transformSync } from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "scripts") continue;
      walk(full, files);
    } else if (/\.tsx?$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function updateImportPaths(content) {
  return content
    .replace(/from\s+(['"])([^'"]+)\.tsx\1/g, 'from $1$2.jsx$1')
    .replace(/from\s+(['"])([^'"]+)\.ts\1/g, 'from $1$2.js$1')
    .replace(/import\s+(['"])([^'"]+)\.tsx\1/g, 'import $1$2.jsx$1')
    .replace(/import\s+(['"])([^'"]+)\.ts\1/g, 'import $1$2.js$1');
}

const tsFiles = walk(root).filter((f) => !f.endsWith("vite.config.ts"));

for (const filePath of tsFiles) {
  const content = fs.readFileSync(filePath, "utf8");
  const isTsx = filePath.endsWith(".tsx");
  const outPath = filePath.replace(/\.tsx?$/, isTsx ? ".jsx" : ".js");

  let result;
  try {
    result = transformSync(content, {
      loader: isTsx ? "tsx" : "ts",
      format: "esm",
      target: "es2022",
      jsx: "automatic",
      jsxImportSource: "react",
    });
  } catch (err) {
    console.error(`Failed to transform ${filePath}:`, err.message);
    process.exit(1);
  }

  let code = updateImportPaths(result.code);
  fs.writeFileSync(outPath, code, "utf8");
  fs.unlinkSync(filePath);
  console.log(`${path.relative(root, filePath)} -> ${path.relative(root, outPath)}`);
}

// Convert vite.config.ts separately
const viteConfigPath = path.join(root, "vite.config.ts");
if (fs.existsSync(viteConfigPath)) {
  const content = fs.readFileSync(viteConfigPath, "utf8");
  const result = transformSync(content, {
    loader: "ts",
    format: "esm",
    target: "es2022",
  });
  fs.writeFileSync(path.join(root, "vite.config.js"), result.code, "utf8");
  fs.unlinkSync(viteConfigPath);
  console.log("vite.config.ts -> vite.config.js");
}

console.log("Conversion complete.");
