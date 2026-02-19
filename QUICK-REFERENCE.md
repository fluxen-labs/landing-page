# 🚀 Guia Rápido - Estrutura da Landing Page

## Container e Espaçamento

```tsx
// Container centralizado (max-width 1200px)
<div className="container-custom">

// Espaçamento de seção (80px mobile / 120px desktop)
<section className="section-spacing">

// Espaçamento menor
<section className="section-spacing-sm">
```

---

## Estrutura de Seção Completa

```tsx
// Seção Clara
<section id="secao-id" className="bg-neutral-100 section-spacing">
  <div className="container-custom">
    {/* Conteúdo */}
  </div>
</section>

// Seção Escura
<section id="secao-id" className="bg-neutral-900 section-spacing">
  <div className="container-custom">
    {/* Conteúdo */}
  </div>
</section>
```

---

## Títulos de Seção

```tsx
// Padrão de título de seção
<div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-primary-slate mb-6">
    Título da Seção
  </h2>
  <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
    Descrição da seção
  </p>
</div>
```

---

## Grids Responsivos

```tsx
// 3 colunas (mobile: 1 / tablet: 2 / desktop: 3)
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// 2 colunas (mobile: 1 / desktop: 2)
<div className="grid md:grid-cols-2 gap-8">
```

---

## Cards

```tsx
// Card padrão
<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
  <h3 className="text-2xl font-semibold text-primary-slate mb-4">
    Título
  </h3>
  <p className="text-neutral-500 leading-relaxed">
    Descrição
  </p>
</div>

// Card escuro
<div className="p-6 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-300">
  {/* Conteúdo */}
</div>
```

---

## Botões/CTAs

```tsx
// CTA Principal
<button className="bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
  Texto do Botão
</button>

// CTA Secundário (Outline)
<button className="border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
  Texto do Botão
</button>

// CTA Outline Branco
<button className="border-2 border-white text-white hover:bg-white hover:text-primary-slate font-semibold px-8 py-4 rounded-lg transition-all duration-300">
  Texto do Botão
</button>
```

---

## Textos

```tsx
// Título principal (Hero)
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">

// Título de seção
<h2 className="text-4xl md:text-5xl font-bold text-primary-slate mb-6">

// Subtítulo
<h3 className="text-2xl font-semibold text-primary-slate mb-4">

// Parágrafo grande
<p className="text-xl text-neutral-500 leading-relaxed">

// Parágrafo normal
<p className="text-neutral-500 leading-relaxed">
```

---

## Cores de Fundo

```tsx
// Hero (gradiente obrigatório)
className="bg-gradient-to-b from-primary-slate to-neutral-900"

// Fundo claro
className="bg-neutral-100"

// Fundo escuro
className="bg-neutral-900"

// Fundo branco
className="bg-white"

// Fundo extra escuro
className="bg-primary-slate"
```

---

## Checklist Rápida

Ao criar nova seção:
- [ ] Usa `section-spacing` para padding vertical
- [ ] Tem `container-custom` para centralizar conteúdo
- [ ] Alterna background (claro/escuro) com seção anterior
- [ ] Títulos seguem hierarquia (h2 → h3 → p)
- [ ] CTAs usam cores corretas (primary-purple → brand-purple)
- [ ] Grid é responsivo (md:grid-cols-* lg:grid-cols-*)
- [ ] Textos têm cores adequadas ao fundo
