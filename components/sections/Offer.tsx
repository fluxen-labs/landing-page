'use client'

import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'
import FadeIn from '@/components/ui/FadeIn'

export default function Offer() {
  const deliverables = {
    producao: [
      'Arquitetura de integração documentada',
      'Conectores entre sistemas (ERP, WMS, CRMs, legados)',
      'Automação de workflows e regras de negócio',
    ],
    documentacao: [
      'Pipelines de dados com observabilidade',
      'Documentação técnica completa',
      'Treinamento operacional da equipe'
    ],
    monitoramento: [
      'Deploy em produção com monitoramento',
      'Alertas configurados para falhas',
      'Runbooks para operação'
    ]
  }

  return (
    <section id="oferta" className="relative bg-neutral-900 text-white py-16 sm:py-24 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <SectionContainer className="relative">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projeto de Automação e Integração Operacional
          </h2>
          <p className="text-lg sm:text-xl text-neutral-100 max-w-3xl mx-auto leading-relaxed">
            Integrações estruturadas entre sistemas. Automação de workflows operacionais. 
            Pipelines de dados monitorados. Projeto fechado desde o início.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-primary-slate border border-primary-purple/30 rounded-2xl p-8 shadow-2xl shadow-primary-purple/10 hover:shadow-primary-purple/20 transition-shadow duration-500">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 to-transparent rounded-2xl" />
              
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-sm uppercase tracking-wide text-neutral-500 mb-4">
                    Modelo Comercial
                  </p>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-white">
                      R$ 30.000
                    </span>
                    <span className="text-neutral-500">a partir de</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-flex items-center px-4 py-2 bg-neutral-900 border border-neutral-500 rounded-lg text-sm">
                      ⏱️ 4–8 semanas típico
                    </span>
                    <span className="inline-flex items-center px-4 py-2 bg-neutral-900 border border-neutral-500 rounded-lg text-sm">
                      📋 Projeto fechado
                    </span>
                  </div>
                  <p className="text-neutral-100 leading-relaxed">
                    Sem mensalidade. Sem venda de horas. Sem escopo aberto. 
                    Entrega em produção, documentada e monitorada.
                  </p>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-500/30 rounded-xl p-6">
                  <p className="text-sm font-semibold text-primary-purple mb-3">
                    ⚠️ Limites do projeto
                  </p>
                  <p className="text-sm text-neutral-100 leading-relaxed">
                    Escopo fechado validado na fase 2. Mudanças de escopo geram proposta comercial separada. 
                    Cronograma acordado no início, cumprido até o fim.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Deliverables - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Produção', items: deliverables.producao, icon: '🔧' },
            { title: 'Documentação', items: deliverables.documentacao, icon: '📚' },
            { title: 'Monitoramento', items: deliverables.monitoramento, icon: '📡' }
          ].map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-neutral-900/50 border border-neutral-500/30 rounded-xl p-6 hover:border-primary-purple/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-neutral-100">
                    <svg className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
