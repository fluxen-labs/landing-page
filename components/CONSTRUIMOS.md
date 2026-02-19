# Seção: O Que Construímos

## 📋 Visão Geral

Esta seção apresenta os **4 pilares de arquitetura operacional** que a Fluxen Labs constrói para seus clientes. É um posicionamento técnico profundo que diferencia a empresa de automações superficiais, enfatizando **engenharia de infraestrutura** ao invés de apenas ferramentas.

**Localização**: Entre "Diagnóstico da Realidade" e "Diferenciais"  
**Background**: `bg-neutral-100` (alternando com seções brancas/escuras)  
**ID da Seção**: `#construimos`

---

## 🎨 Design Specifications

### Paleta de Cores

```tsx
// Background da Seção
bg-neutral-100          // Fundo neutro claro (#F5F5F5)

// Cards
bg-white                // Fundo dos cards
border-neutral-200      // Border padrão
hover:border-primary-purple  // Border no hover (#6D28D9)

// Ícones
text-primary-purple     // Cor dos ícones (#6D28D9)

// Tipografia
text-primary-slate      // Títulos (#0F172A)
text-neutral-600        // Descrições
text-neutral-500        // Subtítulo da seção

// Linha Técnica
bg-accent-cyan          // Linha decorativa (#06B6D4)
```

### Tipografia

```tsx
// Título da Seção
className="text-4xl md:text-5xl font-bold text-primary-slate mb-6"

// Subtítulo da Seção
className="text-xl text-neutral-500 max-w-2xl mx-auto"

// Título do Card
className="text-2xl font-bold text-primary-slate mb-4"

// Descrição do Card
className="text-neutral-600 leading-relaxed mb-6"
```

### Spacing

```tsx
// Seção
className="bg-neutral-100 section-spacing"
// section-spacing = py-20 md:py-32 (80px → 120px)

// Container
className="container-custom"
// max-w-[1200px] mx-auto px-6 md:px-12

// Cabeçalho
className="text-center mb-16"

// Grid
className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"

// Card Padding
className="p-8"
```

---

## 📦 Estrutura de Conteúdo

### Cabeçalho da Seção

```tsx
<div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-primary-slate mb-6">
    Arquitetura Operacional Estruturada
  </h2>
  <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
    Sem automação superficial. Construímos infraestrutura operacional.
  </p>
</div>
```

**Copy Strategy**:
- **Título**: "Arquitetura Operacional Estruturada" → enfatiza engenharia séria
- **Subtítulo**: "Sem automação superficial. Construímos infraestrutura operacional." → posicionamento técnico

---

### Grid 2x2 - Blocos Estruturais

```tsx
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {/* 4 cards */}
</div>
```

**Layout**:
- Mobile: 1 coluna
- Desktop (md:): 2 colunas (2x2)
- Gap: 32px entre cards
- Container máximo: 1000px (max-w-5xl)

---

### Anatomia de um Card

```tsx
<div className="group bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300 hover:shadow-lg">
  {/* Ícone Técnico */}
  <div className="text-primary-purple mb-6">
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* SVG path */}
    </svg>
  </div>
  
  {/* Título */}
  <h3 className="text-2xl font-bold text-primary-slate mb-4">
    Título do Bloco
  </h3>
  
  {/* Descrição Profunda */}
  <p className="text-neutral-600 leading-relaxed mb-6">
    Linha 1 de descrição<br />
    Linha 2 de descrição
  </p>
  
  {/* Linha Técnica Decorativa */}
  <div className="h-1 w-16 bg-accent-cyan rounded-full" />
</div>
```

**Elementos**:
1. **Ícone**: 40x40px, cor roxa, espaçamento 24px abaixo
2. **Título**: text-2xl, bold, espaçamento 16px abaixo
3. **Descrição**: 2 linhas técnicas separadas por `<br />`
4. **Linha cyan**: 4px altura, 64px largura, cantos arredondados

**Estados**:
- **Normal**: border neutral-200, sem shadow
- **Hover**: border primary-purple, shadow-lg

---

## 🧩 Conteúdo dos 4 Blocos

### 1️⃣ Arquitetura de Fluxo Comercial

```tsx
{
  icon: "⚡" (lightning bolt - M13 10V3L4 14h7v7l9-11h-7z),
  title: "Arquitetura de Fluxo Comercial",
  description: [
    "Integração profunda entre WhatsApp e ERP.",
    "Criação de camada intermediária validada."
  ]
}
```

**Ícone SVG**: Lightning bolt (raio)  
**Conceito**: Velocidade, conexão, fluxo de energia entre sistemas

---

