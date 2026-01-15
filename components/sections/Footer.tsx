'use client'

import SectionContainer from '@/components/ui/SectionContainer'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-500 py-12 border-t border-primary-slate">
      <SectionContainer>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Fluxen Labs
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Consultoria de engenharia hands-on para automação e integração operacional.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>📍</span>
              <span>Brasil</span>
            </div>
          </div>

          {/* Model */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
              Modelo
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Projetos fechados</li>
              <li>Escopo definido</li>
              <li>Entrega em produção</li>
              <li>Documentada e monitorada</li>
            </ul>
          </div>

          {/* Contact */}
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
              <li className="pt-2">
                <span className="text-xs text-neutral-500">Resposta em 1 dia útil</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Automação & Integração</li>
              <li>IA Aplicada</li>
              <li>BPO Tech</li>
              <li>Omnichannel</li>
              <li>Cloud & Infra</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-slate pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>
              © {currentYear} Fluxen Labs. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
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
      </SectionContainer>
    </footer>
  )
}
