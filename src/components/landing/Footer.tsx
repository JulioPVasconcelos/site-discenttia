import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} – Discenttia – São José dos Campos – SP
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidade
            </a>
            <a
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos
            </a>
            <a
              href="#contato"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;