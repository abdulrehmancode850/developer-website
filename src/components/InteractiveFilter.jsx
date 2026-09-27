import { useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveFilter() {
  const [selected, setSelected] = useState("Website");

  const options = {
    Website: { text: "Landing pages, corporate websites, and personal portfolios built for high conversion.", timeline: "3-5 Days" },
    Ecommerce: { text: "Online stores with dynamic products, carts, checkout flows, and payment layouts.", timeline: "5-10 Days" },
    WebApp: { text: "Custom React web apps with database integration (MySQL) and dashboards.", timeline: "1-2 Weeks" },
    AISolution: { text: "Smart web applications integrated with OpenAI APIs or custom AI tools.", timeline: "1-2 Weeks" },
  };

  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-4xl rounded-3xl border border-violet-500/20 bg-gradient-to-b from-violet-900/10 to-transparent p-8 text-center backdrop-blur-md">
        <h3 className="text-2xl font-bold text-white mb-6">What can I build for you?</h3>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(options).map((key) => (
            <button key={key} onClick={() => setSelected(key)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${selected === key ? "bg-violet-600 text-white" : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white"}`}>
              {key}
            </button>
          ))}
        </div>

        <motion.div key={selected} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto">
          <p className="text-zinc-300 text-sm leading-6 mb-4">{options[selected].text}</p>
          <span className="text-xs text-violet-400 font-semibold uppercase tracking-wider">Estimated Timeline: {options[selected].timeline}</span>
        </motion.div>
      </div>
    </section>
  );
}