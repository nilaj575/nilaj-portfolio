import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket, Brain, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const traits = [
  { icon: Code2, title: "Full Stack Mindset", text: "Comfortable across the frontend and backend stack." },
  { icon: Rocket, title: "Scalable & Responsive", text: "Building apps that look great and ship fast." },
  { icon: Brain, title: "Problem Solver", text: "Strong logic, clean abstractions, continuous learning." },
  { icon: Sparkles, title: "Real-time UX", text: "Love sockets, live data and rich modern interfaces." },
];

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Years coding", value: "3+" },
  { label: "Technologies", value: "15+" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <SectionHeading
          eyebrow="about me"
          title={<>Designing solutions, <span className="text-gradient">not just code</span></>}
          description="I'm a passionate full stack developer focused on building scalable, real-time and beautifully crafted web applications."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: education timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative glass rounded-3xl p-8 shadow-card"
          >
            {/* corner brackets */}
            <span className="absolute -top-1 -left-1 h-5 w-5 border-t-2 border-l-2 border-accent/60 rounded-tl-2xl" />
            <span className="absolute -top-1 -right-1 h-5 w-5 border-t-2 border-r-2 border-accent/60 rounded-tr-2xl" />
            <span className="absolute -bottom-1 -left-1 h-5 w-5 border-b-2 border-l-2 border-primary/60 rounded-bl-2xl" />
            <span className="absolute -bottom-1 -right-1 h-5 w-5 border-b-2 border-r-2 border-primary/60 rounded-br-2xl" />

            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-sm text-accent">{"// education"}</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">log_02</span>
            </div>
            <div className="relative pl-8 border-l-2 border-primary/40 space-y-8">
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-4 w-4 rounded-full bg-gradient-primary shadow-glow" />
                <div className="flex items-center gap-2 text-accent text-xs font-mono">
                  <GraduationCap className="h-4 w-4" /> ongoing
                </div>
                <h4 className="mt-1 text-lg font-semibold">B.Tech in CSE — AI & ML</h4>
                <p className="text-muted-foreground text-sm">MCKV Institute of Engineering</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Focused on computer science fundamentals, AI/ML, data structures
                  and modern web technologies.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-4 w-4 rounded-full bg-accent shadow-glow-cyan" />
                <div className="flex items-center gap-2 text-accent text-xs font-mono">
                  <Sparkles className="h-4 w-4" /> self-taught
                </div>
                <h4 className="mt-1 text-lg font-semibold">Full Stack Web Development</h4>
                <p className="text-muted-foreground text-sm">
                  React, Next.js, Node.js, Express, MongoDB, Socket.io and more.
                </p>
              </div>
            </div>

            {/* stats strip */}
            <div className="mt-8 pt-6 border-t border-border/60 grid grid-cols-3 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: trait cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl p-6 hover:border-primary/60 transition-colors overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "var(--gradient-glow)" }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <t.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h4 className="mt-4 font-semibold">{t.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
