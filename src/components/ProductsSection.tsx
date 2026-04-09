import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import device1 from "@/assets/vape-device-1.png";
import device2 from "@/assets/vape-device-2.png";
import device3 from "@/assets/vape-device-3.png";

const products = [
  {
    name: "VAPEX Phantom",
    image: device1,
    specs: "5000 Puffs • Type-C • 1500mAh",
    description: "Stealth meets power. The Phantom delivers unmatched vapor density in a sleek, ergonomic shell.",
    details: [
      "5000+ puff capacity",
      "USB Type-C fast charging",
      "1500mAh rechargeable battery",
      "Mesh coil technology for smooth draws",
      "Ergonomic matte-finish body",
      "Multiple flavor options available",
    ],
  },
  {
    name: "VAPEX Prism",
    image: device2,
    specs: "8000 Puffs • Adjustable Airflow • 2200mAh",
    description: "Chromatic brilliance. The Prism features adaptive wattage for a personalized experience.",
    details: [
      "8000+ puff capacity",
      "Adjustable airflow control",
      "2200mAh long-lasting battery",
      "Adaptive wattage system",
      "LED battery indicator",
      "Premium build with chrome accents",
    ],
  },
  {
    name: "VAPEX Nova",
    image: device3,
    specs: "3000 Puffs • Ultra Compact • 1000mAh",
    description: "Pocket luxury. The Nova packs premium performance into the most refined form factor.",
    details: [
      "3000+ puff capacity",
      "Ultra-compact pocket design",
      "1000mAh efficient battery",
      "Draw-activated firing",
      "Lightweight aluminum body",
      "Perfect for on-the-go use",
    ],
  },
];

const WHATSAPP_NUMBER = "923126990233";

const ProductsSection = () => {
  const handleOrderWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hi Tanveer Ali, I'm interested in ordering the ${productName}. Can you share more details?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

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

              <div className="flex gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="neon-outline" size="sm" className="transition-all duration-300 group-hover:neon-glow flex-1">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-strong border-border bg-background/95 backdrop-blur-xl max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl gradient-text tracking-wide">
                        {product.name}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-2">
                      <div className="relative overflow-hidden rounded-xl bg-muted/20 p-6 flex items-center justify-center h-52 mb-6">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,240,255,0.15)]"
                        />
                      </div>
                      <p className="text-xs font-heading tracking-[0.2em] text-primary mb-4">{product.specs}</p>
                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{product.description}</p>
                      <div className="space-y-2.5 mb-6">
                        {product.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full gradient-primary flex-shrink-0" />
                            <p className="text-sm text-foreground/80">{detail}</p>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="neon"
                        size="lg"
                        className="w-full py-6 text-sm"
                        onClick={() => handleOrderWhatsApp(product.name)}
                      >
                        Order on WhatsApp
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="neon"
                  size="sm"
                  className="flex-1"
                  onClick={() => handleOrderWhatsApp(product.name)}
                >
                  Order Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
