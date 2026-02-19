# 🔍 Seção: Diagnóstico da Realidade

## Visão Geral

Seção projetada para ressoar com empresas em crescimento rápido que enfrentam problemas operacionais por falta de automação. Usa cards estruturados e uma frase de impacto para criar identificação e urgência.

---

## 🎨 Design Specifications

### Background e Espaçamento
```css
Background: white (#FFFFFF)
Espaçamento: section-spacing (80px mobile / 120px desktop)
Container: max-width 1200px
```

### Cores
```css
Background:        white
Headline:          primary-slate (#0F172A)
Subtítulo:         neutral-500 (#64748B)
Cards border:      neutral-100 (default)
Cards hover:       primary-purple (#6D28D9)
Ícones:           accent-cyan (#06B6D4)
Impacto bg:       neutral-100 (#F1F5F9)
Barra lateral:    primary-purple (#6D28D9)
```

---

## 📝 Conteúdo

### Título Principal
```
"Quando o crescimento supera a estrutura"
```

**Especificações**:
- Tamanho: 48-60px (`text-4xl md:text-5xl`)
- Peso: 700 (`font-bold`)
- Cor: `primary-slate`
- Alinhamento: Centro

### Subtítulo
```
"Cenários comuns em empresas que cresceram rápido 
demais para seus processos acompanharem"
```

**Especificações**:
- Tamanho: 20px (`text-xl`)
- Cor: `neutral-500`
- Max-width: `max-w-2xl`
- Alinhamento: Centro

---

## 📋 Cards de Problemas

### Grid Layout
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**Breakpoints**:
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3 colunas
- Gap: 24px entre cards

### Estrutura do Card

```tsx
<div className="group p-6 rounded-lg border-2 border-neutral-100 hover:border-primary-purple bg-white transition-all duration-300 hover:shadow-lg">
  {/* Ícone */}
  <div className="text-accent-cyan mb-4">
    <svg className="w-8 h-8">...</svg>
  </div>
  
  {/* Título */}
  <h3 className="text-lg font-semibold text-primary-slate mb-3">
    {title}
  </h3>
  
  {/* Descrição */}
  <p className="text-neutral-500 text-sm leading-relaxed">
    {description}
  </p>
</div>
```

### Estados do Card

**Normal**:
- Border: 2px solid `neutral-100`
- Background: `white`
- Shadow: nenhuma

**Hover**:
- Border: 2px solid `primary-purple`
- Background: `white`
- Shadow: `shadow-lg`
- Transition: 300ms

### Lista de Problemas

1. **Pedidos digitados manualmente**
   - Ícone: Lápis/Edição
   - Descrição: "Informações copiadas de WhatsApp para planilhas e depois para o ERP"

2. **Informações críticas espalhadas**
   - Ícone: Mensagens
   - Descrição: "Dados importantes perdidos em conversas de WhatsApp e e-mails"

3. **ERP subutilizado**
   - Ícone: Documento
   - Descrição: "Sistema pago mensalmente mas usado apenas como cadastro básico"

4. **Dependência de operadores específicos**
   - Ícone: Usuários
   - Descrição: "Processos que só funcionam se determinada pessoa estiver disponível"

5. **Erros recorrentes**
   - Ícone: Alerta
   - Descrição: "Retrabalho constante por falta de validação automática de dados"

6. **Dados não estruturados**
   - Ícone: Gráficos
   - Descrição: "Impossibilidade de gerar relatórios confiáveis para tomada de decisão"

---

## 💬 Frase de Impacto

### Conteúdo
```
"Se sua operação depende de copiar e colar dados, 
ela ainda não é um sistema."
```

**Complemento**:
```
"É hora de transformar processos manuais em 
arquitetura automatizada."
```

### Estrutura Visual

```tsx
<div className="bg-neutral-100 rounded-lg p-8 md:p-10 relative overflow-hidden">
  {/* Barra lateral roxa */}
  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-purple" />
  
  <div className="pl-6">
    <p className="text-2xl md:text-3xl font-bold text-primary-slate leading-tight">
      {frase principal}
    </p>
    <p className="text-neutral-500 mt-6 text-lg">
      {complemento}
    </p>
  </div>
</div>
```

### Design Elements

