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
                Controlador (LGPD)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discenttia — CNPJ 26.837.223/0001-00.
                Em caso de dúvidas sobre privacidade ou para exercer direitos previstos na LGPD,
                entre em contato pelo e-mail <a href="mailto:contato@discenttia.com.br" className="text-primary hover:underline">contato@discenttia.com.br</a>.
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
                Bases legais (LGPD)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O tratamento de dados pode ocorrer, conforme o caso, para execução de contrato e/ou
                procedimentos preliminares, cumprimento de obrigação legal/regulatória, legítimo interesse
                e/ou mediante consentimento quando aplicável.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                WhatsApp: opt-in, janelas e opt-out
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O paciente inicia o contato via WhatsApp para solicitar informações e/ou agendar.
                Mensagens ativas (por exemplo: confirmações e lembretes) podem ser enviadas apenas
                relacionadas a um agendamento existente e dentro da janela entre a marcação e a data
                da consulta.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não enviamos marketing, promoções ou mensagens não solicitadas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cancelamento (opt-out): a qualquer momento, o paciente pode solicitar o cancelamento
                enviando "SAIR" no WhatsApp ou solicitando via e-mail.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Dados sensíveis (saúde)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não coletamos dados de exames ou dados de saúde pelo WhatsApp. As mensagens de
                pré-consulta são apenas lembretes e orientações administrativas, por exemplo:
                "Não esqueça de levar seus exames" ou, para consultas online, "Tenha seu peso e altura
                já em mãos para agilizar a consulta".
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Discenttia não realiza diagnóstico, prescrição ou orientação clínica.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Retenção
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mantemos dados pelo tempo necessário para prestar o serviço, operar agendamentos e
                cumprir obrigações legais. Quando aplicável, dados são excluídos mediante solicitação.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Direitos do titular (LGPD)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
                portabilidade, eliminação, informação sobre compartilhamento e revogação de consentimento,
                quando aplicável.
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