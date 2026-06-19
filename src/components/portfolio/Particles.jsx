import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
function Particles({ count = 30 }) {
  const dots = useMemo(
    () => Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 8,
      color: Math.random() > 0.5 ? "var(--neon)" : "var(--neon-2)"
    })),
    [count]
  );
  return /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: dots.map((d, i) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "absolute rounded-full opacity-60 animate-float",
      style: {
        left: `${d.left}%`,
        top: `${d.top}%`,
        width: d.size,
        height: d.size,
        background: d.color,
        boxShadow: `0 0 ${d.size * 4}px ${d.color}`,
        animationDelay: `${d.delay}s`,
        animationDuration: `${d.duration}s`
      }
    },
    i
  )) });
}
export {
  Particles
};
