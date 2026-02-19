# 🎨 Sistema de Cores - Fluxen Labs

Sistema de design tokens oficial da marca Fluxen Labs.

## 📋 Cores Definidas

### Brand
- **Purple**: `#5B21B6` - Cor principal da marca (uso em hover de CTAs)

### Primary
- **Purple**: `#6D28D9` - Cor primária para CTAs
- **Slate**: `#0F172A` - Cor base escura

### Neutral
- **900**: `#1E293B` - Fundo escuro
- **800**: `#334155` - Fundo escuro secundário
- **500**: `#64748B` - Texto secundário
- **100**: `#F1F5F9` - Fundo claro

### Accent
- **Cyan**: `#06B6D4` - Destaque cyan
- **Green**: `#10B981` - Destaque verde

### Base
- **White**: `#FFFFFF` - Branco puro

---

## ✅ Regras Obrigatórias

### ❌ Proibido
- **Nunca usar preto puro** (`#000000`)
- **Nunca usar roxo em backgrounds grandes**

### ✅ Obrigatório
- **Hero Section**: Usar gradiente `linear-gradient(180deg, #0F172A 0%, #1E293B 100%)`
- **CTA Principal**: `primary-purple` (#6D28D9)
- **Hover CTA**: `brand-purple` (#5B21B6)
- **Seções Alternadas**: `neutral-100` (claro) ou `neutral-900` (escuro)

---

## 💻 Como Usar

### Tailwind CSS (Classes)
```tsx
// Hero com gradiente
<section className="bg-gradient-to-b from-primary-slate to-neutral-900">

// CTA com cores corretas
<button className="bg-primary-purple hover:bg-brand-purple text-white">
  Botão CTA
</button>

// Backgrounds alternados
<section className="bg-neutral-100"> {/* Seção clara */}
<section className="bg-neutral-900"> {/* Seção escura */}
```

### CSS Variables
```css
background: var(--color-primary-purple);
color: var(--color-white);
background: var(--gradient-hero);
```

### TypeScript/JavaScript
```ts
import { colors, colorRules } from '@/lib/design-tokens/colors';

// Acessar cores
const ctaColor = colorRules.cta.primary;        // #6D28D9
const hoverColor = colorRules.cta.hover;        // #5B21B6
const heroGradient = colorRules.backgrounds.hero;
```

---

## 📁 Arquivos do Sistema

1. **`tailwind.config.ts`** - Configuração do Tailwind com cores estendidas
2. **`app/globals.css`** - CSS variables e utility classes
3. **`lib/design-tokens/colors.ts`** - Design tokens exportáveis (TypeScript)

---

## 🎯 Exemplos de Uso

### Hero Section
```tsx
<section className="bg-gradient-to-b from-primary-slate to-neutral-900 min-h-screen">
  <h1 className="text-white">Título</h1>
  <button className="bg-primary-purple hover:bg-brand-purple text-white">
    CTA Principal
  </button>
</section>
```

### Seções Alternadas
```tsx
{/* Seção Clara */}
<section className="bg-neutral-100">
  <h2 className="text-primary-slate">Conteúdo</h2>
</section>

{/* Seção Escura */}
<section className="bg-neutral-900">
  <h2 className="text-white">Conteúdo</h2>
</section>
```

### CTAs e Botões
```tsx
{/* CTA Principal */}
<button className="bg-primary-purple hover:bg-brand-purple text-white">
  Ação Principal
</button>

{/* CTA Secundário */}
<button className="border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white">
  Ação Secundária
</button>
```

---

## 🔍 Validação

Antes de fazer commit, verifique:

- [ ] Não há uso de `#000000` (preto puro)
- [ ] Roxo não está em backgrounds grandes
- [ ] Hero usa o gradiente correto
- [ ] CTAs usam `primary-purple` com hover `brand-purple`
- [ ] Seções alternadas usam `neutral-100` ou `neutral-900`

---

**Última atualização**: 18/02/2026
