import { jsx, jsxs } from "react/jsx-runtime";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-border/60 mt-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-mono font-bold shadow-glow", children: "N" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-mono text-sm", children: [
          "nilaj",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: ".dev" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "\xA9 ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Nilaj Jana \u2014 Built with React + Tailwind"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("a", { href: "mailto:jananilaj6@gmail.com", className: "p-2.5 rounded-xl glass hover:shadow-glow transition", "aria-label": "Email", children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://github.com/nilaj575", target: "_blank", rel: "noreferrer", className: "p-2.5 rounded-xl glass hover:shadow-glow transition", "aria-label": "GitHub", children: /* @__PURE__ */ jsx(FaGithub, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://linkedin.com/in/nilaj-jana-648436338", target: "_blank", rel: "noreferrer", className: "p-2.5 rounded-xl glass hover:shadow-glow-cyan transition", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx(FaLinkedin, { className: "h-4 w-4" }) })
    ] })
  ] }) });
}
export {
  Footer
};