### 2️⃣ Estruturação de Dados Operacionais

```tsx
{
  icon: "🗄️" (database stack - M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7...),
  title: "Estruturação de Dados Operacionais",
  description: [
    "Transformamos conversas em dados estruturados.",
    "Modelagem orientada a evento."
  ]
}
```

**Ícone SVG**: Database stack (camadas de dados)  
**Conceito**: Estruturação, organização, modelagem de dados

---

### 3️⃣ Automação de Backoffice

```tsx
{
  icon: "⚙️" (settings cog - M10.325 4.317c.426-1.756...),
  title: "Automação de Backoffice",
  description: [
    "Eliminamos pontos de fricção manual.",
    "Redução de intervenção humana em tarefas repetitivas."
  ]
}
```

**Ícone SVG**: Settings cog (engrenagem)  
**Conceito**: Automação, processos mecânicos, redução de esforço manual

---

### 4️⃣ Camada Inteligente com IA

```tsx
{
  icon: "💡" (lightbulb - M9.663 17h4.673M12 3v1m6.364...),
  title: "Camada Inteligente com IA",
  description: [
    "Agentes integrados ao fluxo real da empresa.",
    "IA operando dentro da arquitetura — não isolada."
  ]
}
```

**Ícone SVG**: Lightbulb (lâmpada inteligente)  
**Conceito**: Inteligência, insight, IA contextual (não isolada)

---

## 🎯 Código Completo da Seção

```tsx
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
```

---

## 🔧 Customização

### Trocar Ordem dos Blocos

Basta reordenar os 4 blocos dentro do grid:

```tsx
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {/* Primeiro card que aparece */}
  <div>...</div>
  
  {/* Segundo card */}
  <div>...</div>
  
  {/* Terceiro card */}
  <div>...</div>
  
  {/* Quarto card */}
  <div>...</div>
</div>
```

---

### Adicionar Mais Blocos (Grid 3 colunas)

Para transformar em grid 3x2 (6 blocos):

```tsx
// Mudar grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {/* 6 cards aqui */}
</div>
```

---

### Trocar Cor da Linha Técnica

A linha decorativa pode usar outras cores de accent:

```tsx
// Cyan (atual)
<div className="h-1 w-16 bg-accent-cyan rounded-full" />

// Green
<div className="h-1 w-16 bg-accent-green rounded-full" />

// Purple
<div className="h-1 w-16 bg-primary-purple rounded-full" />
```

---

### Adicionar Números aos Cards

```tsx
<div className="flex items-start gap-4 mb-6">
  {/* Número */}
  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-purple text-white flex items-center justify-center font-bold text-sm">
    1
  </div>
  
  {/* Ícone */}
  <div className="text-primary-purple">
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* path */}
    </svg>
  </div>
</div>
```

---

## 📱 Comportamento Responsivo

### Mobile (< 768px)

```txt
┌─────────────────────┐
│   Título Seção      │
│   Subtítulo         │
│                     │
│ ┌─────────────────┐ │
│ │  Card 1         │ │
│ │  Ícone + Texto  │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │  Card 2         │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │  Card 3         │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │  Card 4         │ │
│ └─────────────────┘ │
└─────────────────────┘
```

**Características**:
- Layout em 1 coluna (stacked)
- Cards full-width
- Padding reduzido (p-6 ao invés de p-8)
- Ícones mantêm tamanho (w-10 h-10)

---

### Tablet (768px - 1023px)

```txt
┌───────────────────────────────────┐
│        Título Seção               │
│        Subtítulo                  │
│                                   │
│  ┌──────────┐   ┌──────────┐     │
│  │  Card 1  │   │  Card 2  │     │
│  └──────────┘   └──────────┘     │
│                                   │
│  ┌──────────┐   ┌──────────┐     │
│  │  Card 3  │   │  Card 4  │     │
│  └──────────┘   └──────────┘     │
└───────────────────────────────────┘
```

**Características**:
- Grid 2x2 (md:grid-cols-2)
- Espaçamento entre cards: 32px (gap-8)
- Hover effects funcionam em touch

---

### Desktop (≥ 1024px)

```txt
┌──────────────────────────────────────────────┐
│              Título Seção (text-5xl)         │
│              Subtítulo (text-xl)             │
│                                              │
│    ┌─────────────┐     ┌─────────────┐      │
│    │   Card 1    │     │   Card 2    │      │
│    │   Hover✨   │     │   Hover✨   │      │
│    └─────────────┘     └─────────────┘      │
│                                              │
│    ┌─────────────┐     ┌─────────────┐      │
│    │   Card 3    │     │   Card 4    │      │
│    └─────────────┘     └─────────────┘      │
└──────────────────────────────────────────────┘
```

