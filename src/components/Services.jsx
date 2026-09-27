import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    title: "Business Websites",
    description: "Modern, responsive websites for businesses, startups, and personal brands.",
  },
  {
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&auto=format&fit=crop&q=80",
    title: "E-Commerce Development",
    description: "Professional online stores with product pages, shopping flows, and responsive layouts.",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    title: "React Applications",
    description: "Fast and interactive React applications with reusable components and smooth animations.",
  },
  {
    // Updated Futuristic AI Image
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80",
    title: "AI Web Solutions",
    description: "AI-powered features and smart application flows integrated into modern web apps.",
  },
  {
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop&q=80",
    title: "UI Development",
    description: "Clean and polished interfaces created for seamless user experiences across all screen sizes.",
  },
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    title: "Website Maintenance",
    description: "Updates, improvements, bug fixes, and continuous optimization for existing websites.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Services
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            What I can <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">build for you.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.3,
              }}
              whileHover={{ scale: 1.03, y: -16 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/50 hover:bg-white/[0.05] shadow-2xl"
            >
              {/* Image Container */}
              <div className="mb-6 h-40 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mb-3 text-xl font-bold text-white group-hover:text-cyan-300 transition">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}