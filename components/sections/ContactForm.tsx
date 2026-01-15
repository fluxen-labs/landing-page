'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setIsError(false)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    try {
      // Simula envio (substitua pela chamada real à API quando necessário)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Aqui você pode adicionar a chamada real:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      // if (!response.ok) throw new Error('Erro ao enviar')

      setIsSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white text-neutral-800 rounded-lg p-8 max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-3">Solicitação Enviada!</h3>
        <p className="text-neutral-500 mb-6">
          Recebemos sua solicitação. Nossa equipe técnica entrará em contato em até 24h úteis.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-primary-purple hover:text-brand-purple font-medium transition-colors"
        >
          Enviar nova solicitação
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white text-neutral-800 rounded-lg p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-6">
        Solicitar Proposta
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="text-left">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="João Silva"
          />
        </div>

        <div className="text-left">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-mail corporativo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="joao.silva@empresa.com.br"
          />
        </div>

        <div className="text-left">
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Nome da Empresa"
          />
        </div>

        <div className="text-left">
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div className="text-left">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Descreva brevemente seu desafio técnico
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Ex: Precisamos integrar ERP com WMS, automatizar regras de faturamento e estruturar dados de estoque em tempo real..."
          />
        </div>

        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            Erro ao enviar solicitação. Tente novamente.
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary-purple hover:bg-brand-purple text-white font-semibold px-6 py-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Receber proposta técnica'
          )}
        </button>
      </form>

      <p className="text-sm text-neutral-500 mt-4 text-center">
        Resposta em até 24h úteis
      </p>
    </div>
  )
}
