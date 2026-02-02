import { motion } from "framer-motion";
import { Mail, ChevronDown, Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full section-container py-6 flex items-center justify-between">
        <motion.a
          href={import.meta.env.BASE_URL}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="text-2xl font-display font-bold text-foreground">
            Discenttia
          </span>
        </motion.a>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#para-quem" className="text-muted-foreground hover:text-foreground transition-colors">
            Para quem
          </a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
            Como funciona
          </a>
          <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="#contato" className="btn-primary text-sm py-2">
            <Mail className="w-4 h-4" />
            Contato
          </a>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center section-container">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              WhatsApp Cloud API oficial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6"
          >
            Automação de atendimento e{" "}
            <span className="gradient-text">gestão de agenda</span> via WhatsApp
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Agendamentos, confirmações e lembretes automáticos — com WhatsApp oficial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="mailto:contato@discenttia.com.br" 
              className="btn-primary glow-effect"
            >
              <Mail className="w-5 h-5" />
              Falar com a Discenttia
            </a>
            <a href="#como-funciona" className="btn-secondary">
              Como funciona
              <ChevronDown className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;


