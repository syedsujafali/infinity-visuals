import { motion } from "framer-motion";
import projectTransit from "@/assets/project-transit.png";
import projectAzure from "@/assets/project-azure.png";
import projectHospital from "@/assets/project-hospital.png";

const projects = [
  { title: "Metro Transit Hub", category: "Infrastructure", image: projectTransit },
  { title: "Azure Tower Complex", category: "Commercial", image: projectAzure },
  { title: "Greenfield Hospital", category: "Healthcare", image: projectHospital },
  { title: "Solar Grid Station", category: "Energy", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop" },
  { title: "Riverside Residences", category: "Residential", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop" },
  { title: "Innovation Campus", category: "Education", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop" },
];

const Projects = () => (
  <section id="projects" className="py-24 md:py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Portfolio</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A showcase of engineering excellence across diverse sectors.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative rounded-xl overflow-hidden glass-card cursor-pointer"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div>
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">{p.category}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1">{p.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
