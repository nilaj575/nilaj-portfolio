import { motion } from "framer-motion";
import { BookOpen, Code2, Zap, Infinity as InfinityIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    phase: "phase_01",
    icon: BookOpen,
    title: "Self-Learning Journey",
    text: "Started exploring web development through docs, courses, and open-source projects — building strong fundamentals.",
  },
  {
    phase: "phase_02",
    icon: Code2,
    title: "Hands-on Project Development",
    text: "Translated learning into shipping — building full-stack applications end-to-end with clean architecture.",
  },
  {
    phase: "phase_03",
    icon: Zap,
    title: "Real-time Applications",
    text: "Mastered Socket.io to build chess multiplayer, live trackers and real-time chat experiences.",
  },
  {
    phase: "phase_04",
    icon: InfinityIcon,
    title: "Continuous Learning",
    text: "Exploring AI/ML, scalable backend systems, and modern UI patterns to keep growing as an engineer.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <SectionHeading
          eyebrow="experience"
          title={<>Learning Journey & <span className="text-gradient">Development Experience</span></>}
          description="No traditional roles yet — just a relentless build-and-learn loop."
        />

        <div className="relative">
          {/* center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent" />

          <div className="space-y-12">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center`}
                >
                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="group relative glass rounded-2xl p-6 hover:border-primary/60 transition-all hover:shadow-glow">
                      {/* corner brackets */}
                      <span className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-accent/60 rounded-tl-xl" />
                      <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-primary/60 rounded-br-xl" />

                      <div className={`flex items-center gap-3 ${left ? "md:flex-row-reverse" : ""}`}>
                        <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                          <s.icon className="h-5 w-5" />
                          <span className="absolute -inset-1 rounded-xl border border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className={left ? "md:text-right" : ""}>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                            {s.phase}
                          </span>
                          <h3 className="text-lg font-semibold">{s.title}</h3>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                  {/* node */}
                  <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex h-5 w-5 items-center justify-center">
                    <span className="absolute h-5 w-5 rounded-full bg-primary/40 animate-ping" />
                    <span className="relative h-3 w-3 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
