import { motion } from "framer-motion";
import {
  SiJavascript, SiPython, SiReact, SiAngular, SiHtml5, SiCss,
  SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiNextdotjs,
  SiMongodb, SiSocketdotio, SiGit, SiGithub,
} from "react-icons/si";
import { Database } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { Code, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Skill = { name: string; icon: React.ComponentType<{ className?: string }>; color: string; level: number };

const groups: { title: string; tag: string; items: Skill[] }[] = [
  {
    title: "Languages",
    tag: "lang",
    items: [
      { name: "Java", icon: FaJava, color: "#f89820", level: 85 },
      { name: "Python", icon: SiPython, color: "#3776ab", level: 80 },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", level: 95 },
      { name: "C", icon: Code, color: "#a8b9cc", level: 70 },
    ],
  },
  {
    title: "Frontend",
    tag: "ui",
    items: [
      { name: "React.js", icon: SiReact, color: "#61dafb", level: 95 },
      { name: "Angular", icon: SiAngular, color: "#dd0031", level: 70 },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26", level: 95 },
      { name: "CSS3", icon: SiCss, color: "#1572b6", level: 90 },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8", level: 95 },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3", level: 85 },
    ],
  },
  {
    title: "Backend",
    tag: "api",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#83cd29", level: 90 },
      { name: "Express.js", icon: SiExpress, color: "#ffffff", level: 90 },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 85 },
    ],
  },
  {
    title: "Databases",
    tag: "data",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248", level: 85 },
      { name: "Oracle SQL", icon: Database, color: "#f80000", level: 75 },
    ],
  },
  {
    title: "Tools",
    tag: "dev",
    items: [
      { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff", level: 85 },
      { name: "REST APIs", icon: Cpu, color: "#a78bfa", level: 90 },
      { name: "Git", icon: SiGit, color: "#f1502f", level: 90 },
      { name: "GitHub", icon: SiGithub, color: "#ffffff", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <SectionHeading
          eyebrow="my stack"
          title={<>Tools I <span className="text-gradient">build with</span></>}
          description="A modern toolkit spanning languages, frameworks, databases and developer tools."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05 }}
              className="group relative glass rounded-3xl p-6 shadow-card hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              {/* corner accent */}
              <span className="absolute top-0 right-0 h-12 w-12 rounded-tr-3xl border-t border-r border-accent/30" />

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent shadow-glow-cyan" />
                  <h3 className="font-semibold text-lg">{g.title}</h3>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  [{g.tag}.{g.items.length.toString().padStart(2, "0")}]
                </div>
              </div>
              <div className="space-y-2.5">
                {g.items.map((s, si) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + si * 0.04 }}
                    className="group/skill relative rounded-xl border border-border/60 bg-background/40 p-2.5 transition-all hover:border-primary/60 hover:shadow-glow"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted/60 group-hover/skill:scale-110 transition-transform"
                        style={{ boxShadow: `0 0 16px ${s.color}33` }}
                      >
                        <s.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{s.name}</span>
                          <span className="font-mono text-[10px] text-muted-foreground">{s.level}%</span>
                        </div>
                        <div className="mt-1 h-1 w-full rounded-full bg-muted/50 overflow-hidden">
                          <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: gi * 0.05 + si * 0.04 }}
                            className="block h-full rounded-full bg-gradient-primary shadow-glow"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
