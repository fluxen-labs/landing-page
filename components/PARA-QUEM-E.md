# Seção: Para Quem É (Prova / Autoridade)

## 📋 Visão Geral

Esta seção estabelece **qualificação de público** e **credibilidade técnica**, comunicando claramente para qual perfil de empresa a solução é indicada. Funciona como filtro estratégico e reforço de autoridade.

**Localização**: Entre "Metodologia" e "Diferenciais"  
**Background**: `bg-neutral-100` (alternância com seções adjacentes)  
**ID da Seção**: `#para-quem-e`

---

## 🎨 Design Specifications

### Paleta de Cores

```tsx
// Background da Seção
bg-neutral-100          // Fundo neutro claro (#F5F5F5)

// Cards de Perfil
bg-white                // Fundo dos cards
border-neutral-200      // Border padrão
hover:border-primary-purple  // Border no hover (#6D28D9)

// Ícones
text-primary-purple     // Ícones dos perfis (#6D28D9)
bg-primary-purple/10    // Fundo círculo credibilidade (roxo 10%)

// Tipografia
text-primary-slate      // Títulos (#0F172A)
text-neutral-600        // Descrições

// Mini Seção Credibilidade
text-primary-purple     // Ícones centralizados
text-primary-slate      // Títulos
text-neutral-600        // Descrições
```

### Tipografia

```tsx
// Título da Seção
className="text-4xl md:text-5xl font-bold text-primary-slate"

// Título do Card de Perfil
className="text-xl font-bold text-primary-slate mb-2"

// Descrição do Card de Perfil
className="text-neutral-600 text-sm leading-relaxed"

// Título Item de Credibilidade
className="text-lg font-bold text-primary-slate mb-2"

// Descrição Item de Credibilidade
className="text-neutral-600 text-sm"
```

### Spacing

```tsx
// Seção
className="bg-neutral-100 section-spacing"
// section-spacing = py-20 md:py-32 (80px → 120px)

// Container
className="container-custom"
// max-w-[1200px] mx-auto px-6 md:px-12

// Título da Seção
className="text-center mb-16"
// 64px abaixo do título

// Grid de Perfis
className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto"
// 2 colunas (tablet), 4 colunas (desktop), gap 24px, 80px abaixo

// Mini Seção Credibilidade
className="grid md:grid-cols-3 gap-8"
// 3 colunas, gap 32px
```

---

## 📦 Estrutura de Conteúdo

### Cabeçalho da Seção

```tsx
<div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-primary-slate">
    Para quem é
  </h2>
</div>
```

**Copy Strategy**:
- **Título direto**: "Para quem é" → qualificação imediata
- **Sem subtítulo**: Minimalismo, deixa os cards falarem

---

### Grid de Perfis (4 Cards)

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
  {/* 4 cards de perfis */}
</div>
```

**Layout**:
- Mobile: 1 coluna (stacked)
- Tablet (md:): 2 colunas (2x2)
- Desktop (lg:): 4 colunas (1x4)
- Gap: 24px entre cards
- Container máximo: 1152px (max-w-6xl)
- Margem inferior: 80px antes da mini seção

---

### Anatomia de um Card de Perfil

```tsx
<div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300">
  {/* Ícone */}
  <div className="text-primary-purple mb-4">
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* SVG path */}
    </svg>
  </div>
  
  {/* Título */}
  <h3 className="text-xl font-bold text-primary-slate mb-2">
    Título do Perfil
  </h3>
  
  {/* Descrição */}
  <p className="text-neutral-600 text-sm leading-relaxed">
    Descrição curta do perfil
  </p>
