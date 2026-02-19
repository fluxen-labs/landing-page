# Design Guidelines - Fluxen Labs Landing Page

**Versão**: 1.0  
**Data**: 19 de Fevereiro de 2026  
**Status**: ⚠️ **CRÍTICO - SEGUIR RIGOROSAMENTE**

---

## 📋 Princípios Fundamentais

Estas diretrizes definem a filosofia de design da landing page Fluxen Labs. Toda implementação, modificação ou adição deve seguir rigorosamente estes princípios.

---

## 1. Visual Limpo 🎨

### Definição
Design minimalista, sem ruído visual, focado no essencial.

### Práticas Obrigatórias
- ✅ **Hierarquia clara**: Títulos → Subtítulos → Corpo → Suporte
- ✅ **Cores limitadas**: Sistema de cores definido (purple, slate, neutral, accents)
- ✅ **Typography consistente**: Inter font, pesos 400/500/600/700
- ✅ **Elementos essenciais**: Sem decorações desnecessárias
- ✅ **Grid system**: Layouts estruturados, não caóticos

### Anti-Patterns (Evitar)
- ❌ Gradientes complexos com múltiplas paradas
- ❌ Sombras exageradas ou múltiplas camadas
- ❌ Bordas decorativas sem propósito
- ❌ Ícones ou ilustrações excessivas
- ❌ Fundos texturizados ou patterns complexos

### Checklist de Implementação
```tsx
// ✅ BOM: Limpo e direto
<div className="bg-white p-8 rounded-lg shadow-sm">
  <h3 className="text-xl font-bold text-neutral-900 mb-2">Título</h3>
  <p className="text-neutral-600">Descrição clara</p>
</div>

// ❌ EVITAR: Poluído
<div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-8 rounded-3xl shadow-2xl border-4 border-gold">
  <h3 className="text-xl font-black text-white drop-shadow-lg animate-bounce">Título</h3>
  <p className="text-yellow-200 italic underline">Descrição</p>
</div>
```

---

## 2. Muito Espaço Negativo (Whitespace) 📐

### Definição
Generosidade de espaçamento vertical e horizontal, permitindo respiração visual.

### Práticas Obrigatórias
- ✅ **Section spacing**: py-20 (mobile) → py-32 (desktop) MÍNIMO
- ✅ **Container padding**: px-6 (mobile) → px-12 (desktop)
- ✅ **Gap entre elementos**: gap-8 (mínimo), gap-12 (ideal)
- ✅ **Margin bottom**: mb-6 a mb-12 entre blocos
- ✅ **Line height**: leading-relaxed ou leading-loose para parágrafos

### Valores de Referência
| Contexto | Mobile | Desktop | Classe |
|----------|--------|---------|--------|
| Section vertical | 80px | 128px | `py-20 md:py-32` |
| Container lateral | 24px | 48px | `px-6 md:px-12` |
| Grid gap | 32px | 48px | `gap-8 md:gap-12` |
| Card padding | 24px | 32px | `p-6 md:p-8` |
| Heading margin | 24px | 32px | `mb-6 md:mb-8` |

### Anti-Patterns (Evitar)
- ❌ Elementos colados uns nos outros
- ❌ py-4 ou py-8 para seções inteiras
- ❌ gap-2 ou gap-4 em grids principais
- ❌ Textos sem line-height adequado
- ❌ Containers edge-to-edge sem padding

### Checklist de Implementação
```tsx
// ✅ BOM: Espaçamento generoso
<section className="bg-white py-20 md:py-32">
  <div className="container-custom">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-8">
        <h2 className="text-4xl font-bold mb-8">Título</h2>
        <p className="text-lg leading-relaxed">Conteúdo</p>
      </div>
    </div>
  </div>
</section>

// ❌ EVITAR: Apertado
<section className="bg-white py-4">
  <div className="px-2">
    <div className="grid grid-cols-2 gap-2">
      <div className="p-2">
        <h2 className="text-4xl font-bold mb-1">Título</h2>
        <p className="text-lg">Conteúdo</p>
      </div>
    </div>
  </div>
</section>
```

---

