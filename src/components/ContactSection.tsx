import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "923126990233";
const WHATSAPP_DISPLAY = "0312-6990233";

const ContactSection = () => {
  const handleWhatsAppMessage = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container mx-auto px-6 max-w-2xl">
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

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-9 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center neon-glow">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-lg font-heading font-semibold text-foreground tracking-wide">Tanveer Ali</p>
              <p className="text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span>WhatsApp Available</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Responds within minutes</span>
            </div>
          </div>

          <Button
            variant="neon"
            size="lg"
            className="w-full py-7 text-sm gap-3"
            onClick={() => handleWhatsAppMessage("Hi Tanveer Ali, I'm interested in VAPEX products. Can you help me?")}
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </Button>
        </motion.div>

        {/* Quick Message Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-9 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
            const whatsappMsg = `Hi Tanveer Ali, my name is ${name}. ${message}`;
            handleWhatsAppMessage(whatsappMsg);
          }}
        >
          <p className="text-sm font-heading tracking-[0.2em] uppercase text-muted-foreground text-center mb-2">
            Or send a quick message
          </p>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-muted/20 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground text-sm font-body neon-border outline-none transition-all duration-300 focus:bg-muted/30"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full bg-muted/20 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground text-sm font-body neon-border outline-none resize-none transition-all duration-300 focus:bg-muted/30"
            />
          </div>
          <Button variant="neon" size="lg" className="w-full py-7 text-sm gap-3" type="submit">
            <MessageCircle className="w-5 h-5" />
            Send via WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
