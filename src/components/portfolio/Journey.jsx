import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { BookOpen, Code2, Zap, Infinity as InfinityIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
const steps = [
  {
    phase: "phase_01",
    icon: BookOpen,
    title: "Self-Learning Journey",
    text: "Started exploring web development through docs, courses, and open-source projects \u2014 building strong fundamentals."
  },
  {
    phase: "phase_02",
    icon: Code2,
    title: "Hands-on Project Development",
    text: "Translated learning into shipping \u2014 building full-stack applications end-to-end with clean architecture."
  },
  {
    phase: "phase_03",
    icon: Zap,
    title: "Real-time Applications",
    text: "Mastered Socket.io to build chess multiplayer, live trackers and real-time chat experiences."
  },
  {
    phase: "phase_04",
    icon: InfinityIcon,
    title: "Continuous Learning",
    text: "Exploring AI/ML, scalable backend systems, and modern UI patterns to keep growing as an engineer."
  }
];
function Journey() {
  return /* @__PURE__ */ jsxs("section", { id: "journey", className: "relative py-28 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 relative", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "experience",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Learning Journey & ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Development Experience" })
          ] }),
          description: "No traditional roles yet \u2014 just a relentless build-and-learn loop."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-12", children: steps.map((s, i) => {
          const left = i % 2 === 0;
          return /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: left ? -40 : 40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              className: `relative md:grid md:grid-cols-2 md:gap-12 items-center`,
              children: [
                /* @__PURE__ */ jsx("div", { className: `pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`, children: /* @__PURE__ */ jsxs("div", { className: "group relative glass rounded-2xl p-6 hover:border-primary/60 transition-all hover:shadow-glow", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-accent/60 rounded-tl-xl" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-primary/60 rounded-br-xl" }),
                  /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-3 ${left ? "md:flex-row-reverse" : ""}`, children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow", children: [
                      /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }),
                      /* @__PURE__ */ jsx("span", { className: "absolute -inset-1 rounded-xl border border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: left ? "md:text-right" : "", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-accent", children: s.phase }),
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: s.title })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.text })
                ] }) }),
                /* @__PURE__ */ jsxs("span", { className: "absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex h-5 w-5 items-center justify-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute h-5 w-5 rounded-full bg-primary/40 animate-ping" }),
                  /* @__PURE__ */ jsx("span", { className: "relative h-3 w-3 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" })
                ] })
              ]
            },
            s.title
          );
        }) })
      ] })
    ] })
  ] });
}
export {
  Journey
};
