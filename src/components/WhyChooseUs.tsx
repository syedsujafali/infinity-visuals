import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 120, suffix: "+", label: "Clients Worldwide" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(ease * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-5xl md:text-6xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm tracking-wide uppercase">{label}</div>
    </motion.div>
  );
};

const WhyChooseUs = () => (
  <section id="why-us" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
    <div className="container mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Why Choose Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
          Numbers That <span className="gradient-text">Speak</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Decades of experience, hundreds of projects, and an unwavering commitment to excellence.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
