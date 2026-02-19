# Seção: Metodologia (Processo de Engenharia)

## 📋 Visão Geral

Esta seção apresenta o **processo de engenharia** da Fluxen Labs através de uma **timeline vertical minimalista** com 4 etapas. O design é limpo, técnico e sem elementos decorativos excessivos — apenas o essencial para comunicar rigor e seriedade.

**Localização**: Entre "O Que Construímos" e "Diferenciais"  
**Background**: `bg-white` (contraste com neutral-100 anterior e dark posterior)  
**ID da Seção**: `#metodologia`

---

## 🎨 Design Specifications

### Paleta de Cores

```tsx
// Background da Seção
bg-white                // Fundo branco puro (#FFFFFF)

// Números
text-primary-purple     // Números grandes (#6D28D9)
bg-primary-purple/10    // Fundo do círculo (roxo 10% opacidade)

// Linha Vertical
bg-accent-cyan          // Linha conectora (#06B6D4)

// Tipografia
text-primary-slate      // Títulos das etapas (#0F172A)
text-neutral-600        // Descrições

// Frase Final
text-primary-slate      // Texto forte (#0F172A)
```

### Tipografia

```tsx
// Título da Seção
className="text-4xl md:text-5xl font-bold text-primary-slate"

// Número da Etapa
className="text-5xl font-bold text-primary-purple"

// Título da Etapa
className="text-2xl font-bold text-primary-slate mb-3"

// Descrição da Etapa
className="text-neutral-600 leading-relaxed text-lg"

// Frase Final
className="text-3xl md:text-4xl font-bold text-primary-slate leading-tight"
```

### Spacing

```tsx
// Seção
className="bg-white section-spacing"
// section-spacing = py-20 md:py-32 (80px → 120px)

// Container
className="container-custom"
// max-w-[1200px] mx-auto px-6 md:px-12

// Título da Seção
className="text-center mb-20"
// 80px de espaço abaixo do título

// Timeline Container
className="max-w-3xl mx-auto"
// 768px de largura máxima

// Espaço entre Etapas
className="space-y-12"
// 48px entre cada etapa

// Linha Vertical
className="w-0.5 h-24 bg-accent-cyan mt-4"
// 2px largura, 96px altura, 16px acima
```

---

## 📦 Estrutura de Conteúdo

### Cabeçalho da Seção

```tsx
<div className="text-center mb-20">
  <h2 className="text-4xl md:text-5xl font-bold text-primary-slate">
    Processo de Engenharia
  </h2>
</div>
```

**Copy Strategy**:
- **Título único**: "Processo de Engenharia" → direto, sem subtítulo
- **Minimalismo**: Apenas o título, sem descrição adicional
- **Espaçamento generoso**: mb-20 (80px) para respirar antes da timeline

---

### Timeline Vertical - Container

```tsx
<div className="max-w-3xl mx-auto">
  <div className="space-y-12">
    {/* 4 etapas aqui */}
  </div>
</div>
```

**Características**:
- Container limitado a 768px (max-w-3xl)
- Centralizado horizontalmente
- Espaçamento vertical de 48px entre etapas

---

### Anatomia de uma Etapa

```tsx
<div className="flex gap-8 items-start">
  {/* Coluna Esquerda: Número + Linha */}
  <div className="flex flex-col items-center flex-shrink-0">
    {/* Círculo com Número */}
    <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
      <span className="text-5xl font-bold text-primary-purple">1</span>
    </div>
    
    {/* Linha Vertical (exceto última etapa) */}
    <div className="w-0.5 h-24 bg-accent-cyan mt-4" />
  </div>
  
  {/* Coluna Direita: Conteúdo */}
  <div className="pt-4">
    <h3 className="text-2xl font-bold text-primary-slate mb-3">
      Título da Etapa
    </h3>
    <p className="text-neutral-600 leading-relaxed text-lg">
      Descrição técnica da etapa em 1-2 frases diretas.
    </p>
  </div>
</div>
```

**Elementos**:
1. **Círculo**: 80x80px, fundo roxo 10%, número roxo em text-5xl
2. **Linha vertical**: 2px largura, 96px altura, cyan, conecta ao próximo
3. **Título**: text-2xl, bold, primary-slate
4. **Descrição**: text-lg, neutral-600, técnica e direta

**Layout**:
- Flexbox horizontal (gap-8 = 32px)
- Número à esquerda (fixo, não encolhe)
- Conteúdo à direita (expande)
- Alinhamento top (items-start)

---

## 🧩 Conteúdo das 4 Etapas

### 1️⃣ Mapeamento do fluxo crítico

