import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, MapPin, Clock, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";

const EMAILJS_SERVICE_ID = "service_1ebl7vs";
const EMAILJS_TEMPLATE_ID = "template_p5wua5v";
const EMAILJS_PUBLIC_KEY = "-xaOzSN7lEdxrsfEE";

const channels = [
  { icon: Mail, label: "Email", value: "jananilaj6@gmail.com", href: "mailto:jananilaj6@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 93397 88727", href: "tel:+919339788727" },
  { icon: FaGithub, label: "GitHub", value: "@nilaj575", href: "https://github.com/nilaj575" },
  { icon: FaLinkedin, label: "LinkedIn", value: "nilaj-jana", href: "https://linkedin.com/in/nilaj-jana-648436338" },
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("EmailJS error", err);
      setErrorMsg(err?.text || "Failed to send. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <SectionHeading
          eyebrow="get in touch"
          title={<>Let's <span className="text-gradient">build</span> something</>}
          description="Open to internships, freelance projects and collaborations. Drop a message — I reply fast."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* Channels */}
          <div className="space-y-3">
            {/* status banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-4 flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Status</div>
                <div className="text-sm font-medium">Available — reply in &lt; 24h</div>
              </div>
              <Clock className="h-4 w-4 text-accent" />
            </motion.div>

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
                className="group relative flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/60 hover:shadow-glow transition-all overflow-hidden"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
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
            className="relative glass rounded-3xl p-6 md:p-8 shadow-card space-y-5"
          >
            {/* corner brackets */}
            <span className="absolute -top-1 -left-1 h-5 w-5 border-t-2 border-l-2 border-accent/60 rounded-tl-2xl" />
            <span className="absolute -top-1 -right-1 h-5 w-5 border-t-2 border-r-2 border-accent/60 rounded-tr-2xl" />
            <span className="absolute -bottom-1 -left-1 h-5 w-5 border-b-2 border-l-2 border-primary/60 rounded-bl-2xl" />
            <span className="absolute -bottom-1 -right-1 h-5 w-5 border-b-2 border-r-2 border-primary/60 rounded-br-2xl" />

            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <div className="font-mono text-xs text-accent">{"// send_message()"}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">FORM.v2</div>
            </div>

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
              disabled={status === "sending"}
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] active:scale-100 transition-transform overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative flex items-center gap-2">
                {status === "sending" && (<><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>)}
                {status === "sent" && (<><CheckCircle2 className="h-4 w-4" /> Message sent — I'll reply soon!</>)}
                {status === "error" && (<><AlertCircle className="h-4 w-4" /> {errorMsg || "Try again"}</>)}
                {status === "idle" && (<>Send message <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></>)}
              </span>
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
