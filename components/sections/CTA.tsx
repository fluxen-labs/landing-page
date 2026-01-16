'use client'

import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'
import ContactForm from './ContactForm'

export default function CTA() {
  const benefits = [
    'Proposta com escopo técnico fechado',
    'Prazo e investimento definidos',
    'Arquitetura de integração inicial',
    'Sem compromisso de contratação'
  ]

  return (
    <section id="contato" className="relative bg-primary-purple text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <SectionContainer className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-lg sm:text-xl text-neutral-100 max-w-2xl mx-auto leading-relaxed">
            Entre em contato para agendar uma reunião técnica gratuita (45–60 min). Sem qualquer custo ou compromisso inicial, nossos especialistas irão entender seu desafio e apresentar uma proposta de solução com escopo fechado, totalmente personalizada para a sua operação crítica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Transforme seu problema em um projeto de sucesso
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-neutral-100">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <p className="text-sm text-neutral-100 leading-relaxed">
                <strong className="text-white">Nota:</strong> Este formulário não gera compromisso de contratação. 
                A reunião técnica inicial é sem custo e serve para avaliarmos a viabilidade técnica do projeto.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  )
}
