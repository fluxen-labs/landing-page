# Para Quem É - Guia Rápido

## 🎯 Resumo

Seção de **qualificação de público** e **credibilidade técnica** com 4 perfis + 3 itens de autoridade.

- **Background**: `bg-neutral-100`
- **ID**: `#para-quem-e`  
- **Posição**: Entre "Metodologia" e "Diferenciais"

---

## 🎨 Cores

```tsx
// Fundo
bg-neutral-100          // Seção
bg-white                // Cards de perfil
border-neutral-200      // Border padrão
hover:border-primary-purple  // Border hover

// Ícones
text-primary-purple     // Ícones dos cards
bg-primary-purple/10    // Círculo credibilidade

// Tipografia
text-primary-slate      // Títulos
text-neutral-600        // Descrições
```

---

## 📦 Estrutura

```tsx
<section id="para-quem-e" className="bg-neutral-100 section-spacing">
  <div className="container-custom">
    {/* Título */}
    <div className="text-center mb-16">
      <h2>Para quem é</h2>
    </div>

    {/* Grid de 4 Perfis */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {/* 4 cards */}
    </div>

    {/* Mini Credibilidade (3 itens) */}
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* 3 itens */}
      </div>
    </div>
  </div>
</section>
```

---

## 🧩 Template de Card de Perfil

```tsx
<div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300">
  {/* Ícone */}
  <div className="text-primary-purple mb-4">
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
    </svg>
  </div>
  
  {/* Título */}
  <h3 className="text-xl font-bold text-primary-slate mb-2">
    Título do Perfil
  </h3>
  
  {/* Descrição */}
  <p className="text-neutral-600 text-sm leading-relaxed">
    Descrição curta
  </p>
</div>
```

---

## 🧩 Template Item de Credibilidade

```tsx
<div className="text-center">
  {/* Ícone Circular */}
  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-purple/10 mb-4">
    <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
    </svg>
  </div>
  
  {/* Título */}
  <h3 className="text-lg font-bold text-primary-slate mb-2">
    Título
  </h3>
  
  {/* Descrição */}
  <p className="text-neutral-600 text-sm">
    Descrição curta
  </p>
</div>
```

---

## 📋 Os 4 Perfis

### 1. Empresas B2B
- **Ícone**: 🏢 Building
- **Descrição**: "Operação comercial estruturada entre empresas"

### 2. Operações com volume recorrente
- **Ícone**: 🔄 Refresh
- **Descrição**: "Processos que se repetem com frequência previsível"

### 3. ERP já implantado
- **Ícone**: 💾 Server
- **Descrição**: "Sistema de gestão estabelecido e em uso"

### 4. Time comercial via WhatsApp
- **Ícone**: 💬 Chat
- **Descrição**: "Comunicação com clientes concentrada no WhatsApp"

---

## 🔖 Os 3 Itens de Credibilidade

### 1. Arquitetura sob medida
- **Ícone**: 🧩 Puzzle
- **Descrição**: "Solução desenhada para seu contexto específico"

### 2. Integração com ERP existente
- **Ícone**: 🔗 Link
- **Descrição**: "Conectamos com seu sistema atual sem substituí-lo"

### 3. Sem trocar seu stack
- **Ícone**: 🛡️ Shield
- **Descrição**: "Mantém suas ferramentas e processos funcionando"

---

## 🎬 Efeitos

### Hover Cards
```tsx
className="... hover:border-primary-purple transition-all duration-300"
```

- Border neutral-200 → primary-purple
- Transição: 300ms

---

## 📱 Responsivo

| Breakpoint | Perfis | Credibilidade |
|------------|--------|---------------|
| Mobile | 1 col | 1 col |
| Tablet (md:) | 2x2 | 3 col |
| Desktop (lg:) | 1x4 | 3 col |

**Perfis**: `grid md:grid-cols-2 lg:grid-cols-4`  
**Credibilidade**: `grid md:grid-cols-3`

---

## ⚡ Quick Edits

### Adicionar 5º perfil
```tsx
{/* Perfil 5 */}
<div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-primary-purple transition-all duration-300">
  <div className="text-primary-purple mb-4">
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
    </svg>
  </div>
  <h3 className="text-xl font-bold text-primary-slate mb-2">
    Novo Perfil
  </h3>
  <p className="text-neutral-600 text-sm leading-relaxed">
    Descrição
  </p>
</div>
```

### Grid 2x2 (ao invés de 1x4)
```tsx
<div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
  {/* Remove lg:grid-cols-4 */}
</div>
```

### Adicionar CTA no final
```tsx
{/* Após mini credibilidade */}
<div className="text-center mt-12">
  <a href="#diagnostico" className="inline-flex items-center justify-center gap-2 bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
    <span>Agendar Diagnóstico</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </a>
</div>
```

### Remover mini seção de credibilidade
```tsx
{/* Grid de Perfis */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
  {/* 4 cards */}
</div>
{/* Remove div de credibilidade completamente */}
```

---

## 📐 Métricas

```tsx
{
  profileCards: 4,
  credibilityItems: 3,
  profileIconSize: "40x40px (w-10 h-10)",
  credibilityCircleSize: "64x64px (w-16 h-16)",
  credibilityIconSize: "32x32px (w-8 h-8)",
  cardPadding: "32px (p-8)",
  gapProfiles: "24px (gap-6)",
  gapCredibility: "32px (gap-8)"
}
```

---

## 🔗 Navegação

Link para esta seção:
```tsx
<a href="#para-quem-e">Para Quem É</a>
```

---

## ✅ Checklist

- [ ] 4 cards de perfil renderizam
- [ ] Grid 2x2 (tablet) e 1x4 (desktop)
- [ ] Hover aplica border purple
- [ ] 3 itens de credibilidade centralizados
- [ ] Ícones tamanhos corretos (40px → 32px)
- [ ] Círculos roxos 10% opacidade
- [ ] Background neutral-100
- [ ] Section spacing aplicado (80px/120px)
- [ ] Descrições curtas e diretas
- [ ] Responsivo funciona mobile/tablet/desktop

---

## 🎨 Anatomia Visual

```
┌──────────────────────────────────┐
│         Para quem é              │
│                                  │
│  [🏢]  [🔄]  [💾]  [💬]          │
│  B2B   Oper  ERP  What           │
│                                  │
│                                  │
│    🧩         🔗        🛡️       │
│ Arquit.   Integr.   Sem trocar   │
└──────────────────────────────────┘
```

---

## 💡 Função Estratégica

### Qualificação de Público
Os 4 perfis funcionam como **filtro psicológico**:
- Lead lê e identifica: "É para mim" ✅
- Ou não identifica: "Não é para mim" ❌
- **Resultado**: Leads mais qualificados

### Resolução de Objeções
Os 3 itens antecipam dúvidas:
1. "Vai ser genérico?" → "Sob medida"
2. "Preciso trocar ERP?" → "Integração"
3. "Vou perder ferramentas?" → "Sem trocar stack"

---

**Para documentação completa**: `PARA-QUEM-E.md`
