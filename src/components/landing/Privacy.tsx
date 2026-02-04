import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <section id="privacidade" className="py-24 bg-card/30">
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
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground">
              Política de Privacidade
            </h2>
          </div>

          <div className="glass-card p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Discenttia se compromete com a proteção dos dados pessoais de seus usuários 
                e clientes. Esta política descreve como coletamos, usamos e protegemos suas informações.
              </p>
              
              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Dados coletados e finalidade
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos apenas dados necessários para a prestação do serviço, como nome e número
                de telefone, além de informações de agendamento (data/horário) e preferências relacionadas
                ao atendimento.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                WhatsApp: consentimento (opt-in) e cancelamento (opt-out)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O paciente inicia o contato via WhatsApp para solicitar informações e/ou agendar.
                Após esse contato, mensagens administrativas podem ser enviadas (por exemplo: confirmação,
                lembretes e pré-consulta) mediante consentimento.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cancelamento: a qualquer momento, o paciente pode solicitar o cancelamento de mensagens
                enviando "SAIR" no WhatsApp ou solicitando via e-mail.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Dados sensíveis (saúde)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em alguns casos, o profissional pode solicitar dados pré-consulta (ex.: peso/altura ou
                exames) para fins de organização do atendimento. O envio é opcional e deve ocorrer com
                consentimento. A Discenttia não realiza diagnóstico, prescrição ou orientação clínica.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Retenção
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mantemos dados pelo tempo necessário para prestar o serviço e cumprir obrigações legais.
                Quando aplicável, dados são excluídos mediante solicitação.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Compartilhamento e operadores
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos ou alugamos dados pessoais. Para operar o serviço, podemos utilizar
                fornecedores (por exemplo, Meta/WhatsApp Cloud API e infraestrutura de hospedagem).
                Esses operadores tratam dados apenas para viabilizar o funcionamento da plataforma.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Exclusão de Dados
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Você pode solicitar a exclusão de seus dados a qualquer momento através do 
                e-mail <a href="mailto:contato@discenttia.com.br" className="text-primary hover:underline">
                contato@discenttia.com.br</a>. Atenderemos sua solicitação no prazo máximo 
                de 15 dias úteis.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;