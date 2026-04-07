import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Pencil, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We listen, understand your vision, and define the project scope." },
  { icon: ClipboardList, title: "Planning", desc: "Detailed engineering plans with timelines and resource allocation." },
  { icon: Pencil, title: "Design", desc: "Precision design using the latest modeling and simulation tools." },
  { icon: Rocket, title: "Execution", desc: "Seamless project delivery with rigorous quality assurance." },
];

const Process = () => (
  <section id="process" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg" />
    <div className="container mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Process</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
          How We <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6 gradient-border">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs text-primary font-semibold tracking-widest uppercase mb-2 block">
                  Step {i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
