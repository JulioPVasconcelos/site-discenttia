import { motion } from "framer-motion";
import { TrendingDown, Clock, Award, Heart } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Menos no-show",
    description: "Lembretes automáticos reduzem drasticamente as faltas de pacientes às consultas.",
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Seus pacientes podem agendar a qualquer hora, sem depender do horário comercial.",
  },
  {
    icon: Award,
    title: "Padronização e profissionalismo",
    description: "Mensagens consistentes e profissionais em cada interação com seus pacientes.",
  },
  {
    icon: Heart,
    title: "Mais tempo para o atendimento",
    description: "Menos tempo ao telefone, mais tempo para se dedicar aos seus pacientes.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Benefícios para seu consultório
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automatize o operacional e foque no que realmente importa: seus pacientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 card-hover group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;