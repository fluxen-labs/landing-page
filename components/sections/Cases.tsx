'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionContainer from '@/components/ui/SectionContainer'
import FadeIn from '@/components/ui/FadeIn'

export default function Cases() {
  const [activeSlide, setActiveSlide] = useState(0)

  const allCases = [
    {
      title: 'Atendimento Omnichannel',
      industry: 'Locação de Equipamentos',
      challenge: 'Atendimento fragmentado (WhatsApp, e-mail, telefone) causando desencontro de informações',
      result: 'Suporte padronizado em todos os canais, eliminando mensagens perdidas e ruídos',
      metric: '100%',
      icon: '💬'
    },
    {
      title: 'Ecommerce de Móveis',
      industry: 'E-commerce de Móveis',
      challenge: 'Operações manuais intensivas com Mercado Livre e conciliação com ERP',
      result: 'Alertas de venda em tempo real e conciliação automática livre de erros',
      metric: '0',
      icon: '🛋️'
    },
    {
      title: 'Agência de Marketing Esportivo',
      industry: 'Marketing',
      challenge: 'Falta de integração entre canais dificultava identificar contatos VIP',
      result: 'Atendimento prioritário imediato com bots inteligentes e triagem automatizada',
      metric: 'VIP',
      icon: '⚽'
    },
    {
      title: 'Cliente RPA – Projetos de IA Escalados',
      industry: 'Consultoria de IA',
      challenge: 'Múltiplos projetos simultâneos precisavam acelerar entregas sem sobrecarregar o time',
      result: 'Modelos de IA mais precisos e agente de vendas inteligente',
      metric: 'IA',
      icon: '🤖'
    },
    {
      title: 'Cliente Médico MVP – Pronto-socorro (São Paulo)',
      industry: 'Saúde',
      challenge: 'POC de plataforma de atendimento online precisava virar solução robusta',
      result: 'Sistema pronto para produção em poucas semanas, seguro e escalável',
      metric: 'MVP',
      icon: '🏥'
    },
    {
      title: 'Cliente Saúde – Landing Page Integrada',
      industry: 'Startup EUA',
      challenge: 'Lançamento rápido com integrações de pagamento e captação de leads',
      result: 'Plataforma completa processando pagamentos automaticamente',
      metric: 'USA',
      icon: '🚀'
    }
  ]

  const maxSlides = allCases.length - 1

  return (
    <section id="cases" className="bg-white py-16 sm:py-24">
      <SectionContainer>
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Cases & Experiências Reais
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Projetos entregues com resultados operacionais concretos
          </p>
        </FadeIn>

        {/* Carousel Controls */}
        <div className="flex items-center justify-end mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="w-10 h-10 rounded-lg border border-neutral-200 flex items-center justify-center hover:border-primary-purple hover:text-primary-purple transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveSlide(Math.min(maxSlides, activeSlide + 1))}
              disabled={activeSlide === maxSlides}
              className="w-10 h-10 rounded-lg border border-neutral-200 flex items-center justify-center hover:border-primary-purple hover:text-primary-purple transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `${-activeSlide * 100}%` }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex gap-6"
          >
            {allCases.map((caseItem, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[calc(50%-12px)] bg-white border border-neutral-200 rounded-xl p-6 hover:border-primary-purple hover:shadow-lg transition-all duration-300 flex-shrink-0"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-purple/10 rounded-xl flex items-center justify-center text-2xl">
                    {caseItem.icon}
                  </div>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider px-2 py-1 bg-neutral-100 rounded">
                    {caseItem.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {caseItem.title}
                </h3>
                
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {caseItem.challenge}
                </p>

                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary-purple">{caseItem.metric}</span>
                  </div>
                  <p className="text-sm text-neutral-700 font-medium">
                    {caseItem.result}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {allCases.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSlide === index ? 'bg-primary-purple w-8' : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
