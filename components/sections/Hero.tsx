'use client'

import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'
import Logo from '@/components/Logo'

export default function Hero() {
  const proofPoints = [
    { label: 'Prazo típico', value: '4–8 semanas', icon: '⏱️' },
    { label: 'Modelo', value: 'Projeto fechado', icon: '📋' },
    { label: 'Entrega', value: 'Em produção', icon: '✓' }
  ]

  return (
    <section className="relative bg-primary-slate text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-slate via-neutral-900 to-primary-slate opacity-90" />

      <SectionContainer className="relative py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="mb-8">
              <Logo variant="light" width={220} />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Engenharia de Automação para Operações Críticas
            </h1>
            <p className="text-lg sm:text-xl text-neutral-100 mb-8 leading-relaxed max-w-2xl">
              Integrações entre ERP, WMS, TMS, CRMs e sistemas legados. Pipelines de dados estruturados. 
              Automação de regras de negócio em ambientes produtivos. Escopo fechado, previsibilidade técnica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-purple focus:ring-offset-2 focus:ring-offset-primary-slate shadow-lg hover:shadow-primary-purple/50 hover:-translate-y-0.5"
              >
                Solicitar Proposta Comercial
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center border-2 border-neutral-500 hover:border-neutral-100 text-neutral-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-100 focus:ring-offset-2 focus:ring-offset-primary-slate"
              >
                Ver como trabalhamos
              </a>
            </div>

            <p className="text-sm text-neutral-500">
              Resposta em até 1 dia útil
            </p>
          </motion.div>

          {/* Right: Proof Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid gap-4"
          >
            {proofPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-500/30 rounded-xl p-6 hover:border-primary-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-purple/10"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{point.icon}</span>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">{point.label}</p>
                    <p className="text-xl font-semibold text-white">{point.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  )
}
