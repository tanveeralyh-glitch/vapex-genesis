import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container mx-auto px-6 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-heading tracking-[0.4em] uppercase text-primary mb-5 text-glow">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text">
            Contact Us
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-9 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-muted/20 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground text-sm font-body neon-border outline-none transition-all duration-300 focus:bg-muted/30"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-muted/20 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground text-sm font-body neon-border outline-none transition-all duration-300 focus:bg-muted/30"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-muted/20 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground text-sm font-body neon-border outline-none resize-none transition-all duration-300 focus:bg-muted/30"
            />
          </div>
          <Button variant="neon" size="lg" className="w-full py-7 text-sm">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
