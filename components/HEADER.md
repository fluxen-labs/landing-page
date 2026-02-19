# 🎯 Header - Design Minimalista e Técnico

## Visão Geral

Header fixo com design enterprise clean, inspirado em **Stripe** e **Vercel**, focado em simplicidade e conversão.

---

## 🎨 Especificações de Design

### Layout
```
┌──────────────────────────────────────────────────────────┐
│  [Logo] Fluxen Labs     Nav Items...   [Agendar CTA →]  │
└──────────────────────────────────────────────────────────┘
```

### Estrutura
- **Altura**: 64px (desktop) / 64px (mobile)
- **Background**: `primary-slate` (#0F172A)
- **Border Bottom**: `neutral-800` (sutil)
- **Posição**: Fixed (sempre visível)

---

## 🧩 Componentes

### Logo
- **Posição**: Esquerda
- **Arquivo**: `/public/logo.svg`
- **Tamanho**: 32px × 32px (mobile) / 36px × 36px (desktop)
- **Texto**: "Fluxen Labs" - font-semibold
- **Cor do texto**: `white` → `brand-purple` (hover)
- **Efeito**: Scale 105% no hover

### Menu de Navegação
Items do menu (desktop):
1. **Arquitetura** → `#arquitetura`
2. **Metodologia** → `#metodologia`
3. **Diagnóstico** → `#diagnostico`
4. **Contato** → `#contato`

**Estilo dos links**:
- Cor: `neutral-100` → `white` (hover)
- Background: transparente → `neutral-800/50` (hover)
- Padding: `px-4 py-2`
- Border-radius: `md` (6px)
- Transition: 200ms

### CTA Button
```tsx
Texto: "Agendar Diagnóstico"
Ícone: Seta para direita →
```

**Especificações**:
- **Background**: `primary-purple` (#6D28D9)
- **Hover**: `brand-purple` (#5B21B6)
- **Texto**: `white` - font-semibold
- **Padding**: `px-5 py-2.5`
- **Border-radius**: `8px` (lg)
- **Shadow**: 
  - Normal: `shadow-sm`
  - Hover: `shadow-lg` com `shadow-brand-purple/30`
- **Transition**: 300ms

---

## 📱 Responsividade

### Desktop (≥ 1024px)
- Logo + Menu completo + CTA completo
- Menu horizontal com 4 items
- CTA com texto completo "Agendar Diagnóstico"

### Tablet/Mobile (< 1024px)
- Logo + CTA curto "Agendar" + Menu hamburger
- Menu hamburger abre dropdown com items
- Menu mobile com animação fade-in + slide-in

---

## 🎭 Comportamento no Scroll

### Scroll = 0
```css
border-color: neutral-800/50 (transparente)
shadow: none
```

### Scroll > 10px
```css
border-color: neutral-800 (sólido)
shadow: shadow-lg
```

**Transition**: 300ms ease

---

## 💻 Código de Implementação

### Importação
```tsx
import { Header } from '@/components/Header';

// No layout ou página
<Header />
```

### Estrutura do Componente
```tsx
<header className="fixed top-0 left-0 right-0 z-50 bg-primary-slate">
  <div className="container-custom">
    <nav className="flex items-center justify-between h-16">
      {/* Logo */}
      {/* Menu Desktop */}
      {/* CTA */}
      {/* Mobile Menu Button */}
    </nav>
    {/* Mobile Menu Dropdown */}
  </div>
</header>
```

---

## 🎨 Cores Utilizadas

### Background
- **Header**: `bg-primary-slate` (#0F172A)
- **Border**: `border-neutral-800` (#334155)
- **Hover Items**: `hover:bg-neutral-800/50`

### Texto
- **Logo**: `text-white` → `hover:text-brand-purple`
- **Menu**: `text-neutral-100` → `hover:text-white`
- **CTA**: `text-white`

### CTA Button
- **Normal**: `bg-primary-purple` (#6D28D9)
- **Hover**: `bg-brand-purple` (#5B21B6)
- **Shadow Hover**: `shadow-brand-purple/30`

---

## ✨ Efeitos Visuais

### Logo
```tsx
// Scale no hover
group-hover:scale-105
transition-transform
```

### Menu Items
```tsx
// Background suave no hover
hover:bg-neutral-800/50
rounded-md
transition-all duration-200
```

### CTA Button
```tsx
// Sombra roxa no hover
hover:shadow-lg
hover:shadow-brand-purple/30
transition-all duration-300
```

### Mobile Menu
```tsx
// Animação de entrada
animate-in fade-in slide-in-from-top-2 duration-200
```

---

## 🔧 Customização

### Alterar Items do Menu
```tsx
const navItems = [
  { label: 'Novo Item', href: '#nova-secao' },
  // ... outros items
];
```

### Alterar Texto do CTA
```tsx
<Link href="#diagnostico">
  <span>Seu Novo Texto</span>
  {/* ícone */}
</Link>
```

### Alterar Logo
Substituir arquivo em `/public/logo.svg`

---

## 📏 Espaçamento

### Container
- **Max-width**: 1200px
- **Padding horizontal**: 
  - Mobile: 24px (px-6)
  - Tablet: 32px (px-8)
  - Desktop: 48px (px-12)

### Altura do Header
- Altura fixa: `h-16` (64px)
- Seções devem ter `pt-16` para compensar

---

## ♿ Acessibilidade

### ARIA Labels
```tsx
<button aria-label="Menu">
  {/* Ícone hamburger */}
</button>
```

### Keyboard Navigation
- Links são focáveis via Tab
- Enter/Space acionam links e botões

### Focus States
Elementos focáveis têm estados visuais claros (outline padrão do navegador)

---

## 🎯 Inspirações

### Stripe
- Menu minimalista e espaçado
- CTA destacado à direita
- Hover states sutis

### Vercel
- Background escuro sólido
- Tipografia clara e legível
- Transições suaves (200-300ms)

---

## 📋 Checklist de Qualidade

- [x] Logo carrega corretamente
- [x] Links de navegação funcionam (scroll suave)
- [x] CTA tem cores corretas (primary → brand)
- [x] Sombra roxa aparece no hover do CTA
- [x] Menu mobile funciona (< 1024px)
- [x] Animation no menu mobile
- [x] Header fixo no topo (z-50)
- [x] Border sutil aparece no scroll
- [x] Transições suaves (200-300ms)
- [x] Responsivo em todos os breakpoints

---

**Design System**: Fluxen Labs  
**Última atualização**: 18/02/2026
