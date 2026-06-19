import { jsx } from "react/jsx-runtime";
import { motion, useScroll, useSpring } from "framer-motion";
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { scaleX },
      className: "fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-primary z-[60] shadow-glow"
    }
  );
}
export {
  ScrollProgress
};
