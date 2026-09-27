import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  { 
    step: "01", 
    title: "Discovery", 
    desc: "Understanding client goals, target audience, and project scope.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80" 
  },
  { 
    step: "02", 
    title: "Planning", 
    desc: "Architecting structure, database design, and tech stack setup.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80" 
  },
  { 
    step: "03", 
    title: "UI/UX Design", 
    desc: "Crafting sleek, high-converting interfaces and modern user flows.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop&q=80" 
  },
  { 
    step: "04", 
    title: "Development", 
    desc: "Building fast frontend and scalable backend / database code.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80" 
  },
  { 
    step: "05", 
    title: "Testing", 
    desc: "Cross-device responsiveness, speed optimization, and security check.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80" 
  },
  { 
    step: "06", 
    title: "Launch", 
    desc: "Deploying to live servers with smooth handover and documentation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" 
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-28 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">Workflow</p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">My development <span className="text-violet-400">process.</span></h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp} 
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.2,
              }}
              whileHover={{ scale: 1.03, y: -14 }} 
              className="group relative overflow-hidden rounded-3xl border border-white/10 p-8 shadow-2xl transition-all duration-300 hover:border-violet-500/50"
            >
              {/* Background Image with Balanced Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Multi-stop gradient overlay: keeps image visible while making text super readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 transition-colors duration-300 group-hover:from-slate-950/95 group-hover:via-slate-950/75" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <span className="text-5xl font-extrabold text-violet-400/40 mb-4 block font-mono">{item.step}</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition">{item.title}</h3>
                <p className="text-sm font-medium text-zinc-200 leading-6 drop-shadow-md">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}