import { motion } from "framer-motion";

const flavors = [
  {
    name: "Ice Mint",
    gradient: "from-cyan-500/20 via-emerald-500/10 to-transparent",
    color: "hsl(170 80% 50%)",
    description: "Arctic cool with a refreshing bite",
  },
  {
    name: "Berry Blast",
    gradient: "from-pink-500/20 via-purple-500/10 to-transparent",
    color: "hsl(330 80% 60%)",
    description: "Wild berries in a symphony of flavor",
  },
  {
    name: "Mango Chill",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    color: "hsl(35 90% 55%)",
    description: "Tropical mango with icy smoothness",
  },
];

const FlavorsSection = () => {
  return (
    <section id="flavors" className="py-28 md:py-36 relative overflow-hidden section-divider">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-heading tracking-[0.4em] uppercase text-primary mb-5 text-glow">
            Flavor Lab
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text">
            Signature Flavors
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {flavors.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl overflow-hidden glass-card group cursor-pointer transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${flavor.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Smoke effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, j) => (
                  <div
                    key={j}
                    className="absolute rounded-full animate-smoke-drift opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                    style={{
                      width: `${60 + j * 30}px`,
                      height: `${60 + j * 30}px`,
                      background: `radial-gradient(circle, ${flavor.color}40, transparent)`,
                      left: `${20 + j * 25}%`,
                      bottom: `${10 + j * 15}%`,
                      animationDelay: `${j * 0.8}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 p-10 text-center">
                <div
                  className="w-20 h-20 mx-auto mb-8 rounded-full animate-float"
                  style={{
                    background: `radial-gradient(circle, ${flavor.color}, transparent)`,
                    boxShadow: `0 0 40px ${flavor.color}60`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3 tracking-wide">
                  {flavor.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{flavor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
