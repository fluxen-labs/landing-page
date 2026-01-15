export default function Hero() {
  return (
    <section className="relative bg-primary-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Automação e Integração Industrial com Escopo Fechado
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-100 mb-8 leading-relaxed">
            Conectamos sistemas SCADA, PLC e MES. Automatizamos processos críticos. 
            Sem indefinições de escopo. Projeto fechado, prazo definido.
          </p>
          <a
            href="#contato"
            className="inline-block bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-purple focus:ring-offset-2 focus:ring-offset-primary-slate"
            aria-label="Solicitar proposta comercial"
          >
            Solicitar Proposta Comercial
          </a>
        </div>
      </div>
    </section>
  )
}
