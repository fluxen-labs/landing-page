# 📐 Estrutura Global da Landing Page - Fluxen Labs

## 🎯 Visão Geral

Landing page single-scroll com estrutura minimalista, espaçamento generoso e foco em conversão.

---

## 🏗️ Arquitetura da Página

### Header Fixo
- **Posição**: Fixed (sempre visível)
- **Comportamento**: Background transparente → sólido no scroll
- **Altura**: 64px (desktop) / 56px (mobile)
- **Elementos**:
  - Logo (esquerda)
  - Navegação (centro)
  - CTA (direita)

### Estrutura de Seções

```
┌─────────────────────────────────┐
│  HEADER (Fixed)                 │
├─────────────────────────────────┤
│  1. HERO (Gradiente)            │  ← Gradiente 1
│     - 100vh                     │
│     - Título + Descrição + CTAs │
├─────────────────────────────────┤
│  2. SERVIÇOS (Claro)            │  ← neutral-100
│     - 120px spacing             │
│     - Grid 3 colunas            │
├─────────────────────────────────┤
│  3. DIFERENCIAIS (Escuro)       │  ← neutral-900
│     - 120px spacing             │
│     - Grid 2 colunas            │
├─────────────────────────────────┤
│  4. CASOS (Claro)               │  ← neutral-100
│     - 120px spacing             │
│     - Cards de projetos         │
├─────────────────────────────────┤
│  5. CONTATO (Escuro)            │  ← neutral-900
│     - 120px spacing             │
│     - CTA centralizado          │
├─────────────────────────────────┤
│  FOOTER                         │
└─────────────────────────────────┘
```

---

## 🎨 Sistema de Gradientes

### Gradiente 1: Hero (Principal)
```css
background: linear-gradient(180deg, #0F172A 0%, #1E293B 100%);
/* Tailwind: bg-gradient-to-b from-primary-slate to-neutral-900 */
```

**Uso**: Apenas no Hero Section

---

## 📏 Espaçamento e Grid

### Container
- **Max-width**: `1200px`
- **Padding horizontal**: 
  - Mobile: `24px` (px-6)
  - Tablet: `32px` (px-8)
  - Desktop: `48px` (px-12)

### Espaçamento de Seções
- **Desktop**: `120px` (py-[120px])
- **Mobile**: `80px` (py-20)

### Classes Customizadas
```css
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem; /* 24px */
}

.section-spacing {
  padding: 5rem 0; /* 80px mobile */
}

@media (min-width: 768px) {
  .section-spacing {
    padding: 7.5rem 0; /* 120px desktop */
  }
}
```

---

## ✏️ Tipografia

### Fonte: Inter
- **Pesos disponíveis**: 400, 500, 600, 700
- **Display**: swap (otimização de performance)

### Hierarquia de Títulos
```css
h1: text-5xl md:text-6xl lg:text-7xl font-bold     /* 48-72px */
h2: text-4xl md:text-5xl font-bold                /* 36-48px */
h3: text-2xl font-semibold                         /* 24px */
p:  text-xl text-neutral-500                       /* 20px */
```

### Line-height
- **Títulos**: `leading-tight` (1.25)
- **Corpo**: `leading-relaxed` (1.75)

---

## 🎨 Alternância de Backgrounds

### Padrão de Seções
1. **Hero**: Gradiente (slate → neutral-900)
2. **Serviços**: Claro (neutral-100)
3. **Diferenciais**: Escuro (neutral-900)
4. **Casos**: Claro (neutral-100)
5. **Contato**: Escuro (neutral-900)
6. **Footer**: Extra escuro (primary-slate)

### Regras de Texto
- **Fundo claro**: `text-primary-slate` (títulos) + `text-neutral-500` (corpo)
- **Fundo escuro**: `text-white` (títulos) + `text-neutral-500` (corpo)

---

## 🔘 Componentes Principais

### CTAs (Buttons)
```tsx
// CTA Principal
<button className="bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg">

// CTA Secundário (Outline)
<button className="border-2 border-white text-white hover:bg-white hover:text-primary-slate font-semibold px-8 py-4 rounded-lg">
```

### Cards
```tsx
<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
```

### Links de Navegação
```tsx
<Link className="text-neutral-100 hover:text-white font-medium transition-colors relative group">
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all" />
</Link>
```

---

## 📱 Responsividade

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1023px`
- **Desktop**: `≥ 1024px`

### Grid Responsivo
```tsx
// 1 coluna mobile → 2 tablet → 3 desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// 1 coluna mobile → 2 desktop
<div className="grid md:grid-cols-2 gap-8">
```

---

## 🎯 Performance

### Scroll Suave
```html
<html className="scroll-smooth">
```

### Font Loading
```tsx
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',  // ← Otimização
})
```

### Transitions
- **Duração padrão**: `300ms`
- **Easing**: `ease` (cubic-bezier padrão)

---

## 📋 Checklist de Implementação

- [x] Header fixo com scroll behavior
- [x] Hero com gradiente obrigatório
- [x] Máximo 2 gradientes (apenas 1 usado: Hero)
- [x] Espaçamento 80px-120px por seção
- [x] Container max-width 1200px
- [x] Tipografia Inter (400, 500, 600, 700)
- [x] Seções alternadas (claro/escuro)
- [x] CTAs com cores corretas
- [x] Navegação suave (scroll-smooth)
- [x] Responsividade completa

---

## 🔧 Arquivos Modificados

1. **`app/layout.tsx`** - Configuração de fonte Inter
2. **`app/page.tsx`** - Estrutura completa da landing page
3. **`app/globals.css`** - Variáveis, container e espaçamentos
4. **`tailwind.config.ts`** - Configurações estendidas
5. **`components/Header.tsx`** - Header fixo minimalista

---

**Próximos passos sugeridos**:
1. Adicionar animações com Framer Motion
2. Criar seção de depoimentos
3. Adicionar formulário de contato funcional
4. Implementar menu mobile responsivo
5. Adicionar métricas e analytics
