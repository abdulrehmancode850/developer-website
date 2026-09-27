import { motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import WhatsAppFloat from "./components/WhatsAppFloat"; // WhatsApp button import
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import InteractiveFilter from "./components/InteractiveFilter";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {/* 1. Custom Smooth Trailing Cursor */}
      <CustomCursor />

      {/* 2. WhatsApp Floating Button */}
      <WhatsAppFloat />
      
      {/* Dynamic Background Glow Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top Violet Orb */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[-150px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/30 to-fuchsia-600/20 blur-[160px]"
        />
        {/* Right Cyan/Blue Orb */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[-150px] h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-cyan-500/20 to-blue-600/20 blur-[170px]"
        />
        {/* Bottom Pink/Purple Orb */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-gradient-to-r from-pink-500/15 to-violet-600/20 blur-[150px]"
        />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <InteractiveFilter />
      <Projects />
      <Skills />
      <Process />
      <Pricing />
      <Contact />

      <footer className="border-t border-white/10 bg-black/40 py-8 text-center text-xs text-zinc-400 backdrop-blur-md">
        © {new Date().getFullYear()} Abdul Rehman. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}