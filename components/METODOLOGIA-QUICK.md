# Metodologia - Guia Rápido

## 🎯 Resumo

Seção que apresenta o **processo de engenharia** através de **timeline vertical minimalista** com 4 etapas.

- **Background**: `bg-white`
- **ID**: `#metodologia`
- **Posição**: Entre "O Que Construímos" e "Diferenciais"

---

## 🎨 Cores

```tsx
// Fundo
bg-white                // Seção branca

// Números
text-primary-purple     // Números grandes
bg-primary-purple/10    // Fundo círculo (10% opacidade)

// Linha
bg-accent-cyan          // Linha vertical conectora

// Tipografia
text-primary-slate      // Títulos
text-neutral-600        // Descrições
```

---

## 📦 Estrutura

```tsx
<section id="metodologia" className="bg-white section-spacing">
  <div className="container-custom">
    {/* Título */}
    <div className="text-center mb-20">
      <h2>Processo de Engenharia</h2>
    </div>

    {/* Timeline Vertical */}
    <div className="max-w-3xl mx-auto">
      <div className="space-y-12">
        {/* 4 etapas */}
      </div>
    </div>

    {/* Frase Final */}
    <div className="text-center mt-20">
      <p>Sem promessa vaga.<br />Sem buzzword.<br />Engenharia aplicada...</p>
    </div>
  </div>
</section>
```

---

## 🧩 Template de Etapa

```tsx
<div className="flex gap-8 items-start">
  {/* Número + Linha */}
  <div className="flex flex-col items-center flex-shrink-0">
    <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
      <span className="text-5xl font-bold text-primary-purple">1</span>
    </div>
    <div className="w-0.5 h-24 bg-accent-cyan mt-4" />
  </div>
  
  {/* Conteúdo */}
  <div className="pt-4">
    <h3 className="text-2xl font-bold text-primary-slate mb-3">
      Título da Etapa
    </h3>
    <p className="text-neutral-600 leading-relaxed text-lg">
      Descrição técnica.
    </p>
  </div>
</div>
```

**Importante**: Última etapa **NÃO tem linha vertical** (`<div className="w-0.5 h-24..."` removido).

---

## 📋 As 4 Etapas

### 1. Mapeamento do fluxo crítico
"Análise profunda dos processos atuais, identificação de gargalos operacionais e mapeamento de dependências entre sistemas."

### 2. Redesenho estrutural
"Arquitetura de solução desenhada para eliminar fricções, criar camadas de validação e estabelecer fluxo automatizado de dados."

### 3. Implementação técnica
"Desenvolvimento incremental com testes contínuos, integração com sistemas existentes e validação em ambiente real."

### 4. Evolução contínua
"Monitoramento de performance, ajustes baseados em dados reais e expansão gradual para novos módulos operacionais."

---

## 💬 Frase Final

```tsx
<div className="text-center mt-20 max-w-2xl mx-auto">
  <p className="text-3xl md:text-4xl font-bold text-primary-slate leading-tight">
    Sem promessa vaga.<br />
    Sem buzzword.<br />
    Engenharia aplicada à operação real.
  </p>
</div>
```

**Características**:
- 3 linhas curtas com `<br />`
- Tipografia forte (text-4xl, bold)
- Centralizada e com max-width

---

## 📱 Responsivo

| Breakpoint | Número | Frase Final |
|------------|--------|-------------|
| Mobile | text-4xl | text-2xl |
| Desktop (md:) | text-5xl | text-4xl |

**Timeline**: Mantém layout vertical em todos os breakpoints.

---

## ⚡ Quick Edits

### Trocar cor da linha
```tsx
// Cyan (atual)
<div className="w-0.5 h-24 bg-accent-cyan mt-4" />

// Purple
<div className="w-0.5 h-24 bg-primary-purple mt-4" />
```

### Adicionar 5ª etapa
```tsx
{/* Etapa 5 */}
<div className="flex gap-8 items-start">
  <div className="flex flex-col items-center flex-shrink-0">
    <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
      <span className="text-5xl font-bold text-primary-purple">5</span>
    </div>
    {/* SEM linha vertical (última etapa) */}
  </div>
  
  <div className="pt-4">
    <h3 className="text-2xl font-bold text-primary-slate mb-3">
      Nova Etapa
    </h3>
    <p className="text-neutral-600 leading-relaxed text-lg">
      Descrição.
    </p>
  </div>
</div>
```

**Lembre-se**: Adicione linha à etapa 4 (que agora não é mais a última).

### Adicionar CTA após frase final
```tsx
<div className="text-center mt-12">
  <a href="#diagnostico" className="inline-flex items-center justify-center gap-2 bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
    <span>Solicitar Diagnóstico</span>
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
  steps: 4,
  containerMaxWidth: "768px (max-w-3xl)",
  circleSize: "80x80px (w-20 h-20)",
  numberSize: "text-5xl (48px)",
  lineWidth: "2px (w-0.5)",
  lineHeight: "96px (h-24)",
  stepGap: "48px (space-y-12)",
  textGap: "32px (gap-8)"
}
```

---

## 🔗 Navegação

Link para esta seção:
```tsx
<a href="#metodologia">Metodologia</a>
```

CTA do Hero já aponta para cá:
```tsx
<a href="#metodologia">Ver como funciona</a>
```

---

## ✅ Checklist

- [ ] 4 etapas renderizam em ordem vertical
- [ ] Linhas verticais conectam 1→2→3→4
- [ ] Última etapa (4) SEM linha abaixo
- [ ] Números grandes e centralizados (text-5xl)
- [ ] Frase final com 3 linhas quebradas
- [ ] Background branco
- [ ] Container max-w-3xl (768px)
- [ ] Section spacing aplicado (80px/120px)
- [ ] Tipografia correta (text-2xl títulos, text-lg descrições)

---

## 🎨 Anatomia Visual

```
┌────────────────────────────────┐
│   Processo de Engenharia       │
│                                │
│                                │
│   ┌────┐                       │
│   │ 1  │────                   │
│   └────┘                       │
│         Mapeamento...          │
│         Análise profunda...    │
│                                │
│   ┌────┐                       │
│   │ 2  │────                   │
│   └────┘                       │
│         Redesenho...           │
│         Arquitetura...         │
│                                │
│   ┌────┐                       │
│   │ 3  │────                   │
│   └────┘                       │
│         Implementação...       │
│         Desenvolvimento...     │
│                                │
│   ┌────┐                       │
│   │ 4  │                       │
│   └────┘                       │
│         Evolução...            │
│         Monitoramento...       │
│                                │
│                                │
│   Sem promessa vaga.           │
│   Sem buzzword.                │
│   Engenharia aplicada...       │
└────────────────────────────────┘
```

---

## 💡 Dicas

### Copy da Frase Final
- Linha 1: Anti-promessa → "Sem promessa vaga"
- Linha 2: Anti-jargão → "Sem buzzword"
- Linha 3: Afirmação técnica → "Engenharia aplicada..."

### Minimalismo
Elementos removidos propositalmente:
- ❌ Ícones decorativos
- ❌ Cores múltiplas
- ❌ Sombras complexas

Mantido apenas:
- ✅ Números grandes
- ✅ Linha vertical
- ✅ Tipografia forte

---

**Para documentação completa**: `METODOLOGIA.md`