```tsx
{
  number: 1,
  title: "Mapeamento do fluxo crítico",
  description: "Análise profunda dos processos atuais, identificação de gargalos operacionais e mapeamento de dependências entre sistemas."
}
```

**Foco**: Entendimento profundo do estado atual  
**Keywords**: análise, gargalos, dependências

---

### 2️⃣ Redesenho estrutural

```tsx
{
  number: 2,
  title: "Redesenho estrutural",
  description: "Arquitetura de solução desenhada para eliminar fricções, criar camadas de validação e estabelecer fluxo automatizado de dados."
}
```

**Foco**: Arquitetura da solução  
**Keywords**: eliminar fricções, validação, fluxo automatizado

---

### 3️⃣ Implementação técnica

```tsx
{
  number: 3,
  title: "Implementação técnica",
  description: "Desenvolvimento incremental com testes contínuos, integração com sistemas existentes e validação em ambiente real."
}
```

**Foco**: Execução prática  
**Keywords**: incremental, testes, integração, validação

---

### 4️⃣ Evolução contínua

```tsx
{
  number: 4,
  title: "Evolução contínua",
  description: "Monitoramento de performance, ajustes baseados em dados reais e expansão gradual para novos módulos operacionais."
}
```

**Foco**: Melhoria contínua  
**Keywords**: monitoramento, dados reais, expansão gradual

**Nota**: Esta etapa **NÃO tem linha vertical** abaixo do círculo.

---

### Frase de Impacto Final

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
- **Centralizada**: text-center
- **Espaçamento superior**: mt-20 (80px após timeline)
- **Tipografia forte**: text-3xl/text-4xl, font-bold
- **3 linhas curtas**: Quebradas com `<br />`
- **Máxima largura**: max-w-2xl (672px)

**Copy Strategy**:
- Linha 1: "Sem promessa vaga." → anti-marketing genérico
- Linha 2: "Sem buzzword." → anti-jargão corporativo
- Linha 3: "Engenharia aplicada à operação real." → posicionamento técnico

---

## 🎯 Código Completo da Seção

```tsx
{/* Metodologia Section - Fundo Branco */}
<section id="metodologia" className="bg-white section-spacing">
  <div className="container-custom">
    {/* Título da Seção */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-primary-slate">
        Processo de Engenharia
      </h2>
    </div>

    {/* Timeline Vertical */}
    <div className="max-w-3xl mx-auto">
      <div className="space-y-12">
        {/* Etapa 1: Mapeamento do fluxo crítico */}
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
              Mapeamento do fluxo crítico
            </h3>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Análise profunda dos processos atuais, identificação de gargalos operacionais e mapeamento de dependências entre sistemas.
            </p>
          </div>
        </div>

        {/* Etapa 2: Redesenho estrutural */}
        <div className="flex gap-8 items-start">
          {/* Número + Linha */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary-purple">2</span>
            </div>
            <div className="w-0.5 h-24 bg-accent-cyan mt-4" />
          </div>
          
          {/* Conteúdo */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-primary-slate mb-3">
              Redesenho estrutural
            </h3>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Arquitetura de solução desenhada para eliminar fricções, criar camadas de validação e estabelecer fluxo automatizado de dados.
            </p>
          </div>
        </div>

        {/* Etapa 3: Implementação técnica */}
        <div className="flex gap-8 items-start">
          {/* Número + Linha */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary-purple">3</span>
            </div>
            <div className="w-0.5 h-24 bg-accent-cyan mt-4" />
          </div>
          
          {/* Conteúdo */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-primary-slate mb-3">
              Implementação técnica
            </h3>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Desenvolvimento incremental com testes contínuos, integração com sistemas existentes e validação em ambiente real.
            </p>
          </div>
        </div>

        {/* Etapa 4: Evolução contínua */}
        <div className="flex gap-8 items-start">
          {/* Número (sem linha final) */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary-purple">4</span>
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-primary-slate mb-3">
              Evolução contínua
            </h3>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Monitoramento de performance, ajustes baseados em dados reais e expansão gradual para novos módulos operacionais.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Frase de Impacto Final */}
    <div className="text-center mt-20 max-w-2xl mx-auto">
      <p className="text-3xl md:text-4xl font-bold text-primary-slate leading-tight">
        Sem promessa vaga.<br />
        Sem buzzword.<br />
        Engenharia aplicada à operação real.
      </p>
    </div>
  </div>
</section>
```

---

## 🔧 Customização

### Adicionar Mais Etapas

Para adicionar uma 5ª etapa:

