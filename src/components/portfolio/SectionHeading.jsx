import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
function SectionHeading({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center mb-16", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
        children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gradient-to-r from-transparent to-accent" }),
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-accent", children: eyebrow }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gradient-to-l from-transparent to-accent" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mt-5 text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.05]",
        children: title
      }
    ),
    description && /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        className: "mt-5 text-muted-foreground text-base md:text-lg leading-relaxed",
        children: description
      }
    )
  ] });
}
export {
  SectionHeading
};
