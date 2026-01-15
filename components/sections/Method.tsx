'use client'

import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'
import FadeIn from '@/components/ui/FadeIn'

export default function Method() {
  const phases = [
    {
      number: '01',
      title: 'Levantamento Direcionado',
      duration: '1 semana',
      objective: 'Validar interfaces, riscos e premissas técnicas',
      outputs: ['Mapeamento de sistemas', 'Identificação de riscos', 'Validação de escopo'],
      deliverable: 'Documento de arquitetura atual'
    },
    {
      number: '02',
      title: 'Projeto Executivo',
      duration: '1 semana',
      objective: 'Definir arquitetura e fechar escopo técnico',
      outputs: ['Especificação de conectores', 'Definição de APIs', 'Automações mapeadas'],
      deliverable: 'Cronograma técnico detalhado'
    },
    {
      number: '03',
      title: 'Implementação',
      duration: '2-4 semanas',
      objective: 'Desenvolver e testar integrações e automações',
      outputs: ['Conectores desenvolvidos', 'Workflows automatizados', 'Testes unitários e integração'],
      deliverable: 'Sistema integrado em homologação'
    },
    {
      number: '04',
      title: 'Entrega e Treinamento',
      duration: '1-2 semanas',
      objective: 'Deploy, validação e capacitação operacional',
      outputs: ['Deploy em produção', 'Validação operacional', 'Treinamento técnico'],
      deliverable: 'Sistema em produção + documentação'
    }
  ]

  return (
    <section id="metodo" className="bg-white py-16 sm:py-24">
      <SectionContainer>
        <FadeIn className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Como trabalhamos
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed">
            Metodologia estruturada em 4 fases. Escopo fechado validado na fase 2. 
            Sem indefinições. Sem surpresas.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-100 hidden md:block" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-purple border-4 border-white shadow-lg hidden md:block" />

                {/* Card */}
                <div className="md:ml-20 bg-white border border-neutral-100 rounded-xl p-6 sm:p-8 hover:border-primary-purple hover:shadow-lg hover:shadow-primary-purple/5 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-12 h-12 bg-primary-purple text-white rounded-lg flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                        {phase.number}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-800 group-hover:text-primary-purple transition-colors">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-neutral-500 mt-1">{phase.objective}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 bg-neutral-100 text-primary-purple text-sm font-medium rounded-full">
                      {phase.duration}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-neutral-500 font-semibold mb-2">
                        Outputs
                      </p>
                      <ul className="space-y-1 text-sm text-neutral-500">
                        {phase.outputs.map((output, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary-purple">•</span>
                            <span>{output}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-neutral-500 font-semibold mb-2">
                        Entrega
                      </p>
                      <p className="text-sm text-neutral-800 font-medium">
                        {phase.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Anti-escopo infinito box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-neutral-900 text-white rounded-2xl p-8 sm:p-10"
        >
          <h3 className="text-2xl font-bold mb-4">
            Anti-escopo infinito
          </h3>
          <p className="text-lg text-neutral-100 mb-6 leading-relaxed">
            <strong>Não vendemos diagnóstico separado.</strong> O levantamento inicial valida interfaces, 
            riscos e premissas técnicas dentro do projeto fechado.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Escopo fechado', detail: 'Validado na fase 2' },
              { label: 'Mudanças', detail: 'Proposta separada' },
              { label: 'Cronograma', detail: 'Cumprido até o fim' }
            ].map((item, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg p-4">
                <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                <p className="text-neutral-100 font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  )
}
