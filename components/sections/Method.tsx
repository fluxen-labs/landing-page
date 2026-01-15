export default function Method() {
  const phases = [
    {
      number: '01',
      title: 'Diagnóstico Técnico',
      duration: '1 semana',
      description: 'Mapeamento de sistemas, protocolos, interfaces e requisitos operacionais. Identificação de pontos críticos de integração.',
      deliverable: 'Documento de arquitetura atual e proposta técnica'
    },
    {
      number: '02',
      title: 'Projeto Executivo',
      duration: '1 semana',
      description: 'Definição de arquitetura de integração, especificação de conectores, APIs e automações. Escopo técnico fechado.',
      deliverable: 'Escopo fechado com cronograma detalhado'
    },
    {
      number: '03',
      title: 'Implementação',
      duration: '3-4 semanas',
      description: 'Desenvolvimento de conectores, configuração de integrações, automação de workflows. Testes unitários e de integração.',
      deliverable: 'Sistema integrado em ambiente de homologação'
    },
    {
      number: '04',
      title: 'Entrega e Treinamento',
      duration: '1-2 semanas',
      description: 'Deploy em produção, validação operacional, treinamento da equipe técnica e documentação completa.',
      deliverable: 'Sistema em produção + documentação técnica'
    }
  ]

  return (
    <section id="metodo" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Como trabalhamos
          </h2>
          <p className="text-lg text-neutral-500">
            Metodologia estruturada em 4 fases. Escopo fechado na etapa 2. 
            Sem indefinições. Sem surpresas.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="border border-neutral-100 rounded-lg p-6 sm:p-8 hover:border-primary-purple transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-purple text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                    {phase.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-neutral-800">
                      {phase.title}
                    </h3>
                    <span className="text-sm font-medium text-primary-purple mt-2 sm:mt-0">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-neutral-500 mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="bg-neutral-100 border-l-4 border-accent-green px-4 py-3 rounded">
                    <p className="text-sm font-medium text-neutral-800">
                      Entrega: <span className="font-normal text-neutral-500">{phase.deliverable}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neutral-900 text-white rounded-lg p-6 sm:p-8">
          <h3 className="text-xl font-semibold mb-4">
            Escopo anti-infinito
          </h3>
          <ul className="space-y-2 text-neutral-100" role="list">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Fase 2 define o escopo fechado do projeto</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Mudanças de escopo geram proposta comercial separada</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Cronograma acordado no início, cumprido até o fim</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
