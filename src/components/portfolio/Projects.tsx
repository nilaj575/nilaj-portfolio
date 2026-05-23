import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  accent: "violet" | "cyan" | "pink" | "amber";
};

const projects: Project[] = [
  {
    title: "Foody-Rells-App",
    tagline: "Full-stack food delivery + social",
    description:
      "A powerful eCommerce food delivery app inspired by Zomato + Instagram. Includes real-time chat, payments, and rich responsive UI.",
    features: ["Real-time order tracking", "Payment integration", "Auth system", "Chat with food partners"],
    stack: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
    accent: "violet",
  },
  {
    title: "Chess Game",
    tagline: "Real-time multiplayer chess",
    description:
      "A live multiplayer chess game built with Socket.io where two players can compete while spectators watch in real time.",
    features: ["Real-time gameplay", "Multiplayer support", "Spectator mode", "Socket.io engine"],
    stack: ["Node.js", "Express", "Socket.io", "JavaScript"],
    accent: "cyan",
  },
  {
    title: "Live Tracker",
    tagline: "Real-time location tracking",
    description:
      "A real-time live location tracking application similar to Google Maps with dynamic markers and updates.",
    features: ["Live location tracking", "Dynamic map updates", "Live markers"],
    stack: ["Node.js", "Socket.io", "Leaflet", "Express"],
    accent: "pink",
  },
  {
    title: "NewsMonkey",
    tagline: "Categorized news reader",
    description:
      "A React-based frontend news application for browsing categorized news dynamically using a public News API.",
    features: ["News API integration", "Category filtering", "Responsive UI"],
    stack: ["React.js", "Bootstrap", "News API"],
    accent: "amber",
  },
];

const accentMap: Record<Project["accent"], string> = {
  violet: "from-[oklch(0.72_0.2_295)] to-[oklch(0.78_0.17_195)]",
  cyan: "from-[oklch(0.78_0.17_195)] to-[oklch(0.7_0.18_220)]",
  pink: "from-[oklch(0.72_0.22_15)] to-[oklch(0.72_0.2_295)]",
  amber: "from-[oklch(0.8_0.16_75)] to-[oklch(0.72_0.2_30)]",
};

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="selected work"
          title={<>Projects I've <span className="text-gradient">built</span></>}
          description="A handful of full-stack and real-time applications crafted with modern tools."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-3xl overflow-hidden shadow-card hover:border-primary/60 transition-all"
            >
              {/* Preview header */}
              <div className={`relative h-44 bg-gradient-to-br ${accentMap[p.accent]} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-mono text-5xl md:text-6xl font-bold text-background/90 tracking-tight px-6 text-center">
                    {p.title.split("-")[0]}
                  </div>
                </div>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
                </div>
                <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
                  {p.tagline}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <a
                    href="https://github.com/nilaj575"
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-60 group-hover:opacity-100 transition-opacity"
                    aria-label="View project"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <ul className="mt-4 grid grid-cols-2 gap-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <a
                    href="https://github.com/nilaj575"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium hover:border-primary/60 hover:bg-muted/50 transition-colors"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-glow"
                  >
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