```tsx
{/* Etapa 5: Nova Etapa */}
<div className="flex gap-8 items-start">
  <div className="flex flex-col items-center flex-shrink-0">
    <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
      <span className="text-5xl font-bold text-primary-purple">5</span>
    </div>
  </div>
  
  <div className="pt-4">
    <h3 className="text-2xl font-bold text-primary-slate mb-3">
      Nova Etapa
    </h3>
    <p className="text-neutral-600 leading-relaxed text-lg">
      Descrição técnica da nova etapa.
    </p>
  </div>
</div>
```

**Importante**: A nova **última etapa** não deve ter linha vertical. Adicione linha apenas à etapa anterior.

---

### Trocar Cor da Linha Vertical

```tsx
// Cyan (atual)
<div className="w-0.5 h-24 bg-accent-cyan mt-4" />

// Green
<div className="w-0.5 h-24 bg-accent-green mt-4" />

// Purple
<div className="w-0.5 h-24 bg-primary-purple mt-4" />
```

---

### Aumentar Altura das Linhas Conectoras

```tsx
// Altura atual (96px)
<div className="w-0.5 h-24 bg-accent-cyan mt-4" />

// Altura maior (128px)
<div className="w-0.5 h-32 bg-accent-cyan mt-4" />

// Altura menor (64px)
<div className="w-0.5 h-16 bg-accent-cyan mt-4" />
```

**Nota**: Ajuste também o `space-y-12` no container se mudar a altura.

---

### Ícones ao Invés de Números

Para usar ícones SVG ao invés de números:

```tsx
<div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
  <svg className="w-10 h-10 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
  </svg>
</div>
```

---

### Timeline Horizontal (Mobile)

Para mudar para timeline horizontal em mobile:

```tsx
<div className="flex md:flex-row flex-col gap-8">
  {/* Etapas dispostas horizontalmente */}
</div>
```

---

## 📱 Comportamento Responsivo

### Mobile (< 768px)

```txt
┌─────────────────────────┐
│  Processo de Engenharia │
│                         │
│  ┌──┐                   │
│  │ 1│──────             │
│  └──┘                   │
│  Mapeamento...          │
│  Descrição...           │
│                         │
│  ┌──┐                   │
│  │ 2│──────             │
│  └──┘                   │
│  Redesenho...           │
│  Descrição...           │
│                         │
│  ┌──┐                   │
│  │ 3│──────             │
│  └──┘                   │
│  Implementação...       │
│  Descrição...           │
│                         │
│  ┌──┐                   │
│  │ 4│                   │
│  └──┘                   │
│  Evolução...            │
│  Descrição...           │
│                         │
│  Sem promessa vaga.     │
│  Sem buzzword.          │
│  Engenharia aplicada... │
└─────────────────────────┘
```

**Características**:
- Timeline vertical mantida
- Números menores (text-4xl ao invés de text-5xl)
- Gap reduzido para mobile (gap-4 ao invés de gap-8)
- Frase final em text-2xl

---

### Tablet/Desktop (≥ 768px)

```txt
┌────────────────────────────────────────┐
│      Processo de Engenharia            │
│                                        │
│   ┌────┐                               │
│   │ 1  │────                           │
│   └────┘                               │
│          Mapeamento do fluxo...        │
│          Análise profunda...           │
│                                        │
│   ┌────┐                               │
│   │ 2  │────                           │
│   └────┘                               │
│          Redesenho estrutural          │
│          Arquitetura de solução...     │
│                                        │
│   ┌────┐                               │
│   │ 3  │────                           │
│   └────┘                               │
│          Implementação técnica         │
│          Desenvolvimento incremental...│
│                                        │
│   ┌────┐                               │
│   │ 4  │                               │
│   └────┘                               │
│          Evolução contínua             │
│          Monitoramento de performance..│
│                                        │
│                                        │
│        Sem promessa vaga.              │
│        Sem buzzword.                   │
│        Engenharia aplicada à operação..│
└────────────────────────────────────────┘
```

**Características**:
- Timeline vertical completa
- Gap generoso (32px entre número e texto)
- Números grandes (text-5xl)
- Container limitado a 768px (max-w-3xl)
- Frase final em text-4xl

---

## ♿ Acessibilidade

### Semântica HTML

```tsx
<section id="metodologia" className="...">
  {/* Título da seção */}
  <h2>Processo de Engenharia</h2>
  
  {/* Timeline */}
  <div>
    {/* Cada etapa */}
    <h3>Mapeamento do fluxo crítico</h3>
    <p>Descrição...</p>
  </div>
</section>
```

**Hierarquia**:
- `<section>` com ID para navegação
- `<h2>` para título da seção
- `<h3>` para título de cada etapa
- `<p>` para descrições

---

### ARIA Labels (Opcional)

