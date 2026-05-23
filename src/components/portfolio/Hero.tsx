import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download, Mail, ArrowRight, Sparkles, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Particles } from "./Particles";

const PHOTO_KEY = "nilaj_hero_photo";

export function Hero() {
  const [photo, setPhoto] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(PHOTO_KEY);
      if (saved) setPhoto(saved);
    } catch {}
  }, []);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      setPhoto(url);
      try { localStorage.setItem(PHOTO_KEY, url); } catch {}
    };
    reader.readAsDataURL(file);
  };

  const clearPhoto = () => {
    setPhoto(null);
    try { localStorage.removeItem(PHOTO_KEY); } catch {}
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]" />
      <Particles count={50} />

      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl xl:text-[5.5rem] font-bold leading-[0.95] tracking-tight"
            >
              Hi, I'm{" "}
              <span
                className="text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient-x"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--neon), var(--neon-2), var(--neon))",
                }}
              >
                Nilaj Jana
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-light text-foreground/80"
            >
              Full Stack Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-base md:text-lg text-accent h-7 flex items-center gap-2"
            >
              <span className="text-muted-foreground/60">{"//"}</span>
              <Typewriter
                words={[
                  "React.js",
                  "Node.js",
                  "Next.js",
                  "Express.js",
                  "JavaScript",
                  "Java",
                  "Python",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1500}
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-muted-foreground leading-relaxed text-base md:text-lg"
          >
            I build modern, scalable, and interactive web applications with clean UI and
            efficient backend systems — skilled in Node.js, Express, Next.js, React, Tailwind,
            Java, Python, and JavaScript.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] active:scale-95 transition-transform overflow-hidden"
            >
              <span className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative">View Projects</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold hover:border-accent/60 hover:shadow-glow-cyan transition-all"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border/60 px-6 py-3.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-border transition-colors"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 pt-4 border-t border-border/40"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Find me on
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/nilaj575"
                target="_blank"
                rel="noreferrer"
                className="group p-2.5 rounded-lg glass hover:shadow-glow hover:-translate-y-0.5 transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5 group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/nilaj-jana-648436338"
                target="_blank"
                rel="noreferrer"
                className="group p-2.5 rounded-lg glass hover:shadow-glow-cyan hover:-translate-y-0.5 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right — HUD avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px]">
            {/* HUD corner brackets */}
            <div className="absolute -inset-6 pointer-events-none">
              <div className="absolute top-0 left-0 h-10 w-10 border-t border-l border-border/60" />
              <div className="absolute top-0 right-0 h-10 w-10 border-t border-r border-border/60" />
              <div className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-border/60" />
              <div className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-border/60" />
            </div>

            {/* Tech label */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground flex items-center gap-2">
              <span className="h-px w-8 bg-border" />
              UI_CORE_V2.0
              <span className="h-px w-8 bg-border" />
            </div>

            {/* Layered rings */}
            <div className="absolute inset-0 rounded-full border border-border/50" />
            <div className="absolute inset-3 rounded-full border border-dashed border-border/40 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border-2 border-accent/10 shadow-glow-cyan" />

            {/* Rotating accent ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--neon), var(--neon-2), transparent 55%, var(--neon))",
                maskImage:
                  "radial-gradient(circle, transparent 67%, black 68%, black 71%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(circle, transparent 67%, black 68%, black 71%, transparent 72%)",
              }}
            />

            {/* Inner glow halo */}
            <div className="absolute inset-10 rounded-full animate-pulse-glow" />

            {/* Avatar core */}
            <div className="absolute inset-12 rounded-full overflow-hidden neon-ring bg-gradient-to-br from-card via-background to-card group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.17_195/0.25),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,oklch(0.72_0.2_295/0.25),transparent_70%)]" />
              {/* Scan line */}
              <div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
                style={{ animation: "scan 4s linear infinite" }}
              />
              {/* Holographic shimmer */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                style={{ animation: "hologram 5s ease-in-out infinite" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                {photo ? (
                  <img
                    src={photo}
                    alt="Nilaj Jana"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <span className="text-[9rem] md:text-[11rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-muted-foreground/40 select-none drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 font-display">
                    N
                  </span>
                )}
              </div>

              {/* Upload overlay */}
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="absolute inset-0 flex items-center justify-center gap-2 bg-background/70 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity text-sm font-mono z-20"
                aria-label="Upload photo"
              >
                <Upload className="h-4 w-4" />
                {photo ? "Change Photo" : "Upload Photo"}
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
              {photo && (
                <button
                  type="button"
                  onClick={clearPhoto}
                  className="absolute top-2 right-2 z-30 p-1.5 rounded-full glass hover:shadow-glow"
                  aria-label="Remove photo"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              {/* Inner ring highlight */}
              <div className="absolute inset-0 rounded-full border border-white/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.04)] pointer-events-none" />

            </div>

            {/* Floating HUD badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-2 -left-6 glass rounded-xl px-3.5 py-2 font-mono text-[11px] shadow-glow z-10"
            >
              <span className="text-primary">{"<"}</span>code
              <span className="text-primary">{" />"}</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-6 -right-4 glass rounded-xl px-3.5 py-2 font-mono text-[11px] shadow-glow-cyan z-10 flex items-center gap-1.5"
            >
              <Sparkles className="h-3 w-3 text-accent" /> Full Stack
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 -right-10 glass rounded-xl px-3 py-2 font-mono text-[11px] z-10"
            >
              <span className="text-accent">{"{ }"}</span> clean_code
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity }}
              className="absolute bottom-0 -left-8 glass rounded-xl px-3 py-2 font-mono text-[10px] z-10 flex items-center gap-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
              online
            </motion.div>

            {/* System status panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="hidden xl:block absolute -bottom-14 -right-6 glass rounded-2xl p-3.5 backdrop-blur-md z-10 min-w-[200px]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  System Status
                </span>
                <span className="font-mono text-[9px] text-emerald-400">98.4%</span>
              </div>
              <div className="flex items-end gap-1 h-8">
                {[4, 6, 8, 5, 7, 4, 6, 8, 5, 7, 3, 6].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-sm bg-accent/70"
                    style={{
                      height: `${h * 4}px`,
                      animation: `pulse ${1 + (i % 3) * 0.5}s ease-in-out ${i * 0.1}s infinite`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-2 font-mono text-[9px] text-muted-foreground">
                cpu.optimized • net.stable
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
