export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Fluxen Labs
            </h3>
            <p className="text-sm leading-relaxed">
              Consultoria de engenharia especializada em automação e integração 
              de sistemas industriais.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
              Contato
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:contato@fluxenlabs.com.br" 
                  className="hover:text-white transition-colors"
                >
                  contato@fluxenlabs.com.br
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5511999999999" 
                  className="hover:text-white transition-colors"
                >
                  +55 11 99999-9999
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Integração SCADA/MES/ERP</li>
              <li>Automação Industrial</li>
              <li>Protocolos Industriais</li>
              <li>Infraestrutura Técnica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-slate pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} Fluxen Labs. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="/privacidade" 
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="/termos" 
                className="hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
