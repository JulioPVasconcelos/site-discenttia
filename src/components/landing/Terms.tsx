import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <section id="termos" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground">
              Termos de Uso
            </h2>
          </div>

          <div className="glass-card p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao utilizar os serviços da Discenttia, você concorda com os seguintes termos e condições:
              </p>
              
              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Finalidade do serviço
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O serviço tem finalidade administrativa e organizacional: automação de agendamentos,
                confirmações e lembretes via WhatsApp. Não constitui, em hipótese alguma, ferramenta
                para prestação de serviços de saúde.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Consentimento e cancelamento
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O paciente inicia contato via WhatsApp e pode consentir em receber mensagens administrativas
                (como lembretes e pré-consulta). O cancelamento pode ser solicitado a qualquer momento
                respondendo "SAIR" no WhatsApp ou por contato via e-mail.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Limitações
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O sistema não substitui o atendimento humano qualificado. A Discenttia não realiza
                diagnósticos, prescrições, orientações clínicas ou qualquer tipo de consultoria médica
                ou de saúde através da plataforma.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Uso aceitável
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O serviço deve ser utilizado para comunicações administrativas relacionadas a agendamento.
                É proibido utilizar a plataforma para spam, conteúdo enganoso ou qualquer prática que viole
                políticas da Meta/WhatsApp.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Responsabilidade
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O profissional que utiliza o serviço é responsável por verificar e confirmar 
                todas as informações de agendamento. A Discenttia não se responsabiliza por 
                decisões tomadas com base em informações automatizadas sem a devida verificação.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terms;