Para melhorar a navegação assistiva:

```tsx
<section 
  id="metodologia" 
  aria-labelledby="metodologia-title"
  className="..."
>
  <h2 id="metodologia-title" className="...">
    Processo de Engenharia
  </h2>
  
  <ol className="max-w-3xl mx-auto space-y-12" aria-label="Etapas do processo">
    <li>
      {/* Etapa 1 */}
    </li>
    <li>
      {/* Etapa 2 */}
    </li>
    {/* ... */}
  </ol>
</section>
```

---

### Contraste de Cores

| Elemento | Cor Texto | Cor Background | Ratio | Status |
|----------|-----------|----------------|-------|--------|
| Título Seção | primary-slate (`#0F172A`) | white (`#FFFFFF`) | 17.8:1 | ✅ AAA |
| Número | primary-purple (`#6D28D9`) | purple/10 (`#F3EAFF`) | 8.1:1 | ✅ AAA |
| Título Etapa | primary-slate (`#0F172A`) | white (`#FFFFFF`) | 17.8:1 | ✅ AAA |
| Descrição | neutral-600 (`#525252`) | white (`#FFFFFF`) | 7.2:1 | ✅ AA |
| Frase Final | primary-slate (`#0F172A`) | white (`#FFFFFF`) | 17.8:1 | ✅ AAA |

---

## 🎬 Animações

### Animação de Entrada (Opcional)

Com Framer Motion, para animar etapas ao scroll:

```tsx
import { motion } from 'framer-motion';

const timelineVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

// No JSX
<motion.div 
  variants={timelineVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="space-y-12"
>
  {[...steps].map((step, i) => (
    <motion.div key={i} variants={stepVariants} className="flex gap-8...">
      {/* conteúdo da etapa */}
    </motion.div>
  ))}
</motion.div>
```

---

### Efeito de Desenho da Linha (Avançado)

Para animar o desenho das linhas verticais:

```tsx
<motion.div 
  className="w-0.5 h-24 bg-accent-cyan mt-4"
  initial={{ scaleY: 0 }}
  whileInView={{ scaleY: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  style={{ transformOrigin: 'top' }}
/>
```

---

## 📊 Métricas e Variantes

### Métricas da Seção

```tsx
{
  steps: 4,
  timelineMaxWidth: "768px (max-w-3xl)",
  circleSize: "80x80px (w-20 h-20)",
  numberFontSize: "text-5xl (48px)",
  lineWidth: "2px (w-0.5)",
  lineHeight: "96px (h-24)",
  gapBetweenSteps: "48px (space-y-12)",
  gapNumberToText: "32px (gap-8)"
}
```

---

### Variante: Timeline Horizontal (Desktop)

Para layout horizontal em telas grandes:

```tsx
<div className="hidden lg:flex lg:justify-around lg:items-start">
  {/* Etapas lado a lado */}
  <div className="flex-1">
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-primary-purple/10 flex items-center justify-center">
        <span className="text-5xl font-bold text-primary-purple">1</span>
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-primary-slate mb-2">
          Mapeamento
        </h3>
        <p className="text-neutral-600 text-sm">...</p>
      </div>
    </div>
  </div>
  {/* Repetir para outras etapas */}
</div>
```

---

### Variante: Com Ícones e Números

Combinar ícones com números:

```tsx
<div className="w-20 h-20 rounded-full bg-primary-purple/10 flex flex-col items-center justify-center gap-1">
  <svg className="w-6 h-6 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {/* ícone */}
  </svg>
  <span className="text-2xl font-bold text-primary-purple">1</span>
</div>
```

---

## 🧪 Testing Checklist

- [ ] Timeline vertical renderiza corretamente
- [ ] 4 etapas aparecem em ordem (1-2-3-4)
- [ ] Linhas verticais conectam etapas 1→2, 2→3, 3→4
- [ ] Última etapa (4) NÃO tem linha vertical abaixo
- [ ] Círculos com números estão centralizados
- [ ] Frase final está centralizada com 3 linhas
- [ ] Background branco contrasta com seções anterior/posterior
- [ ] Container limitado a max-w-3xl (768px)
- [ ] Espaçamento section-spacing aplicado (80px/120px)
- [ ] Tipografia em tamanhos corretos (text-5xl números, text-2xl títulos)
- [ ] Quebras de linha na frase final funcionam (`<br />`)
- [ ] Responsivo funciona em mobile (números menores, frase ajustada)

---

## 🔗 Relação com Outras Seções

### Fluxo da Landing Page

