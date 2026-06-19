import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 uppercase tracking-widest">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Projects I've Built
          </h2>

          <p className="text-gray-400 mt-4">
            Full-stack and real-time applications built with modern technologies.
          </p>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div className="relative">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scroll Container */}
          <div
            className="
              flex
              gap-8
              overflow-x-auto
              snap-x
              snap-mandatory
              scroll-smooth
              scrollbar-hide
              pb-4
              px-2
            "
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="
                  min-w-[340px]
                  md:min-w-[420px]
                  lg:min-w-[480px]
                  flex-shrink-0
                  snap-center
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-3xl
                  overflow-hidden
                  hover:border-cyan-500/50
                  transition-all
                "
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 relative">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight size={22} />
                  </a>

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm opacity-90">
                    {project.tagline}
                  </p>

                </div>

                {/* Body */}
                <div className="p-6">

                  <p className="text-gray-400">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-5 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          bg-zinc-800
                          border
                          border-zinc-700
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        border
                        border-zinc-700
                        rounded-lg
                        hover:border-cyan-400
                        transition-colors
                      "
                    >
                      <Github size={18} />
                      Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        bg-cyan-500
                        text-black
                        rounded-lg
                        font-medium
                        hover:scale-105
                        transition-transform
                      "
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};