## 3. Nada de Animações Exageradas 🚫

### Definição
Evitar motion graphics complexos, parallax excessivo, ou animações que distraem.

### Práticas Obrigatórias
- ✅ **Duração máxima**: 300ms para transições (500ms excepcional)
- ✅ **Easing natural**: ease-out, ease-in-out (nunca linear para UI)
- ✅ **Propriedades limitadas**: transform, opacity, colors (evitar width/height)
- ✅ **Respeitar prefers-reduced-motion**: Sempre fornecer fallback
- ✅ **Scroll simples**: Sem parallax ou scroll-jacking

### Animações Permitidas
| Tipo | Duração | Easing | Propriedade |
|------|---------|--------|-------------|
| Button hover | 300ms | ease-out | background-color, transform |
| Link hover | 150ms | ease-out | color |
| Card hover | 300ms | ease-out | box-shadow, transform |
| Fade in (scroll) | 600ms | ease-out | opacity, translateY |
| Icon movement | 200ms | ease-out | translateX, translateY |

### Anti-Patterns (Evitar)
- ❌ Animações infinitas (spin, pulse constante)
- ❌ Bounce, elastic, ou spring effects
- ❌ Durações > 500ms
- ❌ Múltiplas propriedades animando simultaneamente (width + height + opacity + transform)
- ❌ Auto-play videos ou carousels
- ❌ Parallax scrolling
- ❌ Scroll-triggered animations complexas

### Checklist de Implementação
```tsx
// ✅ BOM: Transição sutil
<button className="bg-primary-purple hover:bg-brand-purple transition-colors duration-300">
  Ação
</button>

// ✅ BOM: Microinteração
<svg className="transform group-hover:translate-x-1 transition-transform duration-200">
  {/* Ícone */}
</svg>

// ❌ EVITAR: Exagerado
<div className="animate-bounce animate-pulse animate-spin bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
  Conteúdo
</div>

// ❌ EVITAR: Duração longa
<button className="transition-all duration-1000 ease-linear">
  Ação
</button>
```

### Respeitar prefers-reduced-motion
```tsx
// Adicionar ao globals.css:
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 4. Microinterações Sutis ✨

### Definição
Feedback visual discreto para ações do usuário, melhorando usabilidade sem distração.

### Práticas Obrigatórias
- ✅ **Hover states**: Sempre mudar cor ou sombra em elementos clicáveis
- ✅ **Focus states**: Ring ou outline para navegação por teclado
- ✅ **Active states**: Feedback visual no click/tap
- ✅ **Disabled states**: Opacity reduzida + cursor-not-allowed
- ✅ **Loading states**: Spinner ou skeleton screens

### Exemplos de Microinterações
| Elemento | Interação | Efeito |
|----------|-----------|--------|
| Link texto | Hover | color: neutral-400 → white |
| Botão primário | Hover | bg: primary-purple → brand-purple + shadow |
| Card | Hover | shadow: sm → md + translateY(-2px) |
| Input | Focus | ring-2 ring-primary-purple |
| Ícone em botão | Group hover | translateX(4px) |
| Checkbox | Checked | background + checkmark fade-in |

### Anti-Patterns (Evitar)
- ❌ Sem feedback visual em cliques
- ❌ Hover que muda layout (cause reflow)
- ❌ Transições diferentes para :hover e :not(:hover)
- ❌ Escalar elementos > 1.1x
- ❌ Rotacionar elementos em hover (exceto ícones específicos)

### Checklist de Implementação
```tsx
// ✅ BOM: Hover sutil em link
<a 
  href="#" 
  className="text-neutral-400 hover:text-white transition-colors duration-150"
>
  Link
</a>

// ✅ BOM: Hover em card
<div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
  Card
</div>

// ✅ BOM: Focus visible
<button className="focus:outline-none focus:ring-2 focus:ring-primary-purple focus:ring-offset-2">
  Botão
</button>

// ❌ EVITAR: Hover que quebra layout
<div className="hover:scale-150 hover:rotate-45">
  Card
