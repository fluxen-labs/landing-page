import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso | Fluxen Labs',
  description: 'Termos de uso dos serviços da Fluxen Labs',
}

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl font-bold text-neutral-800 mb-8">
          Termos de Uso
        </h1>
        
        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-500 mb-8">
            Última atualização: Janeiro de 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              1. Sobre os Serviços
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              A Fluxen Labs oferece serviços de engenharia de automação e integração para operações críticas, 
              através de projetos fechados com escopo técnico, prazo e investimento definidos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              2. Proposta Comercial
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-4">
              Ao solicitar uma proposta através do formulário:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 space-y-2">
              <li>Você autoriza o contato da equipe técnica da Fluxen Labs</li>
              <li>Não há compromisso de contratação até a assinatura de contrato formal</li>
              <li>A proposta técnica é elaborada sem custos</li>
              <li>O prazo de resposta é de até 24 horas úteis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              3. Escopo de Projetos
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-4">
              Todos os projetos seguem metodologia estruturada:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 space-y-2">
              <li>Levantamento técnico inicial (1 semana)</li>
              <li>Projeto executivo com escopo fechado (1 semana)</li>
              <li>Implementação (2-4 semanas)</li>
              <li>Entrega e treinamento (1-2 semanas)</li>
            </ul>
            <p className="text-neutral-500 leading-relaxed mt-4">
              Mudanças de escopo após a fase 2 geram proposta comercial separada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              4. Propriedade Intelectual
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              O código desenvolvido, arquitetura de integração e documentação técnica são de propriedade 
              do cliente após conclusão do projeto e quitação integral dos valores acordados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              5. Confidencialidade
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              Todas as informações técnicas, operacionais e comerciais compartilhadas são tratadas 
              como confidenciais. Acordos de confidencialidade (NDA) podem ser firmados antes do 
              levantamento técnico, se solicitado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              6. Limitações de Responsabilidade
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              A Fluxen Labs não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 space-y-2 mt-4">
              <li>Falhas em sistemas de terceiros fora do escopo do projeto</li>
              <li>Indisponibilidade de infraestrutura de terceiros</li>
              <li>Alterações em sistemas legados após a entrega do projeto</li>
              <li>Uso inadequado das soluções implementadas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              7. Contato
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              Para dúvidas sobre estes termos:
            </p>
            <p className="text-neutral-500 mt-4">
              E-mail: <a href="mailto:contato@fluxenlabs.com.br" className="text-primary-purple hover:text-brand-purple">contato@fluxenlabs.com.br</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-100">
          <a 
            href="/" 
            className="text-primary-purple hover:text-brand-purple font-medium transition-colors"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </main>
  )
}
