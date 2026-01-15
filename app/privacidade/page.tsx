import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Fluxen Labs',
  description: 'Política de privacidade e tratamento de dados da Fluxen Labs',
}

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl font-bold text-neutral-800 mb-8">
          Política de Privacidade
        </h1>
        
        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-500 mb-8">
            Última atualização: Janeiro de 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              1. Coleta de Dados
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-4">
              A Fluxen Labs coleta apenas os dados necessários para análise técnica e envio de proposta comercial:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 space-y-2">
              <li>Nome completo</li>
              <li>E-mail corporativo</li>
              <li>Empresa</li>
              <li>Telefone</li>
              <li>Descrição do desafio técnico</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              2. Uso dos Dados
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-4">
              Os dados coletados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 space-y-2">
              <li>Análise técnica do contexto operacional</li>
              <li>Elaboração de proposta comercial</li>
              <li>Comunicação sobre o projeto</li>
              <li>Envio de documentação técnica relacionada</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              3. Compartilhamento de Dados
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              A Fluxen Labs não compartilha, vende ou transfere seus dados pessoais para terceiros, 
              exceto quando necessário para prestação de serviços contratados ou quando exigido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              4. Segurança
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados 
              contra acesso não autorizado, perda, destruição ou alteração.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              5. Seus Direitos
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-4">
              Conforme a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              6. Contato
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
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
