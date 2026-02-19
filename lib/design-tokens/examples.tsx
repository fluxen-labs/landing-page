/**
 * Exemplos de uso do Sistema de Cores Fluxen Labs
 * 
 * Este arquivo demonstra como usar corretamente o sistema de cores
 * em diferentes cenários de desenvolvimento.
 */

import { colors, gradients, colorRules } from './colors';

// ============================================
// EXEMPLO 1: Componente de Hero Section
// ============================================

export function HeroExample() {
  return (
    <section className="bg-gradient-to-b from-primary-slate to-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-6xl font-bold">
          Bem-vindo à Fluxen Labs
        </h1>
        <p className="text-neutral-500 text-xl">
          Inovação e tecnologia de ponta
        </p>
        <button className="bg-primary-purple hover:bg-brand-purple text-white px-8 py-4 rounded-lg transition-colors">
          Começar Agora
        </button>
      </div>
    </section>
  );
}

// ============================================
// EXEMPLO 2: Seções Alternadas
// ============================================

export function AlternatingSection() {
  return (
    <>
      {/* Seção Clara */}
      <section className="bg-neutral-100 py-20">
        <h2 className="text-primary-slate text-4xl font-bold">
          Nossos Serviços
        </h2>
        <p className="text-neutral-500">
          Conteúdo da seção clara
        </p>
      </section>

      {/* Seção Escura */}
      <section className="bg-neutral-900 py-20">
        <h2 className="text-white text-4xl font-bold">
          Diferenciais
        </h2>
        <p className="text-neutral-500">
          Conteúdo da seção escura
        </p>
      </section>
    </>
  );
}

// ============================================
// EXEMPLO 3: CTAs (Call-to-Action)
// ============================================

export function CTAExamples() {
  return (
    <div className="space-y-4">
      {/* CTA Principal */}
      <button className="bg-primary-purple hover:bg-brand-purple text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg">
        CTA Principal
      </button>

      {/* CTA Secundário (Outline) */}
      <button className="border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
        CTA Secundário
      </button>

      {/* CTA com Accent */}
      <button className="bg-accent-cyan hover:bg-accent-cyan/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
        CTA Destaque
      </button>
    </div>
  );
}

// ============================================
// EXEMPLO 4: Cards com Sistema de Cores
// ============================================

export function CardExample() {
  return (
    <div className="bg-white border border-neutral-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-primary-slate text-2xl font-bold mb-4">
        Card Title
      </h3>
      <p className="text-neutral-500 mb-6">
        Descrição do card com texto secundário
      </p>
      <span className="text-brand-purple font-semibold">
        Destaque em roxo
      </span>
    </div>
  );
}

// ============================================
// EXEMPLO 5: Uso Programático (JavaScript)
// ============================================

export function ProgrammaticUsage() {
  // Acessar cores via objeto
  const buttonStyle = {
    backgroundColor: colorRules.cta.primary,     // #6D28D9
    color: colorRules.text.inverse,             // #FFFFFF
  };

  const hoverStyle = {
    backgroundColor: colorRules.cta.hover,       // #5B21B6
  };

  return (
    <button 
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = colorRules.cta.hover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = colorRules.cta.primary;
      }}
    >
      Botão Dinâmico
    </button>
  );
}

// ============================================
// EXEMPLO 6: Backgrounds com Gradiente
// ============================================

export function GradientExample() {
  return (
    <>
      {/* Usando Tailwind */}
      <div className="bg-gradient-to-b from-primary-slate to-neutral-900">
        Gradiente com Tailwind
      </div>

      {/* Usando CSS Variable */}
      <div className="bg-gradient-hero">
        Gradiente com CSS Variable
      </div>

      {/* Usando inline style */}
      <div style={{ background: gradients.hero }}>
        Gradiente inline
      </div>
    </>
  );
}

// ============================================
// EXEMPLO 7: Texto com Cores Corretas
// ============================================

export function TextExample() {
  return (
    <div>
      <h1 className="text-primary-slate">Título Principal</h1>
      <h2 className="text-neutral-800">Subtítulo</h2>
      <p className="text-neutral-500">Parágrafo secundário</p>
      <span className="text-brand-purple">Destaque roxo</span>
      <a href="#" className="text-accent-cyan hover:text-accent-cyan/80">
        Link com accent
      </a>
    </div>
  );
}

// ============================================
// ❌ ANTI-PADRÕES - NÃO FAZER!
// ============================================

export function AntiPatterns() {
  return (
    <>
      {/* ❌ ERRADO: Preto puro */}
      {/* <div className="bg-black text-white"> */}
      
      {/* ✅ CORRETO: Use primary-slate ou neutral-900 */}
      <div className="bg-primary-slate text-white">
        Fundo escuro correto
      </div>

      {/* ❌ ERRADO: Roxo em background grande */}
      {/* <section className="bg-brand-purple min-h-screen"> */}
      
      {/* ✅ CORRETO: Use roxo apenas em CTAs e destaques */}
      <section className="bg-gradient-to-b from-primary-slate to-neutral-900 min-h-screen">
        <button className="bg-primary-purple hover:bg-brand-purple text-white">
          CTA com roxo
        </button>
      </section>

      {/* ❌ ERRADO: CTA sem hover correto */}
      {/* <button className="bg-primary-purple hover:bg-primary-purple/90"> */}
      
      {/* ✅ CORRETO: Hover deve ser brand-purple */}
      <button className="bg-primary-purple hover:bg-brand-purple text-white">
        CTA Correto
      </button>
    </>
  );
}