</div>
```

---

## 5. Responsivo Mobile-First 📱

### Definição
Design e código começam pela versão mobile, expandindo para desktop.

### Práticas Obrigatórias
- ✅ **Classes base**: Sempre mobile (text-4xl, não md:text-4xl)
- ✅ **Breakpoints progressivos**: → md: → lg: → xl:
- ✅ **Touch-friendly**: Mínimo 44x44px para áreas clicáveis
- ✅ **Font sizes escaláveis**: Aumentam do mobile para desktop
- ✅ **Grid adaptativo**: 1 coluna → 2 colunas → 3+ colunas

### Breakpoints Tailwind
| Breakpoint | Largura | Device | Uso |
|------------|---------|--------|-----|
| (base) | 0-767px | Mobile | Classes sem prefixo |
| md: | 768px+ | Tablet | md:grid-cols-2 |
| lg: | 1024px+ | Desktop | lg:text-6xl |
| xl: | 1280px+ | Large Desktop | xl:max-w-7xl |

### Padrões de Escala
```tsx
// ✅ Typography mobile-first
text-4xl md:text-5xl lg:text-6xl
// Mobile: 36px → Tablet: 48px → Desktop: 60px

// ✅ Grid mobile-first
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// Mobile: 1 col → Tablet: 2 cols → Desktop: 3 cols

// ✅ Spacing mobile-first
py-20 md:py-32
// Mobile: 80px → Desktop: 128px

// ✅ Padding mobile-first
px-6 md:px-12
// Mobile: 24px → Desktop: 48px
```

### Anti-Patterns (Evitar)
- ❌ Desktop-first (lg:text-6xl md:text-5xl text-4xl)
- ❌ Hidden no mobile sem alternativa (hidden md:block SEM mobile nav)
- ❌ Font sizes < 16px (causa zoom em iOS)
- ❌ Botões < 44x44px
- ❌ Hover-only interactions (sem equivalente touch)

### Checklist de Implementação
```tsx
// ✅ BOM: Mobile-first
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
  Título
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>

<button className="px-8 py-4 text-lg">
  {/* 44x44px mínimo garantido */}
  CTA
</button>

// ❌ EVITAR: Desktop-first
<h1 className="lg:text-6xl md:text-5xl text-4xl">
  Título
</h1>

<div className="grid grid-cols-3 md:grid-cols-2 grid-cols-1">
  {/* Ordem errada */}
</div>
```

---

## 6. Performance Otimizada ⚡

### Definição
Loading rápido, zero jank, experiência fluida em qualquer device/conexão.

### Práticas Obrigatórias
- ✅ **Imagens otimizadas**: WebP, sizes corretos, lazy load
- ✅ **SVG inline**: Para ícones (evita requisições HTTP)
- ✅ **Tailwind purge**: Remove CSS não utilizado
- ✅ **Code splitting**: Next.js dynamic imports quando necessário
- ✅ **Zero heavy libraries**: Evitar Moment.js, Lodash completo, etc.

### Métricas Alvo
| Métrica | Mobile | Desktop | Ferramenta |
|---------|--------|---------|-----------|
| FCP (First Contentful Paint) | < 1.8s | < 1.0s | Lighthouse |
| LCP (Largest Contentful Paint) | < 2.5s | < 2.0s | Lighthouse |
| TBT (Total Blocking Time) | < 200ms | < 100ms | Lighthouse |
| CLS (Cumulative Layout Shift) | < 0.1 | < 0.05 | Lighthouse |
| Speed Index | < 3.4s | < 2.0s | Lighthouse |

### Otimizações Obrigatórias

#### Imagens
```tsx
// ✅ BOM: Next.js Image otimizado
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Descrição"
  width={1200}
  height={600}
  quality={85}
  loading="lazy"
  placeholder="blur"
/>

// ❌ EVITAR: img tag sem otimização
<img src="/hero.jpg" alt="Descrição" />
```

#### SVG
```tsx
// ✅ BOM: SVG inline
<svg className="w-6 h-6" viewBox="0 0 24 24">
  <path d="..." />
</svg>

