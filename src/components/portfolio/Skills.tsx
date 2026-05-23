import { motion } from "framer-motion";
import {
  SiJavascript, SiPython, SiReact, SiAngular, SiHtml5, SiCss3,
  SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiNextdotjs,
  SiMongodb, SiOracle, SiSocketdotio, SiGit, SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Code, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Skill = { name: string; icon: React.ComponentType<{ className?: string }>; color: string };

const groups: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "C", icon: Code, color: "#a8b9cc" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      { name: "Angular", icon: SiAngular, color: "#dd0031" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss3, color: "#1572b6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#83cd29" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Oracle SQL", icon: SiOracle, color: "#f80000" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
      { name: "REST APIs", icon: Cpu, color: "#a78bfa" },
      { name: "Git", icon: SiGit, color: "#f1502f" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
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
              className="glass rounded-3xl p-6 shadow-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-mono text-sm text-accent">{g.title}</h3>
                <span className="text-xs text-muted-foreground font-mono">
                  {g.items.length.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {g.items.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-3 transition-all hover:border-primary/60 hover:shadow-glow"
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/60 group-hover:scale-110 transition-transform"
                      style={{ boxShadow: `0 0 20px ${s.color}33` }}
                    >
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium">{s.name}</span>
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
