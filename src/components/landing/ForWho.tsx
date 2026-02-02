import { motion } from "framer-motion";
import { Stethoscope, Apple, Smile, Brain, Users } from "lucide-react";

const professionals = [
  { icon: Apple, label: "Nutricionistas", description: "Consultas e retornos" },
  { icon: Smile, label: "Dentistas", description: "Procedimentos e check-ups" },
  { icon: Stethoscope, label: "Médicos", description: "Consultas e exames" },
  { icon: Brain, label: "Terapeutas", description: "Sessões e acompanhamentos" },
  { icon: Users, label: "Outros profissionais", description: "Qualquer área com agenda" },
];

const ForWho = () => {
  return (
    <section id="para-quem" className="py-24 bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Para quem é a Discenttia?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para qualquer profissional que precisa de gestão de agenda eficiente e automatizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {professionals.map((prof, index) => (
            <motion.div
              key={prof.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center card-hover group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <prof.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">
                {prof.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {prof.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;