import { motion } from "framer-motion";
import { Code2, Database, Cpu } from "lucide-react";
import { skillCategories } from "../data/skills";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const icons = [
  <Code2 className="text-violet-400" size={24} />,
  <Database className="text-violet-400" size={24} />,
  <Cpu className="text-violet-400" size={24} />
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:px-10 bg-white/[0.01]">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">Technical Stack</p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">Technologies & <span className="text-violet-400">Skills.</span></h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              animate={{ 
                y: [0, -12, 0], 
                rotate: [0, 1, 0] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: idx * 0.4 
              }}
              whileHover={{ scale: 1.03, y: -16 }} 
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-violet-500/40 hover:bg-white/[0.04]"
            >
              <div className="mb-6 flex items-center gap-3">
                {icons[idx]}
                <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span whileHover={{ scale: 1.08 }} key={sIdx} className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-zinc-300 hover:border-violet-500/50 hover:bg-violet-500/10 transition cursor-default">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}