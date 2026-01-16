'use client'

import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'
import FadeIn from '@/components/ui/FadeIn'

export default function Problem() {
  const problems = [
    {
      title: 'Silos de sistemas e retrabalho manual',
      description: 'Dados espalhados entre ERP, WMS, TMS, planilhas e sistemas legados obrigam equipes a exportar/importar informações manualmente. Exemplo: um pedido no e-commerce não atualiza o estoque no ERP em tempo real, gerando erro de inventário e retrabalho constante para corrigir discrepâncias.',
      icon: '📦'
    },
    {
      title: 'Falta de automação em processos críticos',
      description: 'Operações dependentes de intervenções humanas (como atualizações de status, consolidações de dados ou disparo de alertas) ficam sujeitas a atrasos e falhas. Exemplo: sem workflows automatizados, incidentes importantes passam despercebidos até virarem falha grave, causando downtime não planejado e perda de receita.',
      icon: '⚠️'
    },
    {
      title: 'Integrações frágeis e pouca visibilidade',
      description: 'Conexões ad hoc entre sistemas quebram com facilidade e não há monitoramento proativo. Exemplo: integrações caseiras entre CRM e sistema de vendas caem sem aviso, levando a perda de leads ou duplicidade de cadastro, enquanto a equipe descobre o problema tarde demais, afetando a confiança dos clientes.',
      icon: '🔧'
    }
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
              Problemas & Consequências
            </h2>
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed mb-8">
              Operações críticas não podem depender de processos manuais, sistemas isolados e integrações que quebram sem aviso.
            </p>
            
            <div className="bg-neutral-100 border-l-4 border-primary-purple rounded-r-lg p-6">
              <p className="text-sm font-semibold text-neutral-800 mb-2">
                O impacto no negócio
              </p>
              <p className="text-neutral-500 leading-relaxed">
                Retrabalho constante, perda de dados, downtime não planejado e decisões baseadas em informações desatualizadas.
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
