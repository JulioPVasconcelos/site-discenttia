import { motion } from "framer-motion";
import { MessageCircle, Calendar, CheckCircle, Clock, HelpCircle, UserCheck, ArrowRight } from "lucide-react";

const features = [
  { icon: Calendar, text: "Agendar, confirmar e cancelar consultas" },
  { icon: Clock, text: "Lembretes automáticos para pacientes" },
  { icon: HelpCircle, text: "Respostas a perguntas frequentes (valores, endereço, horários)" },
  { icon: UserCheck, text: "Encaminhamento para atendimento humano quando necessário" },
];

const steps = [
  { 
    icon: MessageCircle, 
    title: "Mensagem", 
    description: "Paciente envia mensagem solicitando agendamento",
    message: "Olá, gostaria de agendar uma consulta"
  },
  { 
    icon: Calendar, 
    title: "Sugestão de horário", 
    description: "Sistema verifica disponibilidade e sugere horários",
    message: "Temos disponível: Seg 14h, Ter 10h ou Qua 16h"
  },
  { 
    icon: CheckCircle, 
    title: "Confirmação", 
    description: "Paciente escolhe e recebe confirmação instantânea",
    message: "✓ Consulta confirmada para Segunda, 14h"
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            O que o sistema faz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automatização completa do atendimento, do primeiro contato à confirmação.
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-4 mb-20"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-5 flex items-center gap-4 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground">{feature.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-12">
            Fluxo de agendamento
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Passo {index + 1}
                      </span>
                      <h4 className="font-display font-semibold text-foreground">
                        {step.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                    <p className="text-sm text-foreground italic">
                      "{step.message}"
                    </p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;