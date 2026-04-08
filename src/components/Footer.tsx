const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="font-heading text-xl font-bold tracking-widest gradient-text">
          VAPEX
        </a>

        <div className="flex items-center gap-6">
          {["Twitter", "Instagram", "Discord"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © 2026 VAPEX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
