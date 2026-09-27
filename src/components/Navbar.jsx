import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/70 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <motion.a whileHover={{ scale: 1.05 }} href="#" className="text-xl font-bold tracking-tight">
            Abdul-Rehman<span className="text-violet-400">.</span>
          </motion.a>

          <div className="hidden items-center gap-8 md:flex">
            {["About", "Services", "Projects", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative text-sm text-zinc-400 transition hover:text-white group">
                {item}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-violet-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur-xl transition hover:border-violet-500/50 hover:bg-violet-500/10 md:block">
            Let's Work Together
          </motion.a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mx-6 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl md:hidden sticky top-20 z-40">
          <div className="flex flex-col gap-5">
            {["About", "Services", "Projects", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}