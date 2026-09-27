import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            Available for freelance projects
          </motion.div>

          <motion.p variants={fadeInUp} className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Software Engineer & Full Stack Developer
          </motion.p>

          <motion.h1 variants={fadeInUp} className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            I build <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">digital experiences</span> that matter.
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
            I create modern websites, full-stack applications and AI-powered digital solutions that help businesses turn ideas into real products.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40">
              View My Work <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400/50 hover:bg-cyan-500/10">
              Hire Me
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-4">
            <motion.a whileHover={{ y: -3 }} href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:border-violet-400 hover:text-white">
              <FaGithub size={18} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:border-violet-400 hover:text-white">
              <FaLinkedin size={18} />
            </motion.a>
            <span className="h-px w-16 bg-white/15" />
            <span className="text-sm font-medium text-zinc-400">Based in Pakistan</span>
          </motion.div>
        </motion.div>

        {/* Right Glowing Developer Visual */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden h-[500px] items-center justify-center lg:flex">
          <div className="absolute h-80 w-80 rounded-full border border-violet-500/20 bg-violet-500/5 blur-sm" />
          <div className="absolute h-[420px] w-[420px] rounded-full border border-cyan-500/10" />

          <motion.div animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="glow-card relative flex h-80 w-80 flex-col justify-between overflow-hidden rounded-[40px] p-8 shadow-2xl">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div className="h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                <span className="text-xs font-mono text-cyan-300">DEV_01</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-violet-400">Current Focus</p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Full Stack <br /><span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">+ AI</span></h2>
            </div>
            <div className="flex gap-2">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">React</span>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">AI</span>
              <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold text-fuchsia-300">SQL</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}