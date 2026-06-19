import { jsx, jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nilaj Jana \u2014 Full Stack Developer" },
      {
        name: "description",
        content: "Portfolio of Nilaj Jana \u2014 Full Stack Developer building modern, scalable, real-time web applications with React, Next.js, Node.js and more."
      },
      { property: "og:title", content: "Nilaj Jana \u2014 Full Stack Developer" },
      {
        property: "og:description",
        content: "Modern, futuristic portfolio showcasing full-stack projects, skills and experience."
      },
      { property: "og:type", content: "website" }
    ]
  }),
  component: Index
});
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen text-foreground", children: [
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Journey, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ScrollToTop, {})
  ] });
}
export {
  Route
};
