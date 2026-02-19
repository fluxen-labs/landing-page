import { Header } from '@/components/Header';
import { TechnicalDiagram } from '@/components/TechnicalDiagram';

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section - Gradiente Principal */}
        <section 
          id="hero"
          className="bg-gradient-to-b from-primary-slate to-neutral-900 min-h-screen flex items-center justify-center pt-16"
        >
          <div className="container-custom py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Coluna de Texto */}
              <div className="space-y-8">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Engenharia operacional para empresas que cresceram mais rápido que seus processos.
                </h1>
                
                {/* Subtítulo */}
                <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-xl" style={{ lineHeight: '1.6' }}>
                  Projetamos arquiteturas inteligentes que integram WhatsApp, ERP e dados estruturados para eliminar gargalos operacionais.
                </p>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* CTA Principal */}
                  <a
                    href="https://web.whatsapp.com/send?phone=554791791018&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20melhor%20a%20Fluxen%20Labs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-purple/30"
                  >
                    <span>Solicitar Diagnóstico Técnico</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </a>
                  
                  {/* CTA Secundário */}
                  <a
                    href="#metodologia"
                    className="inline-flex items-center justify-center gap-2 text-accent-cyan hover:text-accent-cyan/80 font-semibold px-8 py-4 transition-colors duration-300 group"
                  >
                    <span>Ver como funciona</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </a>
                </div>

                {/* Indicadores de Trust */}
                <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-sm text-neutral-500">
                      <span className="text-white font-semibold">99.9%</span> uptime
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                    <span className="text-sm text-neutral-500">
                      <span className="text-white font-semibold">&lt;100ms</span> latência
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-purple" />
                    <span className="text-sm text-neutral-500">
                      <span className="text-white font-semibold">24/7</span> monitorado
                    </span>
                  </div>
                </div>
              </div>

              {/* Coluna Visual - Diagrama Técnico */}
              <div className="relative">
                <TechnicalDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* Diagnóstico da Realidade Section - Fundo Branco */}
        <section id="diagnostico" className="bg-white section-spacing">
          <div className="container-custom">
            {/* Cabeçalho da Seção */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-slate mb-6">
                Quando o crescimento supera a estrutura
              </h2>
              <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                Cenários comuns em empresas que cresceram rápido demais para seus processos acompanharem
              </p>
            </div>

            {/* Grid de Cards de Problemas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: 'Pedidos digitados manualmente',
                  description: 'Informações copiadas de WhatsApp para planilhas e depois para o ERP',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  ),
                },
                {
                  title: 'Informações críticas espalhadas',
                  description: 'Dados importantes perdidos em conversas de WhatsApp e e-mails',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                },
                {
                  title: 'ERP subutilizado',
                  description: 'Sistema pago mensalmente mas usado apenas como cadastro básico',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: 'Dependência de operadores específicos',
                  description: 'Processos que só funcionam se determinada pessoa estiver disponível',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Erros recorrentes',
                  description: 'Retrabalho constante por falta de validação automática de dados',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Dados não estruturados',
                  description: 'Impossibilidade de gerar relatórios confiáveis para tomada de decisão',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
              ].map((problem, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-lg border-2 border-neutral-100 hover:border-primary-purple bg-white transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-accent-cyan mb-4">
                    {problem.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-slate mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Frase de Impacto */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-100 rounded-lg p-8 md:p-10 relative overflow-hidden">
                {/* Barra lateral roxa */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-purple" />
                
                <div className="pl-6">
                  <p className="text-2xl md:text-3xl font-bold text-primary-slate leading-tight">
                    Se sua operação depende de copiar e colar dados, ela ainda não é um sistema.
                  </p>
                  <p className="text-neutral-500 mt-6 text-lg">
                    É hora de transformar processos manuais em arquitetura automatizada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O Que Construímos Section - Fundo Neutral-100 */}
        <section id="construimos" className="bg-neutral-100 section-spacing">
          <div className="container-custom">
            {/* Cabeçalho da Seção */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-slate mb-6">
                Arquitetura Operacional Estruturada
              </h2>
              <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                Sem automação superficial. Construímos infraestrutura operacional.
              </p>
            </div>

            {/* Grid 2x2 de Blocos Estruturais */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Bloco 1: Arquitetura de Fluxo Comercial */}
              <div className="group bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300 hover:shadow-lg">
                <div className="text-primary-purple mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-slate mb-4">
                  Arquitetura de Fluxo Comercial
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Integração profunda entre WhatsApp e ERP.<br />
                  Criação de camada intermediária validada.
                </p>
                <div className="h-1 w-16 bg-accent-cyan rounded-full" />
              </div>

              {/* Bloco 2: Estruturação de Dados Operacionais */}
              <div className="group bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300 hover:shadow-lg">
                <div className="text-primary-purple mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-slate mb-4">
                  Estruturação de Dados Operacionais
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Transformamos conversas em dados estruturados.<br />
                  Modelagem orientada a evento.
                </p>
                <div className="h-1 w-16 bg-accent-cyan rounded-full" />
              </div>

              {/* Bloco 3: Automação de Backoffice */}
              <div className="group bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300 hover:shadow-lg">
                <div className="text-primary-purple mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-slate mb-4">
                  Automação de Backoffice
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Eliminamos pontos de fricção manual.<br />
                  Redução de intervenção humana em tarefas repetitivas.
                </p>
                <div className="h-1 w-16 bg-accent-cyan rounded-full" />
              </div>

              {/* Bloco 4: Camada Inteligente com IA */}
              <div className="group bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300 hover:shadow-lg">
                <div className="text-primary-purple mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-slate mb-4">
                  Camada Inteligente com IA
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Agentes integrados ao fluxo real da empresa.<br />
                  IA operando dentro da arquitetura — não isolada.
                </p>
                <div className="h-1 w-16 bg-accent-cyan rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Metodologia Section - Fundo Branco */}
        <section id="metodologia" className="bg-white section-spacing">
          <div className="container-custom">
            {/* Título da Seção */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-slate">
                Processo de Engenharia
              </h2>
            </div>

            {/* Timeline Vertical */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {/* Etapa 1: Mapeamento do fluxo crítico */}
                <div className="flex gap-8 items-start">
                  {/* Número + Linha */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-purple">1</span>
                    </div>
                    <div className="w-0.5 h-24 bg-accent-cyan mt-4" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="pt-4">
                    <h3 className="text-2xl font-bold text-primary-slate mb-3">
                      Mapeamento do fluxo crítico
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      Análise profunda dos processos atuais, identificação de gargalos operacionais e mapeamento de dependências entre sistemas.
                    </p>
                  </div>
                </div>

                {/* Etapa 2: Redesenho estrutural */}
                <div className="flex gap-8 items-start">
                  {/* Número + Linha */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-purple">2</span>
                    </div>
                    <div className="w-0.5 h-24 bg-accent-cyan mt-4" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="pt-4">
                    <h3 className="text-2xl font-bold text-primary-slate mb-3">
                      Redesenho estrutural
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      Arquitetura de solução desenhada para eliminar fricções, criar camadas de validação e estabelecer fluxo automatizado de dados.
                    </p>
                  </div>
                </div>

                {/* Etapa 3: Implementação técnica */}
                <div className="flex gap-8 items-start">
                  {/* Número + Linha */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-purple">3</span>
                    </div>
                    <div className="w-0.5 h-24 bg-accent-cyan mt-4" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="pt-4">
                    <h3 className="text-2xl font-bold text-primary-slate mb-3">
                      Implementação técnica
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      Desenvolvimento incremental com testes contínuos, integração com sistemas existentes e validação em ambiente real.
                    </p>
                  </div>
                </div>

                {/* Etapa 4: Evolução contínua */}
                <div className="flex gap-8 items-start">
                  {/* Número (sem linha final) */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-purple">4</span>
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="pt-4">
                    <h3 className="text-2xl font-bold text-primary-slate mb-3">
                      Evolução contínua
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      Monitoramento de performance, ajustes baseados em dados reais e expansão gradual para novos módulos operacionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Frase de Impacto Final */}
            <div className="text-center mt-20 max-w-2xl mx-auto">
              <p className="text-3xl md:text-4xl font-bold text-primary-slate leading-tight">
                Sem promessa vaga.<br />
                Sem buzzword.<br />
                Engenharia aplicada à operação real.
              </p>
            </div>
          </div>
        </section>

        {/* Para Quem É Section - Fundo Neutral-100 */}
        <section id="para-quem-e" className="bg-neutral-100 section-spacing">
          <div className="container-custom">
            {/* Título da Seção */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-slate">
                Para quem é
              </h2>
            </div>

            {/* Grid de Perfis */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
              {/* Perfil 1: Empresas B2B */}
              <div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300">
                <div className="text-primary-purple mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-slate mb-2">
                  Empresas B2B
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Operação comercial estruturada entre empresas
                </p>
              </div>

              {/* Perfil 2: Operações com volume recorrente */}
              <div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300">
                <div className="text-primary-purple mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-slate mb-2">
                  Operações com volume recorrente
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Processos que se repetem com frequência previsível
                </p>
              </div>

              {/* Perfil 3: ERP já implantado */}
              <div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300">
                <div className="text-primary-purple mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-slate mb-2">
                  ERP já implantado
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Sistema de gestão estabelecido e em uso
                </p>
              </div>

              {/* Perfil 4: Time comercial via WhatsApp */}
              <div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300">
                <div className="text-primary-purple mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-slate mb-2">
                  Time comercial via WhatsApp
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Comunicação com clientes concentrada no WhatsApp
                </p>
              </div>
            </div>

            {/* Mini Seção de Credibilidade */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Item 1: Arquitetura sob medida */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-purple/10 mb-4">
                    <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary-slate mb-2">
                    Arquitetura sob medida
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Solução desenhada para seu contexto específico
                  </p>
                </div>

                {/* Item 2: Integração com ERP existente */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-purple/10 mb-4">
                    <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary-slate mb-2">
                    Integração com ERP existente
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Conectamos com seu sistema atual sem substituí-lo
                  </p>
                </div>

                {/* Item 3: Sem trocar seu stack */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-purple/10 mb-4">
                    <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary-slate mb-2">
                    Sem trocar seu stack
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Mantém suas ferramentas e processos funcionando
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais Section - Fundo Escuro */}
        <section id="diferenciais" className="bg-neutral-900 section-spacing">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nossos Diferenciais
              </h2>
              <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                Compromisso com excelência e resultados comprovados
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Projetos Fechados',
                  description: 'Entregas completas com documentação técnica e treinamento da equipe.',
                },
                {
                  title: 'Produção Real',
                  description: 'Todas as soluções testadas e validadas em ambientes de produção.',
                },
                {
                  title: 'Monitoramento Contínuo',
                  description: 'Sistemas de observabilidade e alertas para garantir alta disponibilidade.',
                },
                {
                  title: 'Suporte Especializado',
                  description: 'Time técnico disponível para suporte e evolução contínua dos projetos.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary-purple flex items-center justify-center text-white font-bold text-xl">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Estruturação Operacional - White Background */}
        <section id="casos" className="bg-white section-spacing">
          <div className="container-custom">
            {/* Cabeçalho */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Arquiteturas implementadas em operações reais
              </h2>
              <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Integrações profundas que eliminaram gargalos estruturais — não apenas tarefas manuais.
              </p>
            </div>

            {/* Cases Container */}
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Case 1: Distribuidor B2B */}
              <article className="bg-neutral-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Header do Case */}
                <div className="bg-primary-purple/5 px-8 py-6 border-b border-neutral-200">
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Distribuidor B2B com ERP e vendas via WhatsApp
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">Comércio · 45 colaboradores · R$ 18M/ano</p>
                </div>

                {/* Grid 3 Blocos */}
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  {/* Bloco 1: Contexto Operacional */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-neutral-900">Contexto Operacional</h4>
                    </div>
                    <ul className="space-y-3 text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">•</span>
                        <span>3 operadores digitando pedidos manualmente no ERP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">•</span>
                        <span>Informações críticas dispersas em conversas de WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">•</span>
                        <span>ERP usado apenas para faturamento após venda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">•</span>
                        <span>Dependência crítica de memória individual</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bloco 2: Intervenção Arquitetural */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-neutral-900">Intervenção Arquitetural</h4>
                    </div>
                    <ul className="space-y-3 text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-purple mt-1">→</span>
                        <span><strong className="text-neutral-900">Camada intermediária</strong> entre WhatsApp e ERP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-purple mt-1">→</span>
                        <span><strong className="text-neutral-900">Estruturação automática</strong> de pedidos via NLP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-purple mt-1">→</span>
                        <span><strong className="text-neutral-900">Validação pré-ERP</strong> de dados críticos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-purple mt-1">→</span>
                        <span><strong className="text-neutral-900">API de sincronização</strong> bidirecional em tempo real</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bloco 3: Impacto Estrutural */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-neutral-900">Impacto Estrutural</h4>
                    </div>
                    <ul className="space-y-3 text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-green mt-1">✓</span>
                        <span>Eliminação de retrabalho por erros de digitação</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-green mt-1">✓</span>
                        <span>Operação independente de indivíduos específicos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-green mt-1">✓</span>
                        <span>Fluxo comercial previsível e monitorável</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-green mt-1">✓</span>
                        <span>Dados estruturados para análise estratégica</span>
                      </li>
                    </ul>

                    {/* Métricas */}
                    <div className="pt-4 mt-4 border-t border-neutral-200">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-2xl font-bold text-accent-green">+37%</div>
                          <div className="text-xs text-neutral-500">eficiência operacional</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-2xl font-bold text-accent-cyan">-62%</div>
                          <div className="text-xs text-neutral-500">erros manuais</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Case 2: E-commerce com Atendimento Híbrido */}
              <article className="bg-neutral-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Header do Case */}
                <div className="bg-primary-purple/5 px-8 py-6 border-b border-neutral-200">
                  <h3 className="text-2xl font-bold text-neutral-900">
                    E-commerce com atendimento híbrido (site + WhatsApp)
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">Varejo · 22 colaboradores · 15k pedidos/mês</p>
                </div>

                {/* Grid 3 Blocos */}
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  {/* Bloco 1: Contexto Operacional */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-neutral-900">Contexto Operacional</h4>
                    </div>
                    <ul className="space-y-3 text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">•</span>
                        <span>50% dos pedidos iniciados no site finalizados via WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">•</span>
                        <span>Estoque sincronizado manualmente entre canais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">•</span>
                        <span>Histórico de cliente fragmentado em 3 sistemas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">•</span>
                        <span>Impossibilidade de atribuir conversões corretamente</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bloco 2: Intervenção Arquitetural */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-neutral-900">Intervenção Arquitetural</h4>
                    </div>
                    <ul className="space-y-3 text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-purple mt-1">→</span>
                        <span><strong className="text-neutral-900">Motor de orquestração</strong> unificando canais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-purple mt-1">→</span>
                        <span><strong className="text-neutral-900">Estoque centralizado</strong> com reserva automática cross-channel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-purple mt-1">→</span>
                        <span><strong className="text-neutral-900">Perfil único de cliente</strong> agregando histórico completo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-purple mt-1">→</span>
                        <span><strong className="text-neutral-900">Sistema de atribuição</strong> baseado em eventos</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bloco 3: Impacto Estrutural */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-neutral-900">Impacto Estrutural</h4>
                    </div>
                    <ul className="space-y-3 text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-green mt-1">✓</span>
                        <span>Experiência contínua independente do canal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-green mt-1">✓</span>
                        <span>Visibilidade real de estoque em tempo real</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-green mt-1">✓</span>
                        <span>Decisões baseadas em jornada completa do cliente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-green mt-1">✓</span>
                        <span>Capacidade de escalar canais sem refazer estrutura</span>
                      </li>
                    </ul>

                    {/* Métricas */}
                    <div className="pt-4 mt-4 border-t border-neutral-200">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-2xl font-bold text-accent-green">+28%</div>
                          <div className="text-xs text-neutral-500">taxa de conversão</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-2xl font-bold text-accent-cyan">-71%</div>
                          <div className="text-xs text-neutral-500">erros de estoque</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Frase de Encerramento */}
            <div className="max-w-3xl mx-auto mt-20 text-center">
              <p className="text-2xl md:text-3xl font-bold text-neutral-900 leading-relaxed">
                Não otimizamos tarefas isoladas.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary-purple leading-relaxed mt-2">
                Reestruturamos a arquitetura que sustenta a operação.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final Section - Conversão Forte */}
        <section id="cta-final" className="bg-primary-slate section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              {/* Título Principal */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
                Se sua operação já cresceu, sua arquitetura precisa acompanhar.
              </h2>

              {/* Botão CTA Grande */}
              <a
                href="https://web.whatsapp.com/send?phone=554791791018&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20melhor%20a%20Fluxen%20Labs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary-purple hover:bg-brand-purple text-white font-bold px-12 py-6 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-brand-purple/50 text-xl group"
              >
                <span>Agendar Diagnóstico Técnico</span>
                <svg 
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </a>

              {/* Informação de Apoio */}
              <p className="text-neutral-400 mt-8 text-sm">
                Diagnóstico técnico sem compromisso · Análise de viabilidade incluída
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-neutral-900 py-16">
          <div className="container-custom">
            {/* Grid 3 Colunas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Coluna 1: Marca */}
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Fluxen Labs</h3>
                <p className="text-neutral-400 text-sm">Engenharia Operacional</p>
              </div>

              {/* Coluna 2: Navegação */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegação</h4>
                <nav className="flex flex-col gap-3">
                  <a 
                    href="#arquitetura" 
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    Arquitetura
                  </a>
                  <a 
                    href="#metodologia" 
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    Metodologia
                  </a>
                  <a 
                    href="#diagnostico" 
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    Diagnóstico
                  </a>
                </nav>
              </div>

              {/* Coluna 3: Contato */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contato</h4>
                <div className="flex flex-col gap-3">
                  <a 
                    href="mailto:contato@fluxenlabs.com" 
                    className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contato@fluxenlabs.com
                  </a>
                  <a 
                    href="https://linkedin.com/company/fluxenlabs" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Linha Inferior - Copyright */}
            <div className="pt-8 border-t border-neutral-800">
              <p className="text-center text-neutral-500 text-sm">
                © 2026 Fluxen Labs. Engenharia aplicada à operação.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}


