import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroSmoke from "@/assets/hero-smoke.jpg";
import vapeHighlight from "@/assets/vape-highlight.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background with cinematic zoom */}
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY, scale: bgScale }}
        >
          <motion.img
            src={heroSmoke}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-background/55"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        />

        {/* Animated smoke/mist overlay layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-smoke-drift"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                background: `radial-gradient(circle, hsl(${i % 2 === 0 ? 187 : 270} 100% 50% / ${0.08 + (i % 3) * 0.04}), transparent)`,
                left: `${5 + i * 12}%`,
                top: `${20 + (i % 4) * 15}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${7 + i * 1.5}s`,
                filter: `blur(${8 + i * 3}px)`,
              }}
            />
          ))}
        </div>

        {/* Soft vignette edges */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 4% / 0.7) 100%)",
        }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm font-heading tracking-[0.3em] uppercase text-primary mb-6 text-glow"
          >
            Premium Vaping Experience
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6 animate-float"
          >
            <span className="gradient-text">Feel the Future</span>
            <br />
            <span className="text-foreground">of Vaping</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto"
          >
            Smooth. Powerful. Premium Experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Button variant="neon" size="lg" className="text-base px-10 py-6" asChild>
              <a href="#products">Explore Now</a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Video Highlight Section */}
      <section ref={highlightRef} className="relative py-8 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden group"
          >
            {/* Cinematic image with slow zoom on hover */}
            <div className="relative overflow-hidden aspect-[21/9]">
              <motion.img
                src={vapeHighlight}
                alt="VAPEX premium vaping device with vapor clouds"
                loading="lazy"
                width={1920}
                height={1080}
                className="w-full h-full object-cover transition-transform duration-[8s] ease-out group-hover:scale-105"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40" />
            </div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center px-6"
              >
                <p className="text-xs md:text-sm font-heading tracking-[0.4em] uppercase text-primary mb-4 text-glow">
                  Discover
                </p>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                  Next-Level{" "}
                  <span className="gradient-text">Vapor</span>
                  <br />
                  Experience
                </h3>
              </motion.div>
            </div>

            {/* Neon border glow */}
            <div className="absolute inset-0 rounded-3xl border border-primary/10 group-hover:border-primary/25 transition-colors duration-700" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
