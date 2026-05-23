import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download, Mail, ArrowRight } from "lucide-react";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <Particles count={40} />

      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">Nilaj Jana</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-2xl md:text-3xl font-semibold text-foreground/90"
          >
            Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 font-mono text-lg text-accent h-7"
          >
            <span className="text-muted-foreground">{"// "}</span>
            <Typewriter
              words={["React.js", "Node.js", "Next.js", "Express.js", "JavaScript", "Java", "Python"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1500}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          >
            I build modern, scalable, and interactive web applications with clean UI and
            efficient backend systems — skilled in Node.js, Express, Next.js, React, Tailwind,
            Java, Python, and JavaScript.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:border-primary/60 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="font-mono text-xs text-muted-foreground">Find me on</span>
            <div className="h-px flex-1 max-w-12 bg-border" />
            <a
              href="https://github.com/nilaj575"
              target="_blank"
              rel="noreferrer"
              className="group p-3 rounded-xl glass hover:shadow-glow hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5 group-hover:text-accent" />
            </a>
            <a
              href="https://linkedin.com/in/nilaj-jana-648436338"
              target="_blank"
              rel="noreferrer"
              className="group p-3 rounded-xl glass hover:shadow-glow-cyan hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 group-hover:text-accent" />
            </a>
          </motion.div>
        </div>

        {/* Right - profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mx-auto"
        >
          <div className="relative h-[360px] w-[360px] md:h-[420px] md:w-[420px]">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background: "conic-gradient(from 0deg, var(--neon), var(--neon-2), transparent 60%, var(--neon))",
                maskImage: "radial-gradient(circle, transparent 64%, black 65%, black 70%, transparent 71%)",
                WebkitMaskImage: "radial-gradient(circle, transparent 64%, black 65%, black 70%, transparent 71%)",
              }}
            />
            {/* Glow */}
            <div className="absolute inset-8 rounded-full animate-pulse-glow" />
            {/* Avatar */}
            <div className="absolute inset-10 rounded-full overflow-hidden neon-ring bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <div className="text-[10rem] font-bold text-gradient font-display select-none">N</div>
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-2 -left-4 glass rounded-2xl px-4 py-2 font-mono text-xs shadow-glow"
            >
              <span className="text-accent">{"<"}</span>code<span className="text-accent">{" />"}</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-4 -right-2 glass rounded-2xl px-4 py-2 font-mono text-xs shadow-glow-cyan"
            >
              ⚡ Full Stack
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 -right-8 glass rounded-2xl px-3 py-2 font-mono text-xs"
            >
              {"{ }"} clean code
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