</div>
```

**Elementos**:
1. **Ícone**: 40x40px, cor roxa, espaçamento 16px abaixo
2. **Título**: text-xl, bold, espaçamento 8px abaixo
3. **Descrição**: text-sm, neutral-600, 1 linha curta

**Estados**:
- **Normal**: border neutral-200, sem shadow
- **Hover**: border primary-purple, transição suave

---

## 🧩 Conteúdo dos 4 Perfis

### 1️⃣ Empresas B2B

```tsx
{
  icon: "🏢" (building - M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16...),
  title: "Empresas B2B",
  description: "Operação comercial estruturada entre empresas"
}
```

**Ícone SVG**: Building (prédio)  
**Foco**: Qualificação B2B (não B2C)

---

### 2️⃣ Operações com volume recorrente

```tsx
{
  icon: "🔄" (refresh - M4 4v5h.582m15.356 2A8.001...),
  title: "Operações com volume recorrente",
  description: "Processos que se repetem com frequência previsível"
}
```

**Ícone SVG**: Refresh/cycle (ciclo)  
**Foco**: Volume e recorrência (não one-off)

---

### 3️⃣ ERP já implantado

```tsx
{
  icon: "💾" (server - M5 12h14M5 12a2 2 0 01-2-2V6...),
  title: "ERP já implantado",
  description: "Sistema de gestão estabelecido e em uso"
}
```

**Ícone SVG**: Server (servidor)  
**Foco**: ERP existente (não implementação do zero)

---

### 4️⃣ Time comercial via WhatsApp

```tsx
{
  icon: "💬" (chat - M8 12h.01M12 12h.01M16 12h.01M21...),
  title: "Time comercial via WhatsApp",
  description: "Comunicação com clientes concentrada no WhatsApp"
}
```

**Ícone SVG**: Chat bubbles (balões de conversa)  
**Foco**: WhatsApp como canal principal

---

## 🔖 Mini Seção de Credibilidade

### Container

```tsx
<div className="max-w-4xl mx-auto">
  <div className="grid md:grid-cols-3 gap-8">
    {/* 3 itens de credibilidade */}
  </div>
</div>
```

**Layout**:
- Mobile: 1 coluna
- Desktop (md:): 3 colunas
- Gap: 32px
- Container máximo: 896px (max-w-4xl)

---

### Anatomia de um Item de Credibilidade

```tsx
<div className="text-center">
  {/* Ícone Circular */}
  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-purple/10 mb-4">
    <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* SVG path */}
    </svg>
  </div>
  
  {/* Título */}
  <h3 className="text-lg font-bold text-primary-slate mb-2">
    Título do Item
  </h3>
  
  {/* Descrição */}
  <p className="text-neutral-600 text-sm">
    Descrição curta
  </p>
</div>
```

**Elementos**:
1. **Círculo**: 64x64px, fundo roxo 10%, ícone 32x32px roxo
2. **Título**: text-lg, bold, espaçamento 8px abaixo
3. **Descrição**: text-sm, neutral-600, 1 frase curta

**Alinhamento**: Centralizado (text-center)

---

### Conteúdo dos 3 Itens de Credibilidade

#### Item 1: Arquitetura sob medida

```tsx
{
  icon: "🧩" (puzzle - M11 4a2 2 0 114 0v1a1 1 0 001 1h3...),
  title: "Arquitetura sob medida",
  description: "Solução desenhada para seu contexto específico"
}
```

**Ícone SVG**: Puzzle piece (peça de quebra-cabeça)  
**Mensagem**: Customização técnica

---

#### Item 2: Integração com ERP existente

```tsx
{
  icon: "🔗" (link - M13.828 10.172a4 4 0 00-5.656 0l-4...),
  title: "Integração com ERP existente",
  description: "Conectamos com seu sistema atual sem substituí-lo"
}
```

**Ícone SVG**: Link (corrente)  
**Mensagem**: Não substituição, integração

---

#### Item 3: Sem trocar seu stack

```tsx
{
  icon: "🛡️" (shield-check - M9 12l2 2 4-4m5.618-4.016A11.955...),
  title: "Sem trocar seu stack",
  description: "Mantém suas ferramentas e processos funcionando"
}
```

**Ícone SVG**: Shield with check (escudo com check)  
**Mensagem**: Segurança, continuidade, sem disrupção

---

## 🎯 Código Completo da Seção

```tsx
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
```

---

## 🔧 Customização

### Adicionar 5º Perfil

Para adicionar um 5º card de perfil:

```tsx
{/* Perfil 5: Novo Perfil */}
<div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300">
  <div className="text-primary-purple mb-4">
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Novo ícone */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
    </svg>
  </div>
  <h3 className="text-xl font-bold text-primary-slate mb-2">
    Novo Perfil
  </h3>
  <p className="text-neutral-600 text-sm leading-relaxed">
    Descrição do novo perfil
  </p>
</div>
```

**Nota**: Com 5 cards, o grid ficará 2x2 + 1 no centro (tablet) ou 1x5 (desktop). Considere ajustar para `lg:grid-cols-5` se quiser linha única.

---

### Trocar Layout do Grid de Perfis

Para 2x2 em todas as telas (sem 1x4):

```tsx
<div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
  {/* 4 cards */}
</div>
```

---

### Adicionar 4º Item de Credibilidade

Para ter 4 itens na mini seção:

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* 4 itens */}
</div>
```

---

### Remover Hover dos Cards de Perfil

Para cards estáticos (sem hover):

