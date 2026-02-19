# 🔍 Diagnóstico da Realidade - Guia Rápido

## Estrutura

```tsx
<section id="diagnostico" className="bg-white section-spacing">
  <div className="container-custom">
    {/* Cabeçalho */}
    {/* Grid de Cards */}
    {/* Frase de Impacto */}
  </div>
</section>
```

---

## 📝 Textos

### Título
```
"Quando o crescimento supera a estrutura"
```
- 48-60px, font-bold, primary-slate

### Subtítulo
```
"Cenários comuns em empresas que cresceram rápido 
demais para seus processos acompanharem"
```
- 20px, neutral-500

---

## 📋 6 Problemas Listados

1. Pedidos digitados manualmente
2. Informações críticas espalhadas
3. ERP subutilizado
4. Dependência de operadores específicos
5. Erros recorrentes
6. Dados não estruturados

---

## 🎨 Cards

### Estrutura
```tsx
<div className="group p-6 rounded-lg border-2 border-neutral-100 hover:border-primary-purple bg-white transition-all duration-300 hover:shadow-lg">
  {/* Ícone accent-cyan */}
  {/* Título */}
  {/* Descrição */}
</div>
```

### Grid
```
Mobile:   1 coluna
Tablet:   2 colunas
Desktop:  3 colunas
Gap:      24px
```

### Estados
```
Normal: border-neutral-100
Hover:  border-primary-purple + shadow-lg
```

---

## 💬 Frase de Impacto

```
"Se sua operação depende de copiar e colar dados, 
ela ainda não é um sistema."
```

### Design
```tsx
<div className="bg-neutral-100 rounded-lg p-8 relative">
  {/* Barra roxa esquerda */}
  <div className="w-1.5 bg-primary-purple" />
  
  {/* Texto bold 24-32px */}
  <p className="text-2xl md:text-3xl font-bold">...</p>
  
  {/* Complemento */}
  <p className="text-lg text-neutral-500 mt-6">...</p>
</div>
```

---

## 🎨 Cores

```
Background cards:    white
Border normal:       neutral-100
Border hover:        primary-purple
Ícones:             accent-cyan (#06B6D4)
Impacto bg:         neutral-100
Barra lateral:      primary-purple
```

---

## ✨ Efeitos

### Cards
- Hover: border roxo + sombra (300ms)
- Ícones: cyan estático

### Frase
- Sem animações
- Design imponente e estático

---

## 📱 Responsivo

```
Desktop:  3 colunas, título 60px
Tablet:   2 colunas, título 48px
Mobile:   1 coluna, título 36px
```

---

## 🎯 Objetivo

Criar identificação com problemas comuns de empresas em crescimento e preparar para apresentação da solução.
