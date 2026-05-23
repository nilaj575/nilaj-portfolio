import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-mono font-bold shadow-glow">
            N
          </span>
          <div>
            <div className="font-mono text-sm">nilaj<span className="text-gradient">.dev</span></div>
            <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nilaj Jana — Built with React + Tailwind</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:jananilaj6@gmail.com" className="p-2.5 rounded-xl glass hover:shadow-glow transition" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://github.com/nilaj575" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl glass hover:shadow-glow transition" aria-label="GitHub">
            <FaGithub className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/nilaj-jana-648436338" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl glass hover:shadow-glow-cyan transition" aria-label="LinkedIn">
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
