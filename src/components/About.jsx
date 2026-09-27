import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">About Me</p>
          <h2 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
            I turn ideas into <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">digital products.</span>
          </h2>
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-violet-500 to-transparent" />
        </div>

        <div className="space-y-5">
          {/* Card 1 */}
          <motion.p whileHover={{ scale: 1.02, x: 5 }} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-base leading-8 text-zinc-400 transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/[0.05]">
            I'm a software engineer focused on building modern, responsive and high-quality web experiences.
          </motion.p>

          {/* Card 2 - Aapka Selected Full Stack Paragraph */}
          <motion.p whileHover={{ scale: 1.02, x: 5 }} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-base leading-8 text-zinc-400 transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/[0.05]">
            As a Full Stack Engineer, I utilize <span className="text-violet-400 font-semibold">JavaScript, TypeScript, React, Node.js, Tailwind CSS, Three.js, MySQL, and REST APIs</span> to design, build, and deploy complete digital applications—from dynamic 3D frontends to robust database architectures.
          </motion.p>

          {/* Card 3 */}
          <motion.p whileHover={{ scale: 1.02, x: 5 }} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-base leading-8 text-zinc-400 transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/[0.05]">
            My goal is simple: understand the problem, build the right solution, and deliver a product that businesses can actually use.
          </motion.p>
        </div>
      </div>
    </section>
  );
}