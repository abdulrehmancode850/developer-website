import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const packages = [
  { name: "Starter", price: "PKR 5K", desc: "Ideal for small businesses & personal branding.", features: ["Responsive 1-3 Page Website", "Modern UI & Framer Animations", "Contact Form Setup", "Mobile Optimization"] },
  { name: "Professional", price: "PKR 10K", desc: "Best for growing businesses & dynamic sites.", features: ["Multi-page Web Application", "React + Tailwind Styling", "Database Setup (MySQL)", "API / Form Integration"] },
  { name: "Custom Project", price: "Custom Quote", desc: "For complex web apps & AI integrations.", features: ["Full-Stack Application", "Custom AI Integrations", "Database Architecture", "Priority Handover & Support"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-28 md:px-10 bg-white/[0.01]">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">Investment</p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">Transparent <span className="text-violet-400">pricing options.</span></h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} whileHover={{ y: -8 }} className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-violet-500/50 transition">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-3xl font-extrabold text-violet-400 mb-2">{pkg.price}</div>
                <p className="text-xs text-zinc-400 mb-6">{pkg.desc}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check size={16} className="text-violet-400" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="w-full text-center py-3 rounded-xl border border-white/15 bg-white/5 text-sm font-semibold text-white hover:bg-violet-600 hover:border-violet-600 transition">
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}