import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";

const channels = [
  { icon: Mail, label: "Email", value: "jananilaj6@gmail.com", href: "mailto:jananilaj6@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 93397 88727", href: "tel:+919339788727" },
  { icon: FaGithub, label: "GitHub", value: "@nilaj575", href: "https://github.com/nilaj575" },
  { icon: FaLinkedin, label: "LinkedIn", value: "nilaj-jana", href: "https://linkedin.com/in/nilaj-jana-648436338" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:jananilaj6@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="get in touch"
          title={<>Let's <span className="text-gradient">build</span> something</>}
          description="Open to internships, freelance projects and collaborations. Drop a message — I reply fast."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* Channels */}
          <div className="space-y-3">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/60 hover:shadow-glow transition-all"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
              </motion.a>
            ))}
            <div className="glass rounded-2xl p-4 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" /> Based in India · Working worldwide
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 md:p-8 shadow-card space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Your name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Your email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                  placeholder="jane@company.com"
                />
              </Field>
            </div>
            <Field label="Message">
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow transition-all resize-none"
                placeholder="Tell me about your project, idea or role..."
              />
            </Field>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] active:scale-100 transition-transform"
            >
              {sent ? "Opening your email client..." : "Send message"}
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
