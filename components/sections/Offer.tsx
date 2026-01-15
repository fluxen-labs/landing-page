export default function Offer() {
  const deliverables = [
    'Arquitetura de integração documentada',
    'Conectores entre sistemas existentes (SCADA ↔ MES ↔ ERP)',
    'Automação de workflows operacionais críticos',
    'APIs padronizadas para acesso aos dados',
    'Documentação técnica completa',
    'Treinamento operacional da equipe'
  ]

  return (
    <section id="oferta" className="bg-neutral-900 text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Projeto de Automação e Integração Operacional
            </h2>
            <p className="text-xl text-neutral-100 mb-6 leading-relaxed">
              Projeto fechado. Escopo técnico definido. Prazo acordado. 
              Entregamos integração entre seus sistemas e automação de processos críticos.
            </p>
            <p className="text-neutral-500 mb-8">
              Não trabalhamos com mensalidade. Não vendemos horas. 
              Vendemos resultado técnico com previsibilidade.
            </p>
            <div className="bg-primary-slate border border-neutral-500 rounded-lg p-6">
              <p className="text-sm uppercase tracking-wide text-neutral-500 mb-2">
                Investimento médio
              </p>
              <p className="text-3xl font-bold text-white">
                R$ 30.000
              </p>
              <p className="text-neutral-500 mt-2">
                Projeto fechado • 6-8 semanas
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              O que você recebe
            </h3>
            <ul className="space-y-4" role="list">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg 
                    className="h-6 w-6 text-accent-green mr-3 flex-shrink-0 mt-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-lg text-neutral-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
