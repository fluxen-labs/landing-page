export default function Problem() {
  const problems = [
    {
      title: 'Projetos sem escopo definido',
      description: 'Integrações que se arrastam por meses sem linha de chegada clara'
    },
    {
      title: 'Sistemas isolados',
      description: 'SCADA, PLC, MES e ERP não conversam entre si, gerando retrabalho manual'
    },
    {
      title: 'Dependência de fornecedores',
      description: 'Vendor lock-in com suporte técnico limitado e custos recorrentes altos'
    },
    {
      title: 'Dados operacionais inacessíveis',
      description: 'Informação crítica presa em sistemas legados, sem visibilidade para tomada de decisão'
    }
  ]

  return (
    <section id="problema" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            O problema não é a tecnologia
          </h2>
          <p className="text-lg text-neutral-500">
            É a falta de metodologia estruturada para implementar soluções técnicas 
            sem virar um projeto sem fim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="border-l-4 border-primary-purple pl-6 py-2">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {problem.title}
              </h3>
              <p className="text-neutral-500">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