**Características**:
- Grid 2x2 mantido
- Container limitado a max-w-5xl (1000px)
- Hover effects visuais (border purple + shadow)
- Tipografia maior (text-5xl para título)

---

## ♿ Acessibilidade

### Semântica HTML

```tsx
<section id="construimos" className="...">
  {/* Cabeçalho com hierarquia correta */}
  <h2>Arquitetura Operacional Estruturada</h2>
  
  {/* Cards com h3 */}
  <h3>Arquitetura de Fluxo Comercial</h3>
</section>
```

**Hierarquia**:
- `<section>` com ID para navegação
- `<h2>` para título da seção
- `<h3>` para título de cada card
- `<p>` para descrições

---

### Contraste de Cores

| Elemento | Cor Texto | Cor Background | Ratio | Status |
|----------|-----------|----------------|-------|--------|
| Título Seção | primary-slate (`#0F172A`) | neutral-100 (`#F5F5F5`) | 16.5:1 | ✅ AAA |
| Título Card | primary-slate (`#0F172A`) | white (`#FFFFFF`) | 17.8:1 | ✅ AAA |
| Descrição | neutral-600 (`#525252`) | white (`#FFFFFF`) | 7.2:1 | ✅ AA |
| Ícone | primary-purple (`#6D28D9`) | white (`#FFFFFF`) | 6.1:1 | ✅ AA |

---

### Navegação por Teclado

```tsx
// O hover já funciona, mas para garantir foco:
<div className="... hover:border-primary-purple focus-within:border-primary-purple">
  {/* Se adicionar links ou botões dentro */}
</div>
```

---

### ARIA Labels (se necessário)

```tsx
<section 
  id="construimos" 
  aria-labelledby="construimos-title"
  className="..."
>
  <h2 id="construimos-title" className="...">
    Arquitetura Operacional Estruturada
  </h2>
</section>
```

---

## 🎬 Animações

### Hover nos Cards

```tsx
className="... hover:border-primary-purple transition-all duration-300 hover:shadow-lg"
```

**Animação**:
- Duração: 300ms
- Propriedades animadas: border-color, box-shadow
- Easing: padrão (ease-in-out)

**Efeitos**:
1. Border neutral-200 → primary-purple
2. Shadow none → shadow-lg
3. Transição suave em todas as propriedades

---

### Adicionar Animação de Entrada (Opcional)

Com Framer Motion:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="group bg-white p-8 rounded-lg..."
>
  {/* conteúdo do card */}
</motion.div>
```

---

### Stagger Effect nos Cards

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// No JSX
<motion.div 
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 gap-8..."
>
  {[...cards].map((card, i) => (
    <motion.div key={i} variants={item} className="group bg-white...">
      {/* card content */}
    </motion.div>
  ))}
</motion.div>
```

---

## 📊 Métricas e Variantes

### Métricas da Seção

```tsx
{
  cards: 4,
  gridLayout: "2x2",
  maxWidth: "1000px (max-w-5xl)",
  gap: "32px (gap-8)",
  cardPadding: "32px (p-8)",
  iconSize: "40x40px (w-10 h-10)",
  lineHeight: "4px (h-1)",
  lineWidth: "64px (w-16)"
}
```

---

### Variante: Cards Maiores (3 blocos)

Se precisar destacar apenas 3 blocos principais:

```tsx
<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {/* 3 cards aqui */}
</div>
```

**Aplicação**: Quando houver apenas 3 pilares principais.

---

### Variante: Com CTA no Final

Adicionar botão após o grid:

```tsx
{/* Grid de cards */}
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
  {/* 4 cards */}
</div>

{/* CTA */}
<div className="text-center">
  <a
    href="#diagnostico"
    className="inline-flex items-center justify-center gap-2 bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
  >
    <span>Ver como aplicamos isso</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </a>
</div>
```

---

## 🧪 Testing Checklist

- [ ] Cards renderizam corretamente em mobile (1 coluna)
- [ ] Grid 2x2 funciona em desktop
- [ ] Hover aplica border purple e shadow
- [ ] Ícones SVG têm tamanho correto (40x40px)
- [ ] Linha cyan aparece em todos os cards
- [ ] Descrições com `<br />` quebram linha corretamente
- [ ] Background neutral-100 contrasta com seções adjacentes
- [ ] Hierarquia de headings está correta (h2 → h3)
- [ ] Espaçamento section-spacing (80px/120px) aplicado
- [ ] Container centralizado e limitado a max-w-5xl
- [ ] Hover funciona em todos os 4 cards
- [ ] Transições são suaves (300ms)

