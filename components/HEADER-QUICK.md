# 🚀 Header - Guia Rápido

## Uso Básico

```tsx
import { Header } from '@/components/Header';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Seu conteúdo */}
      </main>
    </>
  );
}
```

---

## 🎨 Cores do Header

```tsx
// Background
bg-primary-slate (#0F172A)

// Logo (hover)
text-white → text-brand-purple

// Menu items
text-neutral-100 → text-white (hover)
hover:bg-neutral-800/50

// CTA Button
bg-primary-purple → bg-brand-purple (hover)
shadow-brand-purple/30 (hover)
```

---

## 📐 Dimensões

```
Height: 64px (h-16)
Container: max-width 1200px
Logo: 32-36px × 32-36px
CTA Padding: px-5 py-2.5
CTA Radius: 8px (rounded-lg)
```

---

## 🔗 Links de Navegação

Atual:
- Arquitetura → `#arquitetura`
- Metodologia → `#metodologia`
- Diagnóstico → `#diagnostico`
- Contato → `#contato`

Para alterar, edite o array `navItems` no componente:

```tsx
const navItems = [
  { label: 'Seu Link', href: '#sua-secao' },
];
```

---

## 🎯 CTA Button

### Desktop
```
Texto completo: "Agendar Diagnóstico"
Ícone: Seta direita →
```

### Mobile
```
Texto curto: "Agendar"
Sem ícone
```

---

## 📱 Breakpoints

```
Mobile:    < 1024px (menu hamburger)
Desktop:   ≥ 1024px (menu horizontal)
```

---

## ✨ Efeitos

### Logo
- Hover: escala 105% + cor roxa

### Menu
- Hover: fundo cinza suave

### CTA
- Hover: sombra roxa + cor mais escura

### Mobile Menu
- Animação: fade + slide de cima

---

## 🔧 Ajuste de Seções

Seções devem compensar altura do header:

```tsx
<section className="pt-16"> {/* 64px offset */}
  {/* Conteúdo */}
</section>
```

Hero section já incluído no código:
```tsx
<section className="min-h-screen pt-16 flex items-center">
```

---

## 🎨 Estilo Enterprise Clean

Inspirado em:
- **Stripe**: Menu espaçado, hover sutil
- **Vercel**: Background escuro, tipografia clara

Características:
✓ Minimalista
✓ Alta legibilidade
✓ Transições suaves (200-300ms)
✓ Sem elementos decorativos excessivos
✓ Foco em conversão (CTA destacado)
