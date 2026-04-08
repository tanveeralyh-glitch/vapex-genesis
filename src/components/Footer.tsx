import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Flavors", href: "#flavors" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[hsl(270_60%_8%)]" />

      {/* Subtle top glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(187 100% 50% / 0.4), hsl(270 100% 50% / 0.4), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[60px]"
        style={{
          background: "radial-gradient(ellipse at top, hsl(187 100% 50% / 0.06), transparent)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        {/* Main 3-column grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-block font-heading text-2xl font-bold tracking-widest gradient-text mb-4">
              VAPEX
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto md:mx-0">
              Premium Vaping Redefined
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="text-center">
            <p className="text-xs font-heading tracking-[0.3em] uppercase text-muted-foreground mb-5">
              Navigate
            </p>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] gradient-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Social */}
          <div className="text-center md:text-right">
            <p className="text-xs font-heading tracking-[0.3em] uppercase text-muted-foreground mb-5">
              Connect
            </p>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-primary hover:neon-glow hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Glowing divider */}
        <div className="relative mb-6">
          <div className="h-px bg-border" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/3"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(187 100% 50% / 0.5), hsl(270 100% 50% / 0.5), transparent)",
            }}
          />
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 VAPEX. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed for the future.
          </p>
        </div>
      </div>

      {/* Soft ambient background glow */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(270 100% 50% / 0.04), transparent)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(187 100% 50% / 0.04), transparent)",
          filter: "blur(60px)",
        }}
      />
    </motion.footer>
  );
};

export default Footer;
