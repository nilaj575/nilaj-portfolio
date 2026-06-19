import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiSocketdotio,
  SiGit,
  SiGithub
} from "react-icons/si";
import { Database } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { Code, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
const groups = [
  {
    title: "Languages",
    tag: "lang",
    items: [
      { name: "Java", icon: FaJava, color: "#f89820", level: 85 },
      { name: "Python", icon: SiPython, color: "#3776ab", level: 80 },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", level: 95 },
      { name: "C", icon: Code, color: "#a8b9cc", level: 70 }
    ]
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
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3", level: 85 }
    ]
  },
  {
    title: "Backend",
    tag: "api",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#83cd29", level: 90 },
      { name: "Express.js", icon: SiExpress, color: "#ffffff", level: 90 },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 85 }
    ]
  },
  {
    title: "Databases",
    tag: "data",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248", level: 85 },
      { name: "Oracle SQL", icon: Database, color: "#f80000", level: 75 }
    ]
  },
  {
    title: "Tools",
    tag: "dev",
    items: [
      { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff", level: 85 },
      { name: "REST APIs", icon: Cpu, color: "#a78bfa", level: 90 },
      { name: "Git", icon: SiGit, color: "#f1502f", level: 90 },
      { name: "GitHub", icon: SiGithub, color: "#ffffff", level: 90 }
    ]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxs("section", { id: "skills", className: "relative py-28 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 relative", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "my stack",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Tools I ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "build with" })
          ] }),
          description: "A modern toolkit spanning languages, frameworks, databases and developer tools."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: groups.map((g, gi) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: gi * 0.05 },
          className: "group relative glass rounded-3xl p-6 shadow-card hover:border-primary/50 transition-all hover:-translate-y-1",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute top-0 right-0 h-12 w-12 rounded-tr-3xl border-t border-r border-accent/30" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-accent shadow-glow-cyan" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: g.title })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
                "[",
                g.tag,
                ".",
                g.items.length.toString().padStart(2, "0"),
                "]"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: g.items.map((s, si) => /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: gi * 0.05 + si * 0.04 },
                className: "group/skill relative rounded-xl border border-border/60 bg-background/40 p-2.5 transition-all hover:border-primary/60 hover:shadow-glow",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted/60 group-hover/skill:scale-110 transition-transform",
                      style: { boxShadow: `0 0 16px ${s.color}33` },
                      children: /* @__PURE__ */ jsx(s.icon, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: s.name }),
                      /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] text-muted-foreground", children: [
                        s.level,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-1 h-1 w-full rounded-full bg-muted/50 overflow-hidden", children: /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        initial: { width: 0 },
                        whileInView: { width: `${s.level}%` },
                        viewport: { once: true },
                        transition: { duration: 1, delay: gi * 0.05 + si * 0.04 },
                        className: "block h-full rounded-full bg-gradient-primary shadow-glow"
                      }
                    ) })
                  ] })
                ] })
              },
              s.name
            )) })
          ]
        },
        g.title
      )) })
    ] })
  ] });
}
export {
  Skills
};
