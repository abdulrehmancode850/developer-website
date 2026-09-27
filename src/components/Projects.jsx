import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

// Yahan apni images import karein (agar naam alag hon to file ke naam yahan change kar lein)
import sneakerImg from "../assets/Sneaker.png";
import dentalImg from "../assets/dental.png";
import dashboardImg from "../assets/dashboard.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projectsList = [
  {
    title: "3D Sneaker E-Commerce Store",
    description: "An immersive 3D e-commerce platform allowing users to interactively customize sneaker parts and color palettes in real-time with smooth layouts.",
    image: sneakerImg,
    tags: ["React", "Three.js", "Tailwind CSS", "Interactive 3D"],
    liveUrl: "https://abdulrehmancode850.github.io/sneaker-3d-store/",
    githubUrl: "https://github.com/abdulrehmancode850/sneaker-3d-store",
    category: "E-Commerce & 3D",
  },
  {
    title: "Dental Care Health Chatbot",
    description: "An AI-powered clinical assistant and patient intake platform featuring smart appointment booking, symptom triage, and cost estimation flows.",
    image: dentalImg,
    tags: ["React", "AI Integration", "Tailwind CSS", "Healthcare UI"],
    liveUrl: "https://dental-care-ai-pink.vercel.app",
    githubUrl: "https://github.com/abdulrehmancode850",
    category: "AI & Healthcare",
  },
  {
    title: "Modern Health SAAS Dashboard",
    description: "A high-performance medical dashboard featuring patient record tracking, interactive health analytics graphs, and appointment management systems.",
    image: dashboardImg,
    tags: ["React", "Dashboard UI", "Tailwind CSS", "Data Analytics"],
    liveUrl: "https://abdulrehmancode850.github.io/Modern-HealthCare-Saas-Dashboard/",
    githubUrl: "https://github.com/abdulrehmancode850/Modern-HealthCare-Saas-Dashboard",
    category: "Full Stack SaaS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:px-10 bg-white/[0.01]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Featured <span className="text-violet-400">projects.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] hover:border-violet-500/50 transition duration-300 group"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/60 text-violet-300 backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex gap-1 text-zinc-400">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Source Code"
                        className="p-1.5 hover:text-white transition"
                      >
                        <Code size={16} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Preview"
                        className="p-1.5 hover:text-white transition"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-violet-600 text-sm font-semibold text-white hover:bg-violet-700 transition shadow-lg shadow-violet-600/20"
                >
                  Live Preview <ExternalLink size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}