---

## 🔗 Relação com Outras Seções

### Fluxo da Landing Page

```
Hero (Dark gradient)
  ↓
Diagnóstico (White - problemas)
  ↓
✨ O Que Construímos (Neutral-100 - soluções) ✨
  ↓
Diferenciais (Dark - credibilidade)
  ↓
Casos (Neutral-100 - prova social)
  ↓
Contato (Dark - conversão)
```

**Posicionamento Estratégico**:
- Vem logo após mostrar **problemas** (Diagnóstico)
- Apresenta **soluções estruturais** (O Que Construímos)
- Antes de **credibilidade** (Diferenciais)

---

### Integração com CTAs

O Hero já tem CTA "Ver como funciona" que pode apontar para esta seção:

```tsx
// No Hero
<a href="#construimos" className="...">
  Ver como funciona
</a>
```

---

## 💡 Dicas de UX

### 1. Ordem Visual dos Ícones

Os ícones foram escolhidos para contar uma história sequencial:
1. ⚡ **Lightning** → Conexão/Integração
2. 🗄️ **Database** → Estruturação de Dados
3. ⚙️ **Cog** → Automação de Processos
4. 💡 **Lightbulb** → Inteligência Aplicada

**Narrativa**: Conectamos → Estruturamos → Automatizamos → Inteligentizamos

---

### 2. Escaneabilidade

Cards são facilmente escaneáveis porque:
- Ícones grandes e coloridos (roxo) chamam atenção
- Títulos em negrito separam visualmente
- Descrições curtas (2 linhas cada)
- Linha cyan reforça fim do card

---

### 3. Hierarquia Visual

```
[Maior impacto]
1. Ícone roxo (w-10 h-10)
2. Título (text-2xl font-bold)
3. Descrição (text-neutral-600)
4. Linha cyan (accent decorativo)
[Menor impacto]
```

---

## 🚀 Performance

### Otimizações

```tsx
// SVGs inline (sem request HTTP extra)
<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  {/* paths */}
</svg>

// Transições CSS puras (sem JS)
className="transition-all duration-300"

// Grid CSS nativo (performático)
className="grid md:grid-cols-2 gap-8"
```

**Benefícios**:
- Zero JavaScript para animações
- SVGs embutidos = menos requests
- Grid CSS = layout eficiente

---

### Lazy Loading (se necessário)

Para ícones como imagens:

```tsx
import Image from 'next/image';

<Image
  src="/icons/lightning.svg"
  width={40}
  height={40}
  alt=""
  loading="lazy"
/>
```

---

## 📝 Notas de Manutenção

### Atualizar Conteúdo de um Card

1. Localize o card no array/JSX
2. Edite `title` ou `description`
3. Mantenha estrutura de `<br />` para quebras de linha

```tsx
<p className="text-neutral-600 leading-relaxed mb-6">
  Nova linha 1 de descrição<br />
  Nova linha 2 de descrição
</p>
```

---

### Adicionar Novo Card

```tsx
{/* Novo Bloco 5 */}
<div className="group bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300 hover:shadow-lg">
  <div className="text-primary-purple mb-6">
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Novo ícone SVG */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
    </svg>
  </div>
  <h3 className="text-2xl font-bold text-primary-slate mb-4">
    Novo Título
  </h3>
  <p className="text-neutral-600 leading-relaxed mb-6">
    Descrição linha 1<br />
    Descrição linha 2
  </p>
  <div className="h-1 w-16 bg-accent-cyan rounded-full" />
</div>
```

**Lembre-se**: Se adicionar 5º ou 6º card, considere mudar grid para 3 colunas:

```tsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
```

---

## 🎨 Biblioteca de Ícones SVG

### Ícones Alternativos (Heroicons)

**Conexão/Integração**:
```tsx
// Puzzle
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />

// Link
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
```

**Dados/Estruturação**:
```tsx
// Server
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />

// Collection
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
```

**Automação/Processos**:
```tsx
// Cog (atual)
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />

// Adjustments
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
```

**IA/Inteligência**:
```tsx
// Lightbulb (atual)
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />

// Brain/Circuit
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
```

---

## 📚 Referências

- [Heroicons](https://heroicons.com/) - Biblioteca de ícones SVG
- [Tailwind Grid](https://tailwindcss.com/docs/grid-template-columns) - Grid CSS
- [Framer Motion](https://www.framer.com/motion/) - Animações (opcional)

---

**Última atualização**: 18 de fevereiro de 2026  
**Autor**: Fluxen Labs Design System  
**Versão**: 1.0.0