```
Hero (Dark gradient)
  ↓
Diagnóstico (White - problemas)
  ↓
O Que Construímos (Neutral-100 - soluções)
  ↓
✨ Metodologia (White - processo) ✨
  ↓
Diferenciais (Dark - credibilidade)
  ↓
Casos (Neutral-100 - prova social)
  ↓
Contato (Dark - conversão)
```

**Posicionamento Estratégico**:
- Vem após mostrar **soluções** (O Que Construímos)
- Apresenta **como fazemos** (Metodologia)
- Antes de **credibilidade** (Diferenciais)

**Narrativa**:
1. **Problema**: Diagnóstico da realidade
2. **Solução**: O que construímos
3. **Processo**: Como fazemos (Metodologia)
4. **Prova**: Diferenciais + Casos

---

### Integração com CTAs

O Hero tem CTA "Ver como funciona" que pode apontar para #metodologia:

```tsx
// No Hero (já implementado)
<a href="#metodologia" className="...">
  Ver como funciona
</a>
```

Também pode adicionar CTA após a frase final da Metodologia:

```tsx
{/* Após frase final */}
<div className="text-center mt-12">
  <a
    href="#diagnostico"
    className="inline-flex items-center justify-center gap-2 bg-primary-purple hover:bg-brand-purple text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
  >
    <span>Solicitar Diagnóstico</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </a>
</div>
```

---

## 💡 Dicas de UX

### 1. Progressão Visual Clara

A timeline vertical comunica **sequência temporal** de forma intuitiva:
- Leitura top-down (natural em culturas ocidentais)
- Linhas conectoras reforçam continuidade
- Números grandes facilitam escaneabilidade

---

### 2. Minimalismo Intencional

Elementos removidos propositalmente:
- ❌ Ícones decorativos excessivos
- ❌ Cores múltiplas
- ❌ Sombras ou gradientes complexos
- ❌ Animações chamativas

Mantido apenas:
- ✅ Números grandes (hierarquia)
- ✅ Linha vertical (conexão)
- ✅ Tipografia forte (clareza)

---

### 3. Frase Final como Manifesto

A frase final funciona como **anti-manifesto**:
- Rejeita promessas vagas
- Rejeita jargão corporativo
- Afirma posicionamento técnico

**Tom**: Sério, direto, sem concessões.

---

## 🚀 Performance

### Otimizações

```tsx
// Zero JavaScript (exceto scroll detection do Header)
// Apenas CSS puro para layout e estilos

// Flexbox para layout vertical
className="flex flex-col items-center"

// Space-y para espaçamento consistente
className="space-y-12"
```

**Benefícios**:
- Zero overhead de JavaScript para timeline
- CSS puro = renderização rápida
- Flexbox = layout eficiente

---

### Lazy Loading (Não Necessário)

Esta seção não usa imagens ou recursos pesados, então lazy loading não é necessário. Todo o conteúdo é texto e elementos CSS.

---

## 📝 Notas de Manutenção

### Atualizar Descrição de uma Etapa

1. Localize a etapa no JSX
2. Edite o `<p>` da descrição
3. Mantenha descrição técnica (1-2 frases)

```tsx
<p className="text-neutral-600 leading-relaxed text-lg">
  Nova descrição técnica da etapa em linguagem direta.
</p>
```

---

### Mudar Ordem das Etapas

Para trocar ordem (ex: colocar "Implementação" antes de "Redesenho"):

1. Ajuste os números nos círculos
2. Reordene os blocos JSX
3. Mantenha linha vertical em todas exceto a última

---

### Adicionar Subtítulo à Seção

```tsx
<div className="text-center mb-20">
  <h2 className="text-4xl md:text-5xl font-bold text-primary-slate mb-4">
    Processo de Engenharia
  </h2>
  <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
    Novo subtítulo explicativo
  </p>
</div>
```

---

## 🎨 Variações de Copy

### Frase Final - Alternativas

**Opção Atual** (anti-marketing):
```
Sem promessa vaga.
Sem buzzword.
Engenharia aplicada à operação real.
```

**Opção 2** (declarativa):
```
Processo estruturado.
Arquitetura validada.
Resultados mensuráveis.
```

**Opção 3** (técnica):
```
Análise rigorosa.
Implementação incremental.
Evolução baseada em dados.
```

---

## 📚 Referências

- [Tailwind Flexbox](https://tailwindcss.com/docs/flex) - Layout vertical
- [CSS Timeline Patterns](https://csslayout.io/patterns/) - Padrões de timeline
- Design inspirado em processos de consultoria técnica (McKinsey, BCG flows)

---

**Última atualização**: 18 de fevereiro de 2026  
**Autor**: Fluxen Labs Design System  
**Versão**: 1.0.0
