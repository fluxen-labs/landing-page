# O Que Construímos - Guia Rápido

## 🎯 Resumo

Seção que apresenta os **4 pilares de arquitetura operacional** em grid 2x2.

- **Background**: `bg-neutral-100`
- **ID**: `#construimos`
- **Posição**: Entre "Diagnóstico" e "Diferenciais"

---

## 🎨 Cores

```tsx
// Fundo
bg-neutral-100          // Seção
bg-white                // Cards
border-neutral-200      // Border padrão
hover:border-primary-purple  // Border hover

// Elementos
text-primary-purple     // Ícones
text-primary-slate      // Títulos
text-neutral-600        // Descrições
bg-accent-cyan          // Linha técnica
```

---

## 📦 Estrutura

```tsx
<section id="construimos" className="bg-neutral-100 section-spacing">
  <div className="container-custom">
    {/* Cabeçalho */}
    <div className="text-center mb-16">
      <h2>Arquitetura Operacional Estruturada</h2>
      <p>Sem automação superficial. Construímos infraestrutura operacional.</p>
    </div>

    {/* Grid 2x2 */}
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* 4 cards */}
    </div>
  </div>
</section>
```

---

## 🧩 Template de Card

```tsx
<div className="group bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300 hover:shadow-lg">
  {/* Ícone */}
  <div className="text-primary-purple mb-6">
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
    </svg>
  </div>
  
  {/* Título */}
  <h3 className="text-2xl font-bold text-primary-slate mb-4">
    Título do Bloco
  </h3>
  
  {/* Descrição */}
  <p className="text-neutral-600 leading-relaxed mb-6">
    Linha 1<br />
    Linha 2
  </p>
  
  {/* Linha Técnica */}
  <div className="h-1 w-16 bg-accent-cyan rounded-full" />
</div>
```

---

## 📋 Os 4 Blocos

### 1. Arquitetura de Fluxo Comercial
- **Ícone**: Lightning bolt (⚡)
- **Descrição**: "Integração profunda entre WhatsApp e ERP. / Criação de camada intermediária validada."

### 2. Estruturação de Dados Operacionais
- **Ícone**: Database stack (🗄️)
- **Descrição**: "Transformamos conversas em dados estruturados. / Modelagem orientada a evento."

### 3. Automação de Backoffice
- **Ícone**: Settings cog (⚙️)
- **Descrição**: "Eliminamos pontos de fricção manual. / Redução de intervenção humana em tarefas repetitivas."

### 4. Camada Inteligente com IA
- **Ícone**: Lightbulb (💡)
- **Descrição**: "Agentes integrados ao fluxo real da empresa. / IA operando dentro da arquitetura — não isolada."

---

## 🎬 Efeitos

### Hover
```tsx
className="... hover:border-primary-purple transition-all duration-300 hover:shadow-lg"
```

- Border neutral-200 → primary-purple
- Shadow aparece (shadow-lg)
- Transição: 300ms

---

## 📱 Responsivo

| Breakpoint | Layout | Colunas |
|------------|--------|---------|
| Mobile | Stacked | 1 |
| Tablet (md:) | Grid 2x2 | 2 |
| Desktop | Grid 2x2 | 2 |

**Container**: max-w-5xl (1000px)  
**Gap**: 32px (gap-8)

---

## ⚡ Quick Edits

### Trocar cor da linha técnica
```tsx
// Cyan (atual)
<div className="h-1 w-16 bg-accent-cyan rounded-full" />

// Green
<div className="h-1 w-16 bg-accent-green rounded-full" />

// Purple
<div className="h-1 w-16 bg-primary-purple rounded-full" />
```

### Grid 3 colunas (6 blocos)
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {/* 6 cards */}
</div>
```

### Adicionar CTA no final
```tsx
{/* Após o grid */}
<div className="text-center mt-12">
  <a href="#diagnostico" className="inline-flex items-center justify-center gap-2 bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
    <span>Ver como aplicamos isso</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </a>
</div>
```

---

## 📐 Métricas

```tsx
{
  cards: 4,
  gridLayout: "2x2",
  containerMaxWidth: "1000px (max-w-5xl)",
  cardPadding: "32px (p-8)",
  gap: "32px (gap-8)",
  iconSize: "40x40px (w-10 h-10)",
  lineHeight: "4px (h-1)",
  lineWidth: "64px (w-16)"
}
```

---

## 🔗 Navegação

Link para esta seção:
```tsx
<a href="#construimos">O Que Construímos</a>
```

Update no Hero CTA:
```tsx
<a href="#construimos">Ver como funciona</a>
```

---

## ✅ Checklist

- [ ] 4 cards renderizam em grid 2x2 (desktop)
- [ ] Layout stacked em mobile
- [ ] Hover aplica border purple + shadow
- [ ] Ícones roxos (40x40px)
- [ ] Linha cyan em todos os cards
- [ ] Descrições com quebra de linha (`<br />`)
- [ ] Background neutral-100
- [ ] Section spacing aplicado (80px/120px)

---

**Para documentação completa**: `CONSTRUIMOS.md`