```tsx
<div className="bg-white p-8 rounded-lg border-2 border-neutral-200">
  {/* conteúdo */}
</div>
```

(Remova `hover:border-primary-purple transition-all duration-300`)

---

## 📱 Comportamento Responsivo

### Mobile (< 768px)

```txt
┌─────────────────────┐
│   Para quem é       │
│                     │
│ ┌─────────────────┐ │
│ │ 🏢 Empresas B2B │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ 🔄 Operações... │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ 💾 ERP...       │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ 💬 WhatsApp...  │ │
│ └─────────────────┘ │
│                     │
│      🧩             │
│  Arquitetura...     │
│                     │
│      🔗             │
│  Integração...      │
│                     │
│      🛡️             │
│  Sem trocar...      │
└─────────────────────┘
```

**Características**:
- Cards de perfil: 1 coluna (stacked)
- Mini credibilidade: 1 coluna (stacked)
- Full-width em cada card

---

### Tablet (768px - 1023px)

```txt
┌───────────────────────────────────┐
│        Para quem é                │
│                                   │
│  ┌─────────┐   ┌─────────┐       │
│  │Empresas │   │Operações│       │
│  │  B2B    │   │recorr...│       │
│  └─────────┘   └─────────┘       │
│                                   │
│  ┌─────────┐   ┌─────────┐       │
│  │   ERP   │   │WhatsApp │       │
│  │implant. │   │comercial│       │
│  └─────────┘   └─────────┘       │
│                                   │
│   🧩          🔗          🛡️      │
│ Arquit.    Integr.    Sem trocar  │
└───────────────────────────────────┘
```

**Características**:
- Perfis: Grid 2x2 (md:grid-cols-2)
- Mini credibilidade: 3 colunas (md:grid-cols-3)

---

### Desktop (≥ 1024px)

```txt
┌──────────────────────────────────────────────┐
│              Para quem é                     │
│                                              │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐             │
│  │ 🏢 │  │ 🔄 │  │ 💾 │  │ 💬 │             │
│  │B2B │  │Oper│  │ERP │  │What│             │
│  └────┘  └────┘  └────┘  └────┘             │
│                                              │
│                                              │
│      🧩            🔗            🛡️          │
│  Arquitetura   Integração   Sem trocar      │
└──────────────────────────────────────────────┘
```

**Características**:
- Perfis: 4 colunas (lg:grid-cols-4)
- Mini credibilidade: 3 colunas
- Layout horizontal compacto

---

## ♿ Acessibilidade

### Semântica HTML

```tsx
<section id="para-quem-e" className="...">
  <h2>Para quem é</h2>
  
  {/* Grid de perfis */}
  <div>
    <h3>Empresas B2B</h3>
    <p>Descrição...</p>
  </div>
  
  {/* Mini credibilidade */}
  <div>
    <h3>Arquitetura sob medida</h3>
    <p>Descrição...</p>
  </div>
</section>
```

**Hierarquia**:
- `<section>` com ID
- `<h2>` para título da seção
- `<h3>` para cada perfil/item
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

## 🎬 Animações

### Hover nos Cards de Perfil

```tsx
className="... hover:border-primary-purple transition-all duration-300"
```

**Efeito**: Border neutral-200 → primary-purple em 300ms

---

### Animação de Entrada (Opcional)

Com Framer Motion:

```tsx
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Grid de perfis
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6..."
>
  {profiles.map((profile, i) => (
    <motion.div key={i} variants={item} className="bg-white...">
      {/* conteúdo */}
    </motion.div>
  ))}
</motion.div>
```

---

## 📊 Métricas e Variantes

### Métricas da Seção

```tsx
{
  profileCards: 4,
  credibilityItems: 3,
  gridLayoutProfiles: "2x2 (tablet) → 1x4 (desktop)",
  gridLayoutCredibility: "1 col (mobile) → 3 col (desktop)",
  cardPadding: "32px (p-8)",
  iconSize: "40x40px (w-10 h-10)",
  circleSize: "64x64px (w-16 h-16)",
  gap: "24px (gap-6 perfis), 32px (gap-8 credibilidade)"
}
```

---

### Variante: Apenas Perfis (Sem Credibilidade)

Se quiser remover a mini seção:

```tsx
{/* Grid de Perfis */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
  {/* 4 cards */}
</div>
{/* Remover div de credibilidade */}
```

---

### Variante: Com CTA no Final

Adicionar CTA após credibilidade:

```tsx
{/* Após mini seção de credibilidade */}
<div className="text-center mt-12">
  <a
    href="#diagnostico"
    className="inline-flex items-center justify-center gap-2 bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
  >
    <span>Agendar Diagnóstico</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </a>
</div>
```

