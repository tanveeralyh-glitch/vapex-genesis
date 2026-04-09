import { motion } from "framer-motion";
import heroSmoke from "@/assets/hero-smoke.jpg";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 md:py-36 relative overflow-hidden">
      <div className="relative rounded-3xl overflow-hidden mx-4 md:mx-8 lg:mx-16 premium-shadow">
        {/* Background with slow zoom */}
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.08 }}
          viewport={{ once: true }}
          transition={{ duration: 12, ease: "linear" }}
          className="absolute inset-0"
        >
          <img
            src={heroSmoke}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </motion.div>
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />

        {/* Content overlay */}
        <div className="relative z-10 py-36 md:py-52 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs font-heading tracking-[0.4em] uppercase text-primary mb-8 text-glow"
          >
            The VAPEX Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground max-w-4xl mx-auto leading-[1.1]"
          >
            Engineered for{" "}
            <span className="gradient-text">Smoothness</span>
            <br />& <span className="gradient-text">Power</span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
