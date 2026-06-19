import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
  { icon: FaLinkedin, label: "LinkedIn", value: "nilaj-jana", href: "https://linkedin.com/in/nilaj-jana-648436338" }
];
function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = async (e) => {
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
          message: form.message
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error", err);
      setErrorMsg(err?.text || "Failed to send. Please try again.");
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-28 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary/10 blur-[140px]" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 relative", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "get in touch",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Let's ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "build" }),
            " something"
          ] }),
          description: "Open to internships, freelance projects and collaborations. Drop a message \u2014 I reply fast."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "glass rounded-2xl p-4 flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" }),
                  /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "Status" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "Available \u2014 reply in < 24h" })
                ] }),
                /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-accent" })
              ]
            }
          ),
          channels.map((c, i) => /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: c.href,
              target: c.href.startsWith("http") ? "_blank" : void 0,
              rel: "noreferrer",
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.06 },
              whileHover: { x: 4 },
              className: "group relative flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/60 hover:shadow-glow transition-all overflow-hidden",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" }),
                /* @__PURE__ */ jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(c.icon, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: c.label }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium truncate", children: c.value })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity", children: "\u2192" })
              ]
            },
            c.label
          )),
          /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-4 flex items-center gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-accent" }),
            " Based in India \xB7 Working worldwide"
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.form,
          {
            onSubmit: submit,
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "relative glass rounded-3xl p-6 md:p-8 shadow-card space-y-5",
            children: [
              /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -left-1 h-5 w-5 border-t-2 border-l-2 border-accent/60 rounded-tl-2xl" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 h-5 w-5 border-t-2 border-r-2 border-accent/60 rounded-tr-2xl" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 -left-1 h-5 w-5 border-b-2 border-l-2 border-primary/60 rounded-bl-2xl" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 -right-1 h-5 w-5 border-b-2 border-r-2 border-primary/60 rounded-br-2xl" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-border/60", children: [
                /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-accent", children: "// send_message()" }),
                /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "FORM.v2" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(Field, { label: "Your name", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    required: true,
                    value: form.name,
                    onChange: (e) => setForm({ ...form, name: e.target.value }),
                    className: "w-full bg-transparent rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow transition-all",
                    placeholder: "Jane Doe"
                  }
                ) }),
                /* @__PURE__ */ jsx(Field, { label: "Your email", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    required: true,
                    type: "email",
                    value: form.email,
                    onChange: (e) => setForm({ ...form, email: e.target.value }),
                    className: "w-full bg-transparent rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow transition-all",
                    placeholder: "jane@company.com"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx(Field, { label: "Message", children: /* @__PURE__ */ jsx(
                "textarea",
                {
                  required: true,
                  rows: 6,
                  value: form.message,
                  onChange: (e) => setForm({ ...form, message: e.target.value }),
                  className: "w-full bg-transparent rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow transition-all resize-none",
                  placeholder: "Tell me about your project, idea or role..."
                }
              ) }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  disabled: status === "sending",
                  className: "group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] active:scale-100 transition-transform overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute inset-0 translate-y-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0" }),
                    /* @__PURE__ */ jsxs("span", { className: "relative flex items-center gap-2", children: [
                      status === "sending" && /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
                        " Sending..."
                      ] }),
                      status === "sent" && /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
                        " Message sent \u2014 I'll reply soon!"
                      ] }),
                      status === "error" && /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
                        " ",
                        errorMsg || "Try again"
                      ] }),
                      status === "idle" && /* @__PURE__ */ jsxs(Fragment, { children: [
                        "Send message ",
                        /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
                      ] })
                    ] })
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1.5", children })
  ] });
}
export {
  Contact
};