**Container**:
- Background: `neutral-100` (#F1F5F9)
- Padding: 32px (mobile) / 40px (desktop)
- Border-radius: `lg` (8px)
- Max-width: `max-w-4xl`
- Margin: Centro

**Barra Lateral**:
- Posição: Esquerda absoluta
- Largura: 6px (`w-1.5`)
- Altura: 100%
- Cor: `primary-purple` (#6D28D9)

**Tipografia**:
- Frase principal: 24-32px, `font-bold`, `primary-slate`
- Complemento: 18px, `neutral-500`
- Espaçamento: 24px entre frases

---

## 🎨 Ícones SVG

### Especificações
```css
Tamanho:   32px × 32px (w-8 h-8)
Cor:       accent-cyan (#06B6D4)
Stroke:    2px
Fill:      none
```

### Set de Ícones Heroicons

Todos os ícones são da biblioteca **Heroicons** (outline):

1. **Lápis** - `pencil-alt`
2. **Mensagens** - `chat-alt`
3. **Documento** - `document-text`
4. **Usuários** - `user-group`
5. **Alerta** - `exclamation-circle`
6. **Gráficos** - `chart-bar`

---

## 📱 Responsividade

### Desktop (≥ 1024px)
- Título: 60px
- Grid: 3 colunas
- Impacto: 32px
- Padding: 40px

### Tablet (768px - 1023px)
- Título: 48px
- Grid: 2 colunas
- Impacto: 28px
- Padding: 32px

### Mobile (< 768px)
- Título: 36px
- Grid: 1 coluna
- Impacto: 24px
- Padding: 32px

---

## 💻 Código Completo

### Importação
```tsx
// Seção já está em app/page.tsx
// Não requer importações adicionais
```

### Estrutura
```tsx
<section id="diagnostico" className="bg-white section-spacing">
  <div className="container-custom">
    {/* Cabeçalho */}
    <div className="text-center mb-16">
      <h2>Título</h2>
      <p>Subtítulo</p>
    </div>

    {/* Grid de Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {/* Cards */}
    </div>

    {/* Frase de Impacto */}
    <div className="max-w-4xl mx-auto">
      {/* Citação destacada */}
    </div>
  </div>
</section>
```

---

## 🎯 Objetivos da Seção

### 1. Identificação
Empresas devem se reconhecer nos problemas listados

### 2. Validação
Confirmar que os problemas são reais e comuns

### 3. Urgência
Criar senso de necessidade de mudança

### 4. Autoridade
Demonstrar compreensão profunda dos desafios

### 5. Transição
Preparar mentalmente para a solução (próxima seção)

---

## 🎨 Princípios de Design

### Clareza
- Cards com descrições diretas e específicas
- Ícones ilustrativos óbvios
- Hierarquia visual clara

### Empatia
- Linguagem que reconhece a dor
- Sem julgamento ou tom superior
- Foco em crescimento, não em falhas

### Impacto Visual
- Frase destacada com barra roxa
- Hover states sutis mas perceptíveis
- Espaçamento generoso

### Profissionalismo
- Design limpo e minimalista
- Cores da marca aplicadas estrategicamente
- Tipografia forte e legível

---

## ✨ Efeitos e Animações

### Cards (Hover)
```css
Border: neutral-100 → primary-purple (300ms)
Shadow: none → shadow-lg (300ms)
Transform: none
```

### Ícones
```css
Cor: accent-cyan (estática)
Sem animações
```

### Frase de Impacto
```css
Sem animações
Estática e imponente
```

---

## 📊 Métricas de Sucesso

### Engajamento
- Tempo na seção: > 15 segundos
- Scroll depth: 100% da seção
- Hover em cards: > 2 cards

### Conversão
- Cliques em CTA após seção: aumento esperado
- Taxa de bounce: redução esperada
- Leitura completa da frase: 80%+

---

## 🔧 Customização

### Adicionar Novo Card
```tsx
{
  title: 'Novo Problema',
  description: 'Descrição do problema',
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
    </svg>
  ),
}
```

### Alterar Frase de Impacto
Editar [app/page.tsx](../app/page.tsx) na seção de frase de impacto

### Modificar Cores do Card
```css
/* Normal */
border-neutral-100

/* Hover */
hover:border-primary-purple     /* Trocar cor aqui */
```

---

## 📋 Checklist de Qualidade

- [x] Background branco
- [x] Espaçamento amplo (120px desktop / 80px mobile)
- [x] Título impactante
- [x] 6 cards de problemas
- [x] Cards com borda sutil (neutral-100)
- [x] Hover muda borda para roxo
- [x] Ícones em accent-cyan
- [x] Frase de impacto destacada
- [x] Barra lateral roxa na frase
- [x] Tipografia forte e legível
- [x] Responsivo em todos os breakpoints
- [x] Sem erros de compilação

---

## 🎬 Próxima Seção Sugerida

Após diagnosticar os problemas, a próxima seção lógica seria:

**"Como Resolvemos"** ou **"Nossa Metodologia"**
- Apresentar a solução
- Explicar o processo
- Mostrar benefícios tangíveis
- CTAs de conversão

---

**Seção**: Diagnóstico da Realidade  
**Design System**: Fluxen Labs  
**Última atualização**: 18/02/2026
