import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket, Brain, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
const traits = [
  { icon: Code2, title: "Full Stack Mindset", text: "Comfortable across the frontend and backend stack." },
  { icon: Rocket, title: "Scalable & Responsive", text: "Building apps that look great and ship fast." },
  { icon: Brain, title: "Problem Solver", text: "Strong logic, clean abstractions, continuous learning." },
  { icon: Sparkles, title: "Real-time UX", text: "Love sockets, live data and rich modern interfaces." }
];
const stats = [
  { label: "Projects", value: "10+" },
  { label: "Years coding", value: "3+" },
  { label: "Technologies", value: "15+" }
];
function About() {
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "relative py-28", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 relative", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "about me",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Designing solutions, ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "not just code" })
          ] }),
          description: "I'm a passionate full stack developer focused on building scalable, real-time and beautifully crafted web applications."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-start", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "relative glass rounded-3xl p-8 shadow-card",
            children: [
              /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -left-1 h-5 w-5 border-t-2 border-l-2 border-accent/60 rounded-tl-2xl" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 h-5 w-5 border-t-2 border-r-2 border-accent/60 rounded-tr-2xl" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 -left-1 h-5 w-5 border-b-2 border-l-2 border-primary/60 rounded-bl-2xl" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 -right-1 h-5 w-5 border-b-2 border-r-2 border-primary/60 rounded-br-2xl" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-mono text-sm text-accent", children: "// education" }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "log_02" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l-2 border-primary/40 space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute -left-[39px] top-1 h-4 w-4 rounded-full bg-gradient-primary shadow-glow" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-accent text-xs font-mono", children: [
                    /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4" }),
                    " ongoing"
                  ] }),
                  /* @__PURE__ */ jsx("h4", { className: "mt-1 text-lg font-semibold", children: "B.Tech in CSE \u2014 AI & ML" }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "MCKV Institute of Engineering" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Focused on computer science fundamentals, AI/ML, data structures and modern web technologies." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute -left-[39px] top-1 h-4 w-4 rounded-full bg-accent shadow-glow-cyan" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-accent text-xs font-mono", children: [
                    /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
                    " self-taught"
                  ] }),
                  /* @__PURE__ */ jsx("h4", { className: "mt-1 text-lg font-semibold", children: "Full Stack Web Development" }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "React, Next.js, Node.js, Express, MongoDB, Socket.io and more." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 pt-6 border-t border-border/60 grid grid-cols-3 gap-2", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "font-display text-2xl md:text-3xl font-bold text-gradient", children: s.value }),
                /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1", children: s.label })
              ] }, s.label)) })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: traits.map((t, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            whileHover: { y: -6 },
            className: "group relative glass rounded-2xl p-6 hover:border-primary/60 transition-colors overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 h-24 w-24 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
                  style: { background: "var(--gradient-glow)" }
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsx(t.icon, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] text-muted-foreground", children: [
                    "0",
                    i + 1
                  ] })
                ] }),
                /* @__PURE__ */ jsx("h4", { className: "mt-4 font-semibold", children: t.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: t.text })
              ] })
            ]
          },
          t.title
        )) })
      ] })
    ] })
  ] });
}
export {
  About
};
