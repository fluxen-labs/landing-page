/**
 * Diagnóstico Cards Showcase
 * Demonstra diferentes estados dos cards de problemas
 */

'use client';

// ============================================
// CARD NORMAL (Sem Hover)
// ============================================
export function DiagnosticoCardNormal() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-sm">
        <div className="p-6 rounded-lg border-2 border-neutral-100 bg-white">
          <div className="text-accent-cyan mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-primary-slate mb-3">
            Pedidos digitados manualmente
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Informações copiadas de WhatsApp para planilhas e depois para o ERP
          </p>
        </div>
        <div className="text-center mt-4 text-neutral-500 text-sm">
          Estado Normal - Border neutral-100
        </div>
      </div>
    </div>
  );
}

// ============================================
// CARD HOVER
// ============================================
export function DiagnosticoCardHover() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-sm">
        <div className="p-6 rounded-lg border-2 border-primary-purple bg-white shadow-lg">
          <div className="text-accent-cyan mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-primary-slate mb-3">
            Pedidos digitados manualmente
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Informações copiadas de WhatsApp para planilhas e depois para o ERP
          </p>
        </div>
        <div className="text-center mt-4 text-neutral-500 text-sm">
          Estado Hover - Border primary-purple + shadow-lg
        </div>
      </div>
    </div>
  );
}

// ============================================
// TODOS OS 6 CARDS JUNTOS
// ============================================
export function DiagnosticoCardsGrid() {
  const problems = [
    {
      title: 'Pedidos digitados manualmente',
      description: 'Informações copiadas de WhatsApp para planilhas e depois para o ERP',
      icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    },
    {
      title: 'Informações críticas espalhadas',
      description: 'Dados importantes perdidos em conversas de WhatsApp e e-mails',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    },
    {
      title: 'ERP subutilizado',
      description: 'Sistema pago mensalmente mas usado apenas como cadastro básico',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    {
      title: 'Dependência de operadores específicos',
      description: 'Processos que só funcionam se determinada pessoa estiver disponível',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    },
    {
      title: 'Erros recorrentes',
      description: 'Retrabalho constante por falta de validação automática de dados',
      icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Dados não estruturados',
      description: 'Impossibilidade de gerar relatórios confiáveis para tomada de decisão',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
  ];

  return (
    <div className="bg-white p-8">
      <div className="container-custom">
        <h3 className="text-2xl font-bold text-primary-slate mb-8 text-center">
          Grid de Cards - 6 Problemas
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border-2 border-neutral-100 hover:border-primary-purple bg-white transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-accent-cyan mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={problem.icon} />
                </svg>
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
      </div>
    </div>
  );
}

// ============================================
// FRASE DE IMPACTO
// ============================================
export function DiagnosticoImpactQuote() {
  return (
    <div className="bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-primary-slate mb-6 text-center">
          Frase de Impacto
        </h3>
        
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
        
        <div className="text-center mt-4 text-neutral-500 text-sm">
          Fundo neutral-100 + Barra roxa + Tipografia forte
        </div>
      </div>
    </div>
  );
}

// ============================================
// SEÇÃO COMPLETA
// ============================================
export function DiagnosticoFullSection() {
  const problems = [
    {
      title: 'Pedidos digitados manualmente',
      description: 'Informações copiadas de WhatsApp para planilhas e depois para o ERP',
      icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    },
    {
      title: 'Informações críticas espalhadas',
      description: 'Dados importantes perdidos em conversas de WhatsApp e e-mails',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    },
    {
      title: 'ERP subutilizado',
      description: 'Sistema pago mensalmente mas usado apenas como cadastro básico',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    {
      title: 'Dependência de operadores específicos',
      description: 'Processos que só funcionam se determinada pessoa estiver disponível',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    },
    {
      title: 'Erros recorrentes',
      description: 'Retrabalho constante por falta de validação automática de dados',
      icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Dados não estruturados',
      description: 'Impossibilidade de gerar relatórios confiáveis para tomada de decisão',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-slate mb-6">
            Quando o crescimento supera a estrutura
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            Cenários comuns em empresas que cresceram rápido demais para seus processos acompanharem
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border-2 border-neutral-100 hover:border-primary-purple bg-white transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-accent-cyan mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={problem.icon} />
                </svg>
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
  );
}