// ❌ EVITAR: SVG como imagem
<img src="/icon.svg" alt="Icon" />
```

#### Fonts
```tsx
// ✅ BOM: Google Fonts otimizado (já implementado)
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// ❌ EVITAR: Font loading não otimizado
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700" rel="stylesheet" />
```

#### CSS
```tsx
// ✅ BOM: Tailwind classes (purge automático)
className="bg-white p-8 rounded-lg shadow-sm"

// ❌ EVITAR: Inline styles ou CSS-in-JS pesado
style={{ backgroundColor: 'white', padding: '32px', ... }}
```

### Anti-Patterns (Evitar)
- ❌ Imagens > 500KB
- ❌ Múltiplas font families (stick to 1-2)
- ❌ JavaScript > 200KB (bundle size)
- ❌ Layout shifts (CLS > 0.1)
- ❌ Render blocking resources
- ❌ External scripts não essenciais

---

## 7. Acessibilidade WCAG AA ♿

### Definição
Interface utilizável por todos, incluindo pessoas com deficiências visuais, motoras, cognitivas.

### Práticas Obrigatórias
- ✅ **Contraste mínimo**: 4.5:1 para texto normal, 3:1 para texto grande
- ✅ **Navegação por teclado**: Tab, Enter, Space funcionam
- ✅ **Focus visible**: Ring ou outline em todos focusable elements
- ✅ **Semântica HTML**: header, nav, main, section, footer, h1-h6
- ✅ **Alt text**: Todas imagens têm alt descritivo (ou alt="" se decorativa)
- ✅ **ARIA labels**: Quando necessário (botões com ícone, etc.)

### Contraste de Cores (WCAG AA)
| Contexto | Ratio Mínimo | Exemplo Current |
|----------|-------------|-----------------|
| Texto normal (< 18px) | 4.5:1 | white (#FFF) / primary-slate (#0F172A) = 20.6:1 ✅ |
| Texto grande (≥ 18px bold / 24px) | 3:1 | neutral-400 (#A3A3A3) / neutral-900 (#171717) = 4.6:1 ✅ |
| UI Components | 3:1 | primary-purple (#6D28D9) / white = 8.5:1 ✅ |

**Ferramenta**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Navegação por Teclado
| Tecla | Ação Esperada |
|-------|---------------|
| Tab | Navega para próximo elemento focusable |
| Shift+Tab | Navega para elemento anterior |
| Enter | Ativa link ou botão |
| Space | Ativa botão, toggle checkbox |
| Esc | Fecha modal ou dropdown |
| Arrow keys | Navega em menus/tabs (se aplicável) |

### Checklist de Implementação

#### Estrutura Semântica
```tsx
// ✅ BOM: Hierarquia semântica correta
<header>
  <nav aria-label="Main navigation">
    <a href="#home">Home</a>
  </nav>
</header>

<main>
  <section aria-label="Hero">
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
  </section>
  
  <section aria-label="Features">
    <h2>Recursos</h2>
    <div>
      <h3>Recurso 1</h3>
    </div>
  </section>
</main>

<footer role="contentinfo">
  <!-- ... -->
</footer>

// ❌ EVITAR: Divs genéricos
<div>
  <div>
    <a href="#home">Home</a>
  </div>
</div>

<div>
  <div>
    <span className="text-4xl">Não é um heading</span>
  </div>
</div>
```

#### Links e Botões
```tsx
// ✅ BOM: Link descritivo
<a 
  href="#diagnostico" 
  className="..."
  aria-label="Agendar diagnóstico técnico gratuito"
>
  Agendar Diagnóstico
</a>

// ✅ BOM: Focus visible
<button 
  className="focus:outline-none focus:ring-2 focus:ring-primary-purple focus:ring-offset-2"
>
  Ação
</button>

// ✅ BOM: Link externo
<a 
  href="https://linkedin.com/company/fluxenlabs"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visitar Fluxen Labs no LinkedIn (abre em nova aba)"
>
  LinkedIn
</a>

// ❌ EVITAR: "Clique aqui"
<a href="#">Clique aqui</a>

// ❌ EVITAR: Sem focus visible
<button className="outline-none">Ação</button>
```

#### Imagens
```tsx
// ✅ BOM: Alt descritivo
<Image
  src="/logo.svg"
  alt="Fluxen Labs - Engenharia Operacional"
  width={120}
  height={40}
