'use client'

import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="João da Silva"
            className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Email corporativo *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="seu.nome@empresa.com.br"
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-200"
            placeholder="Nome da sua empresa"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+55 11 99999-9999"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Conte sobre seu desafio operacional
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent resize-none"
          placeholder="Descreva o problema operacional que precisa resolver..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-primary-purple hover:bg-brand-purple text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-purple/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Enviando...' : 'Solicitar Diagnóstico Técnico'}
      </button>

      <p className="text-center text-xs text-neutral-500 mt-4">
        Sem compromisso. Analisaremos viabilidade técnica e retornamos com proposta.
      </p>
    </form>
  )
}
