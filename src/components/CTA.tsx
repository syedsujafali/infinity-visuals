import { motion } from "framer-motion";
import sectionBg from "@/assets/section-bg.jpg";

const CTA = () => (
  <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
    {/* Background image */}
    <img src={sectionBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35 dark:opacity-25" loading="lazy" width={1920} height={800} />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

    <div className="container mx-auto px-6 relative text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto">
          Let's Build Something That{" "}
          <span className="gradient-text">Lasts.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Ready to bring your next project to life? Let's discuss how our engineering expertise can make it happen.
        </p>
        <a
          href="mailto:contact@infinityengineering.com"
          className="btn-glow inline-block text-base font-semibold px-10 py-4 rounded-xl text-primary-foreground"
        >
          Request a Consultation
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTA;
