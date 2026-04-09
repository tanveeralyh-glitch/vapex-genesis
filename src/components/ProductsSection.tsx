import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import device1 from "@/assets/vape-device-1.png";
import device2 from "@/assets/vape-device-2.png";
import device3 from "@/assets/vape-device-3.png";

const products = [
  {
    name: "VAPEX Phantom",
    image: device1,
    specs: "5000 Puffs • Type-C • 1500mAh",
    description: "Stealth meets power. The Phantom delivers unmatched vapor density in a sleek, ergonomic shell.",
  },
  {
    name: "VAPEX Prism",
    image: device2,
    specs: "8000 Puffs • Adjustable Airflow • 2200mAh",
    description: "Chromatic brilliance. The Prism features adaptive wattage for a personalized experience.",
  },
  {
    name: "VAPEX Nova",
    image: device3,
    specs: "3000 Puffs • Ultra Compact • 1000mAh",
    description: "Pocket luxury. The Nova packs premium performance into the most refined form factor.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-28 md:py-36 relative section-divider">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-heading tracking-[0.4em] uppercase text-primary mb-5 text-glow">
            Our Collection
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text">
            Featured Products
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-7 group cursor-pointer transition-all duration-500 hover:neon-glow-soft"
            >
              <div className="relative overflow-hidden rounded-xl bg-muted/20 mb-7 p-8 flex items-center justify-center h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,240,255,0.15)]"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2 tracking-wide">
                {product.name}
              </h3>
              <p className="text-xs font-heading tracking-[0.2em] text-primary mb-3">{product.specs}</p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
              <Button variant="neon-outline" size="sm" className="transition-all duration-300 group-hover:neon-glow">
                View Details
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
