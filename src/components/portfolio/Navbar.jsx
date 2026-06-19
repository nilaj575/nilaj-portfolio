import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6 },
      className: `fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
        /* @__PURE__ */ jsxs("nav", { className: `flex items-center justify-between rounded-2xl px-5 py-3 ${scrolled ? "glass-strong" : "glass"}`, children: [
          /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-mono font-bold shadow-glow", children: "N" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-sm tracking-tight", children: [
              "nilaj",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: ".dev" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform",
              children: "Let's talk"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen(!open),
              className: "md:hidden p-2 rounded-lg hover:bg-muted",
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: `block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}` }),
                /* @__PURE__ */ jsx("span", { className: `block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}` }),
                /* @__PURE__ */ jsx("span", { className: `block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}` })
              ] })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx(
          motion.ul,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            className: "md:hidden mt-2 glass-strong rounded-2xl p-3 space-y-1",
            children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "block px-3 py-2 text-sm rounded-lg hover:bg-muted",
                children: l.label
              }
            ) }, l.href))
          }
        )
      ] })
    }
  );
}
export {
  Navbar
};
