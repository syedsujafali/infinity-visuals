import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const GridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dist = Math.sqrt(
            (x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2
          );
          const wave = Math.sin(dist * 0.005 - time * 2) * 0.5 + 0.5;
          const alpha = wave * 0.15;

          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(221, 83%, 53%, ${alpha})`;
          ctx.fill();
        }
      }

      // Draw some connecting lines
      for (let i = 0; i < 8; i++) {
        const x = canvas.width * (0.1 + Math.sin(time + i * 0.8) * 0.05 + (i * 0.1));
        const y = canvas.height * (0.2 + Math.cos(time * 0.7 + i) * 0.1);
        const x2 = x + Math.cos(time + i) * 200;
        const y2 = y + Math.sin(time * 0.5 + i) * 200;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `hsla(199, 89%, 48%, ${0.05 + Math.sin(time + i) * 0.03})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

const Hero = () => {
  const words = "Engineering Precision. Infinite Possibilities.".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-40" width={1920} height={1080} />
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block glass-card px-4 py-1.5 text-xs font-medium text-primary tracking-widest uppercase">
            Infinity Engineering Consulting
          </span>
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className={`inline-block mr-3 ${
                word === "Precision." || word === "Infinite" || word === "Possibilities."
                  ? "gradient-text"
                  : "text-foreground"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          We design intelligent engineering solutions for modern infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="btn-glow text-base font-semibold px-8 py-4 rounded-xl text-primary-foreground"
          >
            Request Consultation
          </a>
          <a
            href="#services"
            className="glass-card px-8 py-4 rounded-xl text-foreground text-base font-medium hover:bg-muted/30 transition-colors"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
