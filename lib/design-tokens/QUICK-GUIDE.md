# 🚀 Guia Rápido - Sistema de Cores Fluxen Labs

## Importação Rápida

```ts
import { colors, colorRules } from '@/lib/design-tokens';
```

---

## 🎨 Classes Tailwind Principais

### Hero Section
```tsx
<section className="bg-gradient-to-b from-primary-slate to-neutral-900">
```

### CTAs
```tsx
// CTA Principal
<button className="bg-primary-purple hover:bg-brand-purple text-white">

// CTA Secundário
<button className="border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white">
```

### Backgrounds
```tsx
// Seção Clara
<section className="bg-neutral-100">

// Seção Escura  
<section className="bg-neutral-900">

// Background Branco
<section className="bg-white">
```

### Textos
```tsx
// Título Principal
<h1 className="text-primary-slate">

// Texto Secundário
<p className="text-neutral-500">

// Texto sobre fundo escuro
<p className="text-white">

// Texto destacado
<span className="text-brand-purple">
```

---

## ✅ Checklist de Cores

- [ ] Hero usa `bg-gradient-to-b from-primary-slate to-neutral-900`
- [ ] CTAs usam `bg-primary-purple hover:bg-brand-purple`
- [ ] Nenhum `#000000` (preto puro) no código
- [ ] Roxo não está em backgrounds grandes
- [ ] Seções alternam entre `neutral-100` e `neutral-900`

---

## 📊 Paleta Visual

```
Brand Purple    ████ #5B21B6 (Hover CTA)
Primary Purple  ████ #6D28D9 (CTA Principal)
Primary Slate   ████ #0F172A (Fundo escuro)
Neutral 900     ████ #1E293B (Fundo escuro)
Neutral 500     ████ #64748B (Texto secundário)
Neutral 100     ████ #F1F5F9 (Fundo claro)
Accent Cyan     ████ #06B6D4 (Destaque)
Accent Green    ████ #10B981 (Destaque)
White           ████ #FFFFFF (Base)
```

---

## 📁 Arquivos

- **Configuração**: `tailwind.config.ts`
- **CSS Variables**: `app/globals.css`
- **Design Tokens**: `lib/design-tokens/colors.ts`
- **Tipos**: `lib/design-tokens/types.ts`
- **Exemplos**: `lib/design-tokens/examples.tsx`
- **Documentação**: `lib/design-tokens/README.md`
