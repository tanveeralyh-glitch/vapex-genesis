import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex R.",
    text: "VAPEX Phantom is hands down the smoothest device I've ever used. The vapor quality is insane.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "The Ice Mint flavor is addictively refreshing. Plus, the battery lasts all day without charging.",
    rating: 5,
  },
  {
    name: "Jordan K.",
    text: "Switched from my old vape to VAPEX Prism and the difference is night and day. Premium feel, premium performance.",
    rating: 5,
  },
  {
    name: "Chris D.",
    text: "The design alone makes it worth it — but the flavor and vapor density? Next level. 10/10.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-28 md:py-36 section-divider">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-heading tracking-[0.4em] uppercase text-primary mb-5 text-glow">
            Community
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text">
            What They Say
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass-card rounded-2xl p-12 text-center absolute inset-0 flex flex-col justify-center"
            >
              <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
              <div className="flex justify-center gap-1.5 mb-5">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground italic mb-6 leading-relaxed font-light">
                "{testimonials[current].text}"
              </p>
              <p className="text-sm font-heading tracking-[0.2em] text-primary">
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === current ? "gradient-primary w-10 neon-glow" : "bg-muted w-2.5 hover:bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
