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
                Dados Coletados
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos apenas dados essenciais para a prestação do serviço: nome e número 
                de telefone. Essas informações são utilizadas exclusivamente para fins 
                administrativos e gestão de agenda.
              </p>

              <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                Compartilhamento
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros 
                para fins comerciais. Seus dados são tratados com total confidencialidade.
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