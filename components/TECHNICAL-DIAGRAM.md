# 🎨 Technical Diagram - Documentação

## Visão Geral

Diagrama SVG animado que mostra o fluxo de dados: **WhatsApp → Engine → ERP**

---

## 🎨 Estrutura Visual

```
     [W]  ═══════►  [⬡]  ═══════►  [E]
  WhatsApp         Engine          ERP
     
  Linhas: accent-cyan (#06B6D4)
  Nós:    primary-purple (#6D28D9)
```

---

## 📐 Elementos do Diagrama

### 1. Nós (Círculos)

Cada nó tem 3 camadas:

```tsx
<g>
  {/* Camada 1: Glow externo (ping animation) */}
  <circle r="40" fill="primary-purple" opacity="0.1" />
  
  {/* Camada 2: Círculo médio */}
  <circle r="30" fill="primary-purple" opacity="0.2" />
  
  {/* Camada 3: Círculo principal */}
  <circle r="20" fill="primary-purple" />
  
  {/* Ícone/Label */}
  <text>W</text>
</g>
```

**Tamanhos**:
- WhatsApp: 20px radius
- Engine: 25px radius (maior, central)
- ERP: 20px radius

### 2. Linhas de Conexão

```tsx
{/* Linha principal (sólida) */}
<path stroke="#06B6D4" strokeWidth="2" />

{/* Linhas decorativas (tracejadas) */}
<path stroke="#06B6D4" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
```

### 3. Partículas em Movimento

```tsx
<circle cx="200" cy="200" r="3" fill="#06B6D4">
  <animate
    attributeName="cx"
    from="150"
    to="300"
    dur="2s"
    repeatCount="indefinite"
  />
</circle>
```

**Velocidade**: 2 segundos por trajeto

### 4. Labels de Texto

```tsx
<text
  x="150"
  y="260"
  textAnchor="middle"
  fill="#64748B"
  fontSize="14"
  fontWeight="500"
>
  WhatsApp
</text>
```

### 5. Métricas Decorativas

```tsx
<div className="bg-primary-slate/80 backdrop-blur-sm px-3 py-1 rounded border">
  <span className="font-mono text-xs">~100ms</span>
</div>
```

---

## ✨ Animações

### Ping (Círculos Externos)
```css
animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
```
- **Duração**: 3s
- **Delays**: 0s, 0.5s, 1s (cada nó)
- **Efeito**: Expand + fade

### Pulse (Linhas)
```css
animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```
- **Duração**: 3s
- **Efeito**: Opacity fade in/out

### Flow (Partículas)
```svg
<animate
  attributeName="cx"
  from="150" to="300"
  dur="2s"
  repeatCount="indefinite"
/>
```
- **Duração**: 2s
- **Efeito**: Movimento linear nas linhas

---

## 🎨 Cores

```css
/* Nós */
primary-purple:    #6D28D9
brand-purple:      #5B21B6
white:             #FFFFFF

/* Linhas */
accent-cyan:       #06B6D4

/* Labels */
neutral-500:       #64748B

/* Métricas */
accent-cyan:       #06B6D4 (latência)
accent-green:      #10B981 (uptime)
```

---

## 📏 Dimensões

```
ViewBox: 600 × 400
Container: 100% width, auto height
Min-height: 400px (mobile) / 500px (desktop)

Posições dos nós (x, y):
- WhatsApp: (150, 200)
- Engine:   (300, 200)
- ERP:      (450, 200)
```

---

## 🔧 Customização

### Alterar Cores dos Nós

```tsx
// Trocar primary-purple por outra cor
<circle fill="#SUA_COR" />
```

### Alterar Velocidade de Animação

```tsx
// Ping
className="animate-ping-slow" // 3s (atual)
className="animate-ping"      // 1s (rápido)

// Flow
dur="2s"  // Atual
dur="1s"  // Mais rápido
dur="4s"  // Mais lento
```

### Adicionar Novo Nó

```tsx
{/* Novo nó em x=350, y=250 */}
<g>
  <circle cx="350" cy="250" r="20" fill="#6D28D9" />
  <text x="350" y="310">Novo Sistema</text>
</g>

{/* Nova linha de conexão */}
<path d="M 300 200 L 350 250" stroke="#06B6D4" strokeWidth="2" />
```

### Alterar Labels

```tsx
<text x="150" y="260">
  Seu Label Aqui
</text>
```

---

## 📊 Elementos Decorativos

### Grid de Fundo
```tsx
<div className="absolute inset-0 opacity-5">
  <div className="h-px bg-accent-cyan" /> {/* Top */}
  <div className="h-px bg-accent-cyan" /> {/* Bottom */}
  <div className="w-px bg-accent-cyan" /> {/* Left */}
  <div className="w-px bg-accent-cyan" /> {/* Right */}
</div>
```

### Badges de Métricas
```tsx
<div className="absolute -top-4 left-1/4">
  <div className="bg-primary-slate/80 backdrop-blur-sm px-3 py-1 rounded border">
    <span className="font-mono text-xs">~100ms</span>
  </div>
</div>
```

---

## 🎯 Boas Práticas

### Performance
- Use SVG nativo para melhor performance
- Limite animações a 2-3 elementos principais
- Use `will-change` com moderação

### Acessibilidade
- Adicione `aria-label` ao SVG
- Inclua descrição alternativa
- Garanta contraste mínimo 4.5:1

### Responsividade
- Use `viewBox` para escalar automaticamente
- Teste em diferentes tamanhos de tela
- Ajuste `min-height` para mobile

---

## 📱 Versão Simplificada (Mobile)

Para versão mobile, considere:
- Reduzir número de elementos decorativos
- Simplificar animações
- Aumentar tamanho dos nós
- Reduzir texto dos labels

```tsx
{/* Versão mobile */}
<div className="md:hidden">
  <TechnicalDiagramSimple />
</div>

{/* Versão desktop */}
<div className="hidden md:block">
  <TechnicalDiagram />
</div>
```

---

## 🔍 Debugging

### Ver Bounding Box
```tsx
<rect x="0" y="0" width="600" height="400" fill="none" stroke="red" />
```

### Ver Posições dos Nós
```tsx
{/* Adicionar círculos de debug */}
<circle cx="150" cy="200" r="2" fill="red" />
<circle cx="300" cy="200" r="2" fill="red" />
<circle cx="450" cy="200" r="2" fill="red" />
```

### Console Log de Animações
```tsx
useEffect(() => {
  console.log('Animation started');
}, []);
```

---

## 📋 Checklist

- [ ] Nós renderizando corretamente
- [ ] Linhas conectando nós
- [ ] Animações rodando suavemente
- [ ] Labels visíveis e legíveis
- [ ] Métricas posicionadas corretamente
- [ ] Responsive em mobile
- [ ] Cores corretas (cyan lines, purple nodes)
- [ ] Performance aceitável (60fps)

---

**Componente**: [TechnicalDiagram.tsx](TechnicalDiagram.tsx)  
**Design System**: Fluxen Labs  
**Última atualização**: 18/02/2026