/>

// ✅ BOM: Decorativa (alt vazio)
<svg aria-hidden="true">
  <path d="..." />
</svg>

// ❌ EVITAR: Sem alt
<img src="/logo.svg" />

// ❌ EVITAR: Alt redundante
<img src="/logo.svg" alt="Imagem" />
```

#### Formulários
```tsx
// ✅ BOM: Label associado
<label htmlFor="email" className="block mb-2">
  Email
</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={errors.email ? "true" : "false"}
  aria-describedby={errors.email ? "email-error" : undefined}
/>
{errors.email && (
  <p id="email-error" className="text-red-500 text-sm mt-1">
    {errors.email}
  </p>
)}

// ❌ EVITAR: Input sem label
<input type="email" placeholder="Email" />
```

#### Estados Visuais
```tsx
// ✅ BOM: Disabled acessível
<button
  disabled
  aria-disabled="true"
  className="opacity-50 cursor-not-allowed"
>
  Ação Indisponível
</button>

// ✅ BOM: Loading state
<button disabled aria-busy="true">
  <span className="sr-only">Carregando...</span>
  <svg className="animate-spin" aria-hidden="true">
    <!-- Spinner -->
  </svg>
</button>
```

### ARIA Landmarks (Obrigatórios)
```tsx
<header role="banner">
  <nav role="navigation" aria-label="Primary">
    <!-- ... -->
  </nav>
</header>

<main role="main">
  <section aria-label="Hero section">
    <!-- ... -->
  </section>
</main>

<footer role="contentinfo">
  <!-- ... -->
</footer>
```

### Screen Reader Only Text
```css
/* Adicionar ao globals.css */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

```tsx
// Uso:
<button>
  <svg aria-hidden="true">
    <path d="..." />
  </svg>
  <span className="sr-only">Fechar menu</span>
</button>
```

---

## 📊 Checklist de Compliance

Use este checklist para validar cada nova seção/componente:

### Visual ✓
- [ ] Design limpo sem elementos desnecessários
- [ ] Cores do design system (sem cores custom)
- [ ] Typography consistente (Inter, pesos definidos)
- [ ] Sem gradientes ou efeitos excessivos

### Espaçamento ✓
- [ ] Section spacing: py-20 md:py-32 (mínimo)
- [ ] Container padding: px-6 md:px-12
- [ ] Grid gaps: gap-8 ou gap-12
- [ ] Margin/padding generoso entre elementos

### Animações ✓
- [ ] Transições ≤ 300ms (max 500ms)
- [ ] Apenas propriedades performantes (transform, opacity, colors)
- [ ] Easing natural (ease-out, ease-in-out)
- [ ] Sem animações infinitas ou exageradas
- [ ] prefers-reduced-motion implementado

### Microinterações ✓
- [ ] Hover states em todos clicáveis
- [ ] Focus states visíveis (ring)
- [ ] Transições suaves (150-300ms)
- [ ] Feedback visual claro
- [ ] Sem mudanças de layout no hover

### Responsividade ✓
- [ ] Mobile-first (classes base = mobile)
- [ ] Breakpoints progressivos (md: lg: xl:)
- [ ] Touch-friendly (≥44x44px)
- [ ] Grid adaptativo (1 → 2 → 3 colunas)
- [ ] Typography escalável

### Performance ✓
- [ ] Imagens otimizadas (WebP, lazy load)
- [ ] SVG inline para ícones
- [ ] Sem bibliotecas pesadas
- [ ] Tailwind purge ativo
- [ ] FCP < 1.8s, LCP < 2.5s

### Acessibilidade ✓
- [ ] Contraste ≥ 4.5:1 (texto normal)
- [ ] Navegação por teclado funcional
- [ ] Focus visible (ring-2)
- [ ] Semântica HTML correta
- [ ] Alt text em imagens
- [ ] ARIA labels quando necessário
- [ ] Headings hierárquicos (h1 → h2 → h3)

---

## 🛠️ Ferramentas de Validação

