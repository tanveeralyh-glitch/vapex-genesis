import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

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
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-heading tracking-[0.3em] uppercase text-primary mb-4 text-glow">
            Community
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text">
            What They Say
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-2xl p-10 text-center absolute inset-0 flex flex-col justify-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground italic mb-6 leading-relaxed">
                "{testimonials[current].text}"
              </p>
              <p className="text-sm font-heading tracking-wider text-primary">
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "gradient-primary w-8 neon-glow" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
