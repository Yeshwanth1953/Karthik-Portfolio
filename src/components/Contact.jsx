import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

// ============================================================
// 🔧 EMAILJS CONFIG — Replace these 3 values after you sign up
//    at https://emailjs.com
//
//    SERVICE_ID  → Your EmailJS service (Gmail connection)
//    TEMPLATE_ID → Your email template ID
//    PUBLIC_KEY  → Your EmailJS public key
// ============================================================
const EMAILJS_SERVICE_ID  = "service_leoi0da";
const EMAILJS_TEMPLATE_ID = "template_mziye8g";
const EMAILJS_PUBLIC_KEY  = "ycvrNHDvp8ZjVjfh2";

// 🔧 Replace with Karthik's WhatsApp number (country code + number)
const WHATSAPP_NUMBER = "919848861475";

function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ── SEND via EmailJS ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  // ── SEND via WhatsApp ──
  // Whatever the user typed in the message box is sent as a WhatsApp message
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Karthik! 👋\n\nName: ${formData.name || "Visitor"}\nEmail: ${formData.email || "—"}\n\n${formData.message || "I'd like to connect with you!"}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const contactLinks = [
    {
      icon: "✉️",
      label: "Email",
      value: "allukarthik1811@gmail.com",
      href: "mailto:allukarthik1811@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "karthiknaiduallu",
      href: "https://www.linkedin.com/in/karthiknaiduallu",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "Karthikallu1811",
      href: "https://github.com/Karthikallu1811",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Visakhapatnam, India",
      href: null,
    },
  ];

  return (
    <section className="contact-page">

      {/* Background */}
      <div className="contact-bg-grid" />
      <div className="contact-orb contact-orb--1" />
      <div className="contact-orb contact-orb--2" />

      {/* ── HERO ── */}
      <div className="contact-hero">
        <motion.p
          className="contact-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          GET IN TOUCH
        </motion.p>

        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's <span>Connect</span>
        </motion.h1>

        <motion.p
          className="contact-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Have a project in mind, want to collaborate, or just want to say hi?
          Drop a message below — I'll get back to you as soon as possible.
        </motion.p>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="contact-layout">

        {/* ── LEFT — Contact Info ── */}
        <RevealSection delay={0.1}>
          <div className="contact-info">
            <h2 className="contact-info__heading">Contact Details</h2>
            <p className="contact-info__sub">
              Reach out through any of these channels or use the message form.
            </p>

            <div className="contact-links">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={i}
                  className="contact-link-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <div className="contact-link-item__icon">{link.icon}</div>
                  <div className="contact-link-item__text">
                    <span className="contact-link-item__label">{link.label}</span>
                    {link.href ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link-item__value">
                        {link.value}
                      </a>
                    ) : (
                      <span className="contact-link-item__value">{link.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp button */}
            <motion.button
              className="whatsapp-btn"
              onClick={handleWhatsApp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="whatsapp-btn__icon">💬</span>
              Message on WhatsApp
            </motion.button>

            <p className="whatsapp-hint">
              * Clicking this will open WhatsApp with your message pre-filled
            </p>
          </div>
        </RevealSection>

        {/* ── RIGHT — Message Form ── */}
        <RevealSection delay={0.2}>
          <div className="contact-form-wrapper">
            <div className="contact-form-glow" />

            <h2 className="contact-form__heading">Send a Message</h2>
            <p className="contact-form__sub">
              Fill in the form and hit send — it goes straight to my inbox. 📬
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">

              {/* Name + Email row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Karthik"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="me@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message box */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                className={`form-submit ${status}`}
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02, y: status === "sending" ? 0 : -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {status === "idle"    && <><span>Send Message</span> <span>→</span></>}
                {status === "sending" && <><span className="spinner" /> Sending...</>}
                {status === "success" && <>✅ Message Sent!</>}
                {status === "error"   && <>❌ Failed — Try Again</>}
              </motion.button>

              {/* Reset after error */}
              {status === "error" && (
                <button type="button" className="form-reset" onClick={() => setStatus("idle")}>
                  Try again
                </button>
              )}

            </form>
          </div>
        </RevealSection>

      </div>
    </section>
  );
}