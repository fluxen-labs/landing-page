export default function CTA() {
  return (
    <section id="contato" className="bg-primary-purple text-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Próximo passo: diagnóstico técnico
        </h2>
        <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Agende uma reunião técnica de 60 minutos. Mapeamos seus sistemas, 
          identificamos pontos de integração e apresentamos proposta comercial com escopo fechado.
        </p>
        
        <div className="bg-white text-neutral-900 rounded-lg p-8 max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-6">
            Solicitar Proposta
          </h3>
          <form className="space-y-4">
            <div className="text-left">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent"
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
                className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent"
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
                className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent"
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
                className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent"
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
                className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent resize-none"
                placeholder="Ex: Precisamos integrar nosso SCADA com o ERP SAP e automatizar a coleta de dados de produção..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-purple hover:bg-brand-purple text-white font-semibold px-6 py-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
            >
              Enviar Solicitação
            </button>
          </form>

          <p className="text-sm text-neutral-500 mt-4">
            Resposta em até 24h úteis
          </p>
        </div>
      </div>
    </section>
  )
}
