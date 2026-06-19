import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Download, ArrowRight } from "lucide-react";
import profileImage from "../../assets/profile.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-400 mb-4"
          >
            Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm
            <span className="text-cyan-400">
              {" "}Nilaj Jana
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-light text-foreground/80 mt-3"
          >
            Full Stack Developer
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl mt-4"
          >
            <Typewriter
              words={[
               "React.js",
                "Node.js",
                "Next.js",
                "Express.js",
                "JavaScript",
                "Java",
                "Python",
                "html",
                "css",
                "tailwind",
                "Bootstrap"
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-400"
          >
            I build modern web applications using
            React, Node.js, Express, MongoDB,
            JavaScript and Java.
          </motion.p>

          <div className="flex gap-4 mt-8">

            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 rounded-lg flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border rounded-lg flex items-center gap-2"
            >
              <Mail size={18} />
              Contact
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border rounded-lg flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>

          </div>

          <div className="flex gap-4 mt-8">

            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={28} />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-cyan-500/30"></div>

            {/* Profile */}
            <img
              src={profileImage}
              alt="Guddu Jana"
              className="
                relative
                w-80
                h-80
                md:w-96
                md:h-96
                rounded-full
                object-cover
                border-4
                border-cyan-400
              "
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              className="
                absolute
                top-4
                -left-10
                bg-black
                px-4
                py-2
                rounded-lg
              "
            >
              {"<Code />"}
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
              className="
                absolute
                bottom-4
                -right-10
                bg-black
                px-4
                py-2
                rounded-lg
              "
            >
              Full Stack
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

