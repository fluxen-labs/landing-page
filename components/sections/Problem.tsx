'use client'

import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'
import FadeIn from '@/components/ui/FadeIn'

export default function Problem() {
  const problems = [
    {
      title: 'Projetos que viram escopo infinito',
      description: 'Integrações que se arrastam por meses sem linha de chegada clara, sem previsibilidade técnica',
      icon: '∞'
    },
    {
      title: 'Integrações frágeis e não monitoradas',
      description: 'Sistemas conectados sem observabilidade, falham silenciosamente e geram inconsistências',
      icon: '⚠️'
    },
    {
      title: 'Dependência de fornecedores',
      description: 'Vendor lock-in com suporte técnico limitado, custos recorrentes altos e risco operacional',
      icon: '🔒'
    },
    {
      title: 'Dados críticos inacessíveis',
      description: 'Informação operacional dispersa em sistemas legados, sem estrutura para decisões em tempo real',
      icon: '📊'
    }
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
              O problema não é a tecnologia
            </h2>
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed mb-8">
              É a ausência de engenharia e escopo claro. Projetos que viram escopo infinito, 
              integrações frágeis e dados críticos inacessíveis.
            </p>
            
            <div className="bg-neutral-100 border-l-4 border-primary-purple rounded-r-lg p-6">
              <p className="text-sm font-semibold text-neutral-800 mb-2">
                Onde projetos quebram
              </p>
              <p className="text-neutral-500 leading-relaxed">
                Integração frágil + falta de observabilidade = falhas silenciosas em produção.
              </p>
            </div>
          </FadeIn>

          {/* Right: Problems List */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="group bg-white border border-neutral-100 rounded-xl p-6 hover:border-primary-purple hover:shadow-lg hover:shadow-primary-purple/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{problem.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-primary-purple transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
