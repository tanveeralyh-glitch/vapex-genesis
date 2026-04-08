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
    <section id="why-us" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-heading tracking-[0.3em] uppercase text-primary mb-4 text-glow">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text">
            Built Different
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-8 text-center group cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-xl gradient-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:neon-glow">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
