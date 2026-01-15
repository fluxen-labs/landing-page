export default function Services() {
  const services = [
    {
      category: 'Integração de Sistemas',
      description: 'Conectamos sistemas industriais que não conversam entre si',
      items: [
        'SCADA ↔ MES ↔ ERP',
        'Protocolos industriais (OPC-UA, Modbus, MQTT)',
        'APIs REST para sistemas legados',
        'Middleware de integração'
      ]
    },
    {
      category: 'Automação de Processos',
      description: 'Eliminamos trabalho manual em operações críticas',
      items: [
        'Workflows operacionais automatizados',
        'Coleta automática de dados de chão de fábrica',
        'Geração automática de relatórios técnicos',
        'Sincronização de dados entre sistemas'
      ]
    },
    {
      category: 'Infraestrutura e Deploy',
      description: 'Preparamos a base técnica para operação confiável',
      items: [
        'Configuração de ambientes (on-premise ou cloud)',
        'Monitoramento e observabilidade',
        'Backup e recuperação de dados',
        'Documentação de arquitetura'
      ]
    }
  ]

  return (
    <section id="servicos" className="bg-neutral-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Camadas de serviço
          </h2>
          <p className="text-lg text-neutral-500">
            Cada projeto pode incluir uma ou mais camadas, dependendo do diagnóstico técnico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-neutral-100 rounded-lg p-6 hover:border-primary-purple transition-colors"
            >
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {service.category}
              </h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3" role="list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm">
                    <svg 
                      className="h-5 w-5 text-primary-purple mr-2 flex-shrink-0 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                    <span className="text-neutral-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-neutral-100 rounded-lg p-6">
          <p className="text-neutral-500 leading-relaxed">
            <strong className="text-neutral-800">Nota técnica:</strong> Projetos típicos combinam 
            integração de 2-3 sistemas principais com automação de 3-5 processos críticos. 
            O escopo exato é definido após o diagnóstico técnico inicial.
          </p>
        </div>
      </div>
    </section>
  )
}
