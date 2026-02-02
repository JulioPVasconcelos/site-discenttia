import { motion } from "framer-motion";
import { ShieldCheck, AlertCircle, Lock } from "lucide-react";

const complianceItems = [
  {
    icon: ShieldCheck,
    title: "Uso administrativo",
    description: "Sistema destinado exclusivamente para agendamento e informações administrativas.",
  },
  {
    icon: AlertCircle,
    title: "Sem orientação clínica",
    description: "Não realiza diagnósticos, prescrições ou orientações clínicas de qualquer natureza.",
  },
  {
    icon: Lock,
    title: "Privacidade garantida",
    description: "Seus dados estão protegidos. Solicitação de exclusão disponível via contato.",
  },
];

const Compliance = () => {
  return (
    <section id="compliance" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Conformidade e Segurança
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Operamos com transparência e dentro das diretrizes oficiais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {complianceItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center card-hover"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;