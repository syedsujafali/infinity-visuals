import { motion } from "framer-motion";
import { Star } from "lucide-react";
import testimonialsBg from "@/assets/testimonials-bg.jpg";

const testimonials = [
  {
    quote: "Infinity Engineering transformed our vision into reality. Their precision and professionalism are unmatched.",
    author: "Sarah Chen",
    role: "Director, Apex Developments",
  },
  {
    quote: "From planning to execution, their team delivered a world-class solution on time and within budget.",
    author: "James Mitchell",
    role: "CEO, Sterling Infrastructure",
  },
  {
    quote: "Their innovative approach to sustainable design set a new standard for our entire portfolio.",
    author: "Maria Rodriguez",
    role: "VP Engineering, Horizon Group",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
    <img src={testimonialsBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 dark:opacity-20" loading="lazy" width={1920} height={800} />
    <div className="absolute inset-0 bg-background/55 dark:bg-background/65" />
    <div className="container mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Testimonials</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
          What Our <span className="gradient-text">Clients</span> Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/90 text-sm leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <div className="font-display font-semibold text-foreground text-sm">{t.author}</div>
              <div className="text-muted-foreground text-xs">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
