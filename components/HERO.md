# 🚀 Hero Section - Impacto Técnico Profundo

## Visão Geral

Seção Hero com foco em impacto técnico, layout em duas colunas (texto + diagrama visual abstrato) e mensagem direcionada para empresas em crescimento acelerado.

---

## 🎨 Design Specifications

### Background
```css
background: linear-gradient(180deg, #0F172A 0%, #1E293B 100%);
/* Tailwind: bg-gradient-to-b from-primary-slate to-neutral-900 */
```

### Layout
```
┌────────────────────────────────────────────────┐
│  [Coluna Texto]          [Coluna Visual]       │
│   - Headline (H1)         - Diagrama SVG       │
│   - Subtítulo             - Animações          │
│   - CTAs                  - Métricas           │
│   - Trust Indicators                           │
└────────────────────────────────────────────────┘
```

**Grid**: 2 colunas em desktop (lg:grid-cols-2), 1 coluna em mobile

---

## 📝 Conteúdo

### Headline (H1)
```
"Engenharia operacional para empresas que cresceram 
mais rápido que seus processos."
```

**Especificações**:
- **Tamanho**: 48px–60px (text-4xl md:text-5xl lg:text-6xl)
- **Peso**: 700 (font-bold)
- **Cor**: Branco (#FFFFFF)
- **Line-height**: tight (1.25)

### Subtítulo
```
"Projetamos arquiteturas inteligentes que integram 
WhatsApp, ERP e dados estruturados para eliminar 
gargalos operacionais."
```

**Especificações**:
- **Tamanho**: 18px–20px (text-lg md:text-xl)
- **Cor**: neutral-500 (#64748B)
- **Line-height**: 1.6
- **Max-width**: 672px (max-w-xl)

---

## 🔘 CTAs (Call-to-Actions)

### CTA Principal
```tsx
Texto: "Solicitar Diagnóstico Técnico"
Ícone: Seta para direita →
```

**Estilo**:
- Background: `primary-purple` (#6D28D9)
- Hover: `brand-purple` (#5B21B6)
- Texto: `white` - font-semibold
- Padding: `px-8 py-4`
- Border-radius: `lg` (8px)
- Shadow: 
  - Normal: `shadow-lg`
  - Hover: `shadow-xl` + `shadow-brand-purple/30`
- Link: `#diagnostico`

### CTA Secundário
```tsx
Texto: "Ver como funciona"
Ícone: Seta para direita → (com animação)
```

**Estilo**:
- Cor: `accent-cyan` (#06B6D4)
- Hover: `accent-cyan/80`
- Sem background (link puro)
- Padding: `px-8 py-4`
- Ícone: Move 4px para direita no hover
- Link: `#metodologia`

---

## 📊 Trust Indicators

Indicadores visuais de confiabilidade:

```
● 99.9% uptime     ● <100ms latência     ● 24/7 monitorado
```

**Cores dos dots**:
- Verde (`accent-green`): uptime (com pulse)
- Cyan (`accent-cyan`): latência
- Roxo (`primary-purple`): monitoramento

**Estilo**:
- Border-top: `neutral-800`
- Text: `neutral-500` (números em `white` bold)
- Font-size: `text-sm`

---

## 🎨 Diagrama Técnico Visual

### Estrutura
```
WhatsApp  →  Engine  →  ERP
   (W)    ═══  (⬡)  ═══  (E)
```

### Elementos

#### Nós (Pontos):
- **WhatsApp**: Círculo roxo com "W"
- **Engine**: Círculo roxo maior com hexágono branco
- **ERP**: Círculo roxo com "E"

**Cores**:
- Círculos: `primary-purple` (#6D28D9) / `brand-purple` (#5B21B6)
- Glow externo: `primary-purple` com opacity 0.1
- Ícones/texto: branco

#### Linhas de Conexão:
- **Cor**: `accent-cyan` (#06B6D4)
- **Largura**: 2px (principais), 1px (decorativas)
- **Estilo**: Sólida (principais), tracejada (secundárias)

#### Animações:
- **Ping**: Círculos externos pulsam (3s infinite)
- **Pulse**: Linhas principais (3s infinite)
- **Flow**: Círculos pequenos se movem nas linhas (2s infinite)

#### Métricas Decorativas:
```
"~100ms"        (top - accent-cyan)
"99.9% uptime"  (bottom - accent-green)
```

---

## 💻 Código de Implementação

### Importação
```tsx
import { TechnicalDiagram } from '@/components/TechnicalDiagram';

<TechnicalDiagram />
```

### Estrutura Hero Section
```tsx
<section className="bg-gradient-to-b from-primary-slate to-neutral-900 min-h-screen">
  <div className="container-custom py-20">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Coluna Texto */}
      <div className="space-y-8">
        <h1>...</h1>
        <p>...</p>
        <div>CTAs</div>
        <div>Trust Indicators</div>
      </div>

      {/* Coluna Visual */}
      <div className="relative">
        <TechnicalDiagram />
      </div>
    </div>
  </div>
</section>
```

---

## 📱 Responsividade

### Desktop (≥ 1024px)
- Grid 2 colunas (50/50)
- Headline: 60px
- Diagrama: altura completa
- CTAs lado a lado

### Tablet (768px - 1023px)
- Grid 1 coluna
- Headline: 48px
- Diagrama centralizado
- CTAs lado a lado

### Mobile (< 768px)
- Grid 1 coluna
- Headline: 36px
- Diagrama reduzido
- CTAs empilhados

---

## 🎯 Especificações Técnicas

### Tamanhos de Fonte
```css
H1:          48px - 60px (responsive)
Subtítulo:   18px - 20px
CTAs:        16px (base)
Trust:       14px (text-sm)
```

### Espaçamentos
```css
Gap entre colunas:     48px - 64px (gap-12 lg:gap-16)
Space entre elementos: 32px (space-y-8)
Padding vertical:      80px (py-20)
CTA gap:               16px (gap-4)
```

### Cores
```css
Background:     linear-gradient(180deg, #0F172A → #1E293B)
Headline:       #FFFFFF
Subtítulo:      #64748B (neutral-500)
CTA Primary:    #6D28D9 → #5B21B6 (hover)
CTA Secondary:  #06B6D4
Diagrama nodes: #6D28D9 / #5B21B6
Diagrama lines: #06B6D4
```

---

## ✨ Efeitos e Animações

### CTAs
```css
Primary:
  - Shadow hover: shadow-xl + shadow-brand-purple/30
  - Transition: 300ms

Secondary:
  - Translate icon: translateX(4px) no hover
  - Color fade: opacity 80% no hover
```

### Diagrama
```css
Ping animation:     3s infinite (círculos externos)
Pulse animation:    3s infinite (linhas)
Flow animation:     2s infinite (pontos nas linhas)
Delays escalonados: 0s, 0.5s, 1s (cada nó)
```

### Trust Indicators
```css
Green dot: animate-pulse (uptime)
```

---

## 🎨 Design System

### Inspirações
- **Stripe**: Hero técnico e direto
- **Vercel**: Diagrama abstrato de fluxo
- **Linear**: Animações suaves e sutis

### Princípios
✓ Mensagem clara e objetiva  
✓ Foco em solução técnica  
✓ Visual abstrato mas inteligível  
✓ CTAs destacados e claros  
✓ Trust signals visíveis  
✓ Animações sutis e profissionais  

---

## 📋 Checklist de Qualidade

- [x] Gradiente correto (primary-slate → neutral-900)
- [x] Headline com tamanhos corretos (48-60px)
- [x] Subtítulo line-height 1.6
- [x] CTA principal com sombra roxa no hover
- [x] CTA secundário em accent-cyan
- [x] Diagrama com 3 nós (WhatsApp, Engine, ERP)
- [x] Linhas em accent-cyan
- [x] Pontos em primary-purple
- [x] Animações fluidas (2-3s)
- [x] Trust indicators com dots coloridos
- [x] Responsivo em todos os breakpoints
- [x] Layout 2 colunas em desktop

---

## 🔧 Customização

### Alterar Headline
Editar [app/page.tsx](../app/page.tsx) linha ~20

### Alterar CTAs
Editar [app/page.tsx](../app/page.tsx) linha ~30

### Modificar Diagrama
Editar [components/TechnicalDiagram.tsx](TechnicalDiagram.tsx)

### Alterar Trust Indicators
Editar [app/page.tsx](../app/page.tsx) linha ~60

---

**Design System**: Fluxen Labs  
**Última atualização**: 18/02/2026
