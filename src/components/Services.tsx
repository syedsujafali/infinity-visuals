import { motion } from "framer-motion";
import { Zap, Wrench, Droplets, Building2 } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Wrench,
    title: "Mechanical Engineering",
    description: "HVAC systems, energy modeling, and mechanical infrastructure designed for peak performance and sustainability.",
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description: "Power distribution, lighting design, and smart building integration with cutting-edge technology.",
  },
  {
    icon: Droplets,
    title: "Plumbing Engineering",
    description: "Water systems, fire protection, and sustainable plumbing solutions for modern buildings.",
  },
  {
    icon: Building2,
    title: "Structural Engineering",
    description: "Structural analysis, seismic design, and innovative solutions for complex architectural visions.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card p-8 group cursor-pointer hover:glow-primary transition-shadow duration-500 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border rounded-lg" />
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
        >
          <Icon className="w-7 h-7 text-primary" />
        </motion.div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => (
  <section id="services" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 grid-bg" />
    <div className="container mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Expertise</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
          Comprehensive <span className="gradient-text">Engineering</span> Solutions
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          From concept to completion, we deliver precision engineering across every discipline.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
