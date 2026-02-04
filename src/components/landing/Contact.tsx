import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "contato@discenttia.com.br";
  const whatsappE164 = "+5512988764650";
  const whatsappWaMe = "https://wa.me/5512988764650";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você a automatizar seu atendimento.
            Ao entrar em contato, você concorda em receber mensagens administrativas via WhatsApp
            (agendamentos, confirmações e lembretes). Para cancelar, envie "SAIR" no WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card p-8 glow-effect">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                  <p className="text-foreground font-medium">{email}</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Copiar e-mail"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <a
                    href={whatsappWaMe}
                    className="text-foreground font-medium hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {whatsappE164}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Localização</p>
                  <p className="text-foreground font-medium">São José dos Campos – SP</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href={whatsappWaMe}
                  className="btn-primary w-full justify-center glow-effect"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>

                <a
                  href={`mailto:${email}`}
                  className="btn-secondary w-full justify-center"
                >
                  <Mail className="w-5 h-5" />
                  Enviar e-mail
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;