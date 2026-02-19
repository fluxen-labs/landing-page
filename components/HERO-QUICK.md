# 🚀 Hero Section - Guia Rápido

## Estrutura

```tsx
<section className="bg-gradient-to-b from-primary-slate to-neutral-900 min-h-screen flex items-center pt-16">
  <div className="container-custom py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Texto */}
      {/* Diagrama */}
    </div>
  </div>
</section>
```

---

## 📝 Textos

### Headline
```
"Engenharia operacional para empresas que cresceram 
mais rápido que seus processos."
```
- 48-60px, peso 700, branco

### Subtítulo  
```
"Projetamos arquiteturas inteligentes que integram 
WhatsApp, ERP e dados estruturados para eliminar 
gargalos operacionais."
```
- 18-20px, neutral-500, line-height 1.6

---

## 🔘 CTAs

### Principal
```tsx
<a href="#diagnostico" className="bg-primary-purple hover:bg-brand-purple text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-brand-purple/30">
  Solicitar Diagnóstico Técnico →
</a>
```

### Secundário
```tsx
<a href="#metodologia" className="text-accent-cyan hover:text-accent-cyan/80 px-8 py-4">
  Ver como funciona →
</a>
```

---

## 🎨 Diagrama Técnico

```tsx
import { TechnicalDiagram } from '@/components/TechnicalDiagram';

<TechnicalDiagram />
```

**Elementos**:
- 3 nós: WhatsApp → Engine → ERP
- Linhas: accent-cyan (#06B6D4)
- Pontos: primary-purple (#6D28D9)
- Animações: ping, pulse, flow

---

## 📊 Trust Indicators

```tsx
<div className="flex gap-6 pt-8 border-t border-neutral-800">
  <div>● 99.9% uptime</div>
  <div>● <100ms latência</div>
  <div>● 24/7 monitorado</div>
</div>
```

Cores dos dots:
- Verde (pulse): uptime
- Cyan: latência  
- Roxo: monitoramento

---

## 📱 Layout Responsivo

```
Desktop:  [Texto 50%] [Diagrama 50%]
Mobile:   [Texto 100%]
          [Diagrama 100%]
```

---

## 🎨 Cores

```
Gradiente:     #0F172A → #1E293B
Headline:      #FFFFFF
Subtítulo:     #64748B
CTA Primary:   #6D28D9 → #5B21B6 (hover)
CTA Secondary: #06B6D4
```

---

## ✨ Efeitos

- CTA sombra roxa: `shadow-brand-purple/30` (hover)
- Ícone secundário: move 4px direita (hover)
- Diagrama: animações 2-3s infinite
- Trust dot verde: pulse animation
