import { motion } from "framer-motion";
import { Shield, Zap, Wind, Award } from "lucide-react";

const features = [
  { icon: Award, title: "Premium Quality", description: "Medical-grade materials & certified craftsmanship" },
  { icon: Zap, title: "Long Battery", description: "All-day power with rapid USB-C charging" },
  { icon: Wind, title: "Smooth Vapor", description: "Advanced mesh coil technology for silk-smooth draws" },
  { icon: Shield, title: "Lab Tested", description: "Every batch independently verified for purity" },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-28 md:py-36 section-divider">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-heading tracking-[0.4em] uppercase text-primary mb-5 text-glow">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text">
            Built Different
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-9 text-center group cursor-pointer transition-all duration-500 hover:neon-glow-soft"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl gradient-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:neon-glow group-hover:rounded-2xl">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