---

## 🧪 Testing Checklist

- [ ] 4 cards de perfil renderizam corretamente
- [ ] Grid 2x2 em tablet, 1x4 em desktop
- [ ] Hover aplica border purple nos cards
- [ ] 3 itens de credibilidade centralizados
- [ ] Ícones têm tamanhos corretos (40px perfis, 32px credibilidade)
- [ ] Background neutral-100 contrasta com seções adjacentes
- [ ] Espaçamento section-spacing aplicado (80px/120px)
- [ ] Hierarquia de headings correta (h2 → h3)
- [ ] Responsivo funciona em mobile/tablet/desktop
- [ ] Descrições são curtas e diretas
- [ ] Círculos de credibilidade têm fundo roxo 10%

---

## 🔗 Relação com Outras Seções

### Fluxo da Landing Page

```
Hero (Dark gradient)
  ↓
Diagnóstico (White - problemas)
  ↓
O Que Construímos (Neutral-100 - soluções)
  ↓
Metodologia (White - processo)
  ↓
✨ Para Quem É (Neutral-100 - qualificação + autoridade) ✨
  ↓
Diferenciais (Dark - credibilidade)
  ↓
Casos (Neutral-100 - prova social)
  ↓
Contato (Dark - conversão)
```

**Posicionamento Estratégico**:
- Vem após explicar **processo** (Metodologia)
- Qualifica **público-alvo** (Para Quem É)
- Antes de **credenciais** (Diferenciais)

**Narrativa**:
1. Problema → Solução → Processo
2. **Qualificação**: Para quem é (filtro)
3. Credibilidade → Prova → Conversão

---

## 💡 Dicas de UX

### 1. Função de Qualificação

Os 4 perfis funcionam como **filtro psicológico**:
- Visitor lê e pensa: "Isso é para mim?" ou "Não é para mim"
- Qualifica leads antes de conversão
- Reduz atrito em vendas (leads mais qualificados)

---

### 2. Mini Seção de Credibilidade

Os 3 itens reforçam **objeções comuns**:
- "Vai ser genérico?" → "Arquitetura sob medida"
- "Preciso trocar meu ERP?" → "Integração com ERP existente"
- "Vou perder minhas ferramentas?" → "Sem trocar seu stack"

**Estratégia**: Antecipa e resolve dúvidas antes de surgirem.

---

### 3. Minimalismo nos Cards

Cards de perfil são **objetivos e diretos**:
- Ícone + Título + 1 frase
- Sem decoração excessiva
- Foco na informação, não no design

---

## 🚀 Performance

### Otimizações

```tsx
// SVGs inline (sem requests HTTP)
<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  {/* paths */}
</svg>

// Transições CSS puras (sem JS)
className="transition-all duration-300"

// Grid CSS nativo
className="grid md:grid-cols-2 lg:grid-cols-4"
```

**Benefícios**:
- Zero JavaScript
- SVGs embutidos = sem latência
- Grid CSS = layout eficiente

---

## 📝 Notas de Manutenção

### Atualizar Perfil

1. Localize o card no JSX
2. Edite `title` ou `description`
3. Troque ícone SVG se necessário

```tsx
<h3 className="text-xl font-bold text-primary-slate mb-2">
  Novo Título do Perfil
</h3>
<p className="text-neutral-600 text-sm leading-relaxed">
  Nova descrição
</p>
```

---

### Trocar Ícone de um Card

Use [Heroicons](https://heroicons.com/) ou similar:

```tsx
<div className="text-primary-purple mb-4">
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <!-- Novo path do ícone -->
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
  </svg>
</div>
```

---

## 🎨 Biblioteca de Ícones Alternativos

### Perfis B2B

```tsx
// Building (atual)
<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />

// Office Building (alternativa)
<path d="M3 21h18M4 18h16M6 18V9m12 9V9m-8 9V9m4 0V5a2 2 0 00-2-2H8a2 2 0 00-2 2v4m8 0h3m-3 0H5" />
```

### Volume Recorrente

```tsx
// Refresh (atual)
<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />

// Trending Up (alternativa)
<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
```

---

## 📚 Referências

- [Heroicons](https://heroicons.com/) - Biblioteca de ícones SVG
- [Tailwind Grid](https://tailwindcss.com/docs/grid-template-columns) - Grid CSS
- Design inspirado em páginas de qualificação de SaaS premium

---

**Última atualização**: 19 de fevereiro de 2026  
**Autor**: Fluxen Labs Design System  
**Versão**: 1.0.0
