import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // EmailJS Integrated Configuration
    emailjs
      .sendForm(
        "service_14q2lq2",
        "template_eafudgh",
        formRef.current,
        "2SzKF3XvTAKs-GV9I"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl mb-6">
            Let's build something <span className="text-violet-400">great together.</span>
          </h2>
          <p className="text-zinc-400 leading-7 mb-8">
            Have a project in mind, need a custom web app, or looking to hire a full-stack engineer? Feel free to drop a message!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-zinc-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Mail size={18} className="text-violet-400" />
              </div>
              <span>abdulrehmanab189@gmail.com</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md hover:border-violet-500/30 transition duration-500"
        >
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="John Doe"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="john@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell me about your project..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold text-white transition hover:bg-violet-500 shadow-lg shadow-violet-600/30 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={16} />
          </motion.button>

          {success && (
            <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
              <CheckCircle2 size={18} />
              <span>Message sent successfully!</span>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
              <AlertCircle size={18} />
              <span>Failed to send. Please try again.</span>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}