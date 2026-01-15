'use client'

import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'
import FadeIn from '@/components/ui/FadeIn'

export default function Services() {
  const coreService = {
    category: 'Automação & Integração',
    badge: 'CORE',
    description: 'Base técnica obrigatória para qualquer operação estruturada',
    items: [
      'Integração entre sistemas (ERP, WMS, TMS, CRMs, legados)',
      'Automação de workflows operacionais',
      'APIs padronizadas para acesso estruturado aos dados',
      'Sincronização de dados em tempo real',
      'Pipelines de dados com observabilidade'
    ],
    icon: '⚙️'
  }

  const dependentServices = [
    {
      category: 'IA Aplicada',
      badge: 'DEPENDENTE',
      description: 'Modelos sobre dados estruturados',
      items: ['Análise operacional', 'Automação inteligente', 'Predição e otimização'],
      icon: '🤖'
    },
    {
      category: 'BPO Tech',
      badge: 'DEPENDENTE',
      description: 'Operação terceirizada técnica',
      items: ['Monitoramento 24/7', 'SLA técnico', 'Gestão operacional'],
      icon: '📞'
    },
    {
      category: 'Omnichannel',
      badge: 'DEPENDENTE',
      description: 'Comunicação unificada',
      items: ['Integração de canais', 'Automação de respostas', 'Histórico unificado'],
      icon: '💬'
    },
    {
      category: 'Cloud & Infra',
      badge: 'CAMADA BASE',
      description: 'Infraestrutura para operação',
      items: ['Arquitetura cloud', 'Monitoramento', 'Alta disponibilidade'],
      icon: '☁️'
    }
  ]

  return (
    <section id="servicos" className="bg-neutral-100 py-16 sm:py-24">
      <SectionContainer>
        <FadeIn className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Camadas de serviço
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed">
            Estrutura modular. Cada projeto pode incluir uma ou mais camadas, sempre partindo da base técnica.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Core Service - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-2 bg-primary-purple text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-primary-purple/20 transition-all duration-500"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{coreService.icon}</span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                    {coreService.category}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 bg-white/20 rounded-full">
                    {coreService.badge}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-neutral-100 mb-6 leading-relaxed">
              {coreService.description}
            </p>
            
            <ul className="space-y-3">
              {coreService.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-100">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dependent Services - Smaller Cards */}
          {dependentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-neutral-100 rounded-xl p-6 hover:border-primary-purple hover:shadow-lg hover:shadow-primary-purple/5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{service.icon}</span>
                <span className="text-xs font-bold px-2 py-1 bg-neutral-100 text-neutral-500 rounded group-hover:bg-primary-purple/10 group-hover:text-primary-purple transition-colors">
                  {service.badge}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-primary-purple transition-colors">
                {service.category}
              </h3>
              
              <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-neutral-500">
                    <span className="text-primary-purple">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Regra de Ouro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary-purple text-white rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">⚡</span>
            <div>
              <h3 className="text-2xl font-bold mb-4">Regra de Ouro</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Não existe IA, BPO ou Omnichannel sem automação e integração por baixo.</strong>
              </p>
              <p className="text-neutral-100 text-sm leading-relaxed">
                Toda implementação começa pela base técnica: conectar sistemas, estruturar dados operacionais 
                e automatizar regras de negócio. As demais camadas dependem dessa fundação.
              </p>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  )
}
