import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-heading tracking-[0.3em] uppercase text-primary mb-4 text-glow">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text">
            Contact Us
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-muted/30 rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm font-body neon-border outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-muted/30 rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm font-body neon-border outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-muted/30 rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm font-body neon-border outline-none resize-none"
            />
          </div>
          <Button variant="neon" size="lg" className="w-full py-6">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