### Acessibilidade
- **[WAVE](https://wave.webaim.org/)**: Web accessibility evaluation
- **[axe DevTools](https://www.deque.com/axe/devtools/)**: Chrome extension
- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)**: Audit completo
- **[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)**: Contraste de cores

### Performance
- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)**: Performance metrics
- **[WebPageTest](https://www.webpagetest.org/)**: Análise detalhada
- **[GTmetrix](https://gtmetrix.com/)**: Performance scoring
- **[Next.js Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)**: Bundle size

### Responsividade
- **Chrome DevTools**: Device emulation
- **[Responsively App](https://responsively.app/)**: Multi-device preview
- **[BrowserStack](https://www.browserstack.com/)**: Real device testing

### Visual
- **[StyleLint](https://stylelint.io/)**: CSS linting (opcional)
- **Designer eye**: Revisão manual de espaçamento e alinhamento

---

## 🚨 Violações Críticas (NUNCA FAZER)

### ❌ Animações Exageradas
```tsx
// PROIBIDO
<div className="animate-bounce animate-spin animate-pulse">
  Conteúdo
</div>
```

### ❌ Espaçamento Insuficiente
```tsx
// PROIBIDO
<section className="py-4">
  <div className="gap-2">
    <!-- Muito apertado -->
  </div>
</section>
```

### ❌ Desktop-First
```tsx
// PROIBIDO
<h1 className="lg:text-6xl md:text-5xl text-4xl">
  Ordem errada
</h1>
```

### ❌ Contraste Insuficiente
```tsx
// PROIBIDO
<p className="text-neutral-300">
  // Texto cinza claro sobre fundo branco (contraste < 3:1)
</p>
```

### ❌ Sem Semântica
```tsx
// PROIBIDO
<div onClick={handleClick}>
  Não é um botão
</div>

<span className="text-4xl font-bold">
  Não é um heading
</span>
```

---

## ✅ Exemplos de Referência

### Seção Perfeita
```tsx
<section 
  id="exemplo"
  className="bg-white py-20 md:py-32"
  aria-label="Exemplo de seção"
>
  <div className="container-custom">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
        Título da Seção
      </h2>
      <p className="text-xl text-neutral-600 leading-relaxed">
        Descrição clara e concisa da seção.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card exemplo */}
      <article className="bg-neutral-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-bold text-neutral-900 mb-4">
          Card Título
        </h3>
        <p className="text-neutral-600 leading-relaxed">
          Conteúdo do card.
        </p>
        <a 
          href="#"
          className="inline-flex items-center gap-2 text-primary-purple hover:text-brand-purple transition-colors duration-200 mt-4 focus:outline-none focus:ring-2 focus:ring-primary-purple focus:ring-offset-2 rounded"
        >
          <span>Saiba mais</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true">
            <path d="..." />
          </svg>
        </a>
      </article>
    </div>
  </div>
</section>
```

### Botão Perfeito
```tsx
<button
  type="button"
  className="inline-flex items-center justify-center gap-3 bg-primary-purple hover:bg-brand-purple text-white font-bold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-purple focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  aria-label="Agendar diagnóstico técnico gratuito"
  disabled={loading}
>
  {loading ? (
    <>
      <svg className="animate-spin w-5 h-5" aria-hidden="true">
        <!-- Spinner -->
      </svg>
      <span>Carregando...</span>
    </>
  ) : (
    <>
      <span>Agendar Diagnóstico</span>
      <svg className="w-5 h-5" aria-hidden="true">
        <!-- Arrow -->
      </svg>
    </>
  )}
</button>
```

---

## 📚 Recursos Adicionais

### Documentação
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Design Systems de Referência
- [Stripe Design](https://stripe.com/)
- [Vercel Design](https://vercel.com/design)
- [Linear App](https://linear.app/)
- [GitHub Primer](https://primer.style/)

---

**Última revisão**: 19/02/2026  
**Próxima revisão**: A cada nova feature  
**Responsável**: Todo desenvolvedor do projeto

**IMPORTANTE**: Este documento deve ser consultado ANTES de implementar qualquer nova funcionalidade.
