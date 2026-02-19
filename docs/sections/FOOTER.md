# Footer - Fluxen Labs

## Overview
Footer institucional com estrutura de 3 colunas (Marca, Navegação, Contato) e linha de copyright. Design minimalista com fundo escuro, proporcionando fechamento visual da landing page.

## Design Specifications

### Layout
- **Estrutura**: Grid 3 colunas (desktop) → 1 coluna (mobile)
- **Container**: container-custom
- **Spacing**: py-16 (64px vertical)
- **Gap entre colunas**: gap-12 (48px desktop)
- **Alinhamento**: Left-aligned em todas colunas

### Background
- **Cor**: bg-neutral-900 (#171717)
- **Razão**: Mais leve que primary-slate do CTA Final, criando progressão visual
- **Contraste**: Suficiente para diferenciar do CTA mas manter unidade escura

### Typography

#### Marca (Coluna 1)
```tsx
// Título
text-white font-bold text-xl mb-2
```
- **Tamanho**: 20px (text-xl)
- **Peso**: 700 (font-bold)
- **Cor**: white
- **Spacing**: mb-2 (8px inferior)

```tsx
// Tagline
text-neutral-400 text-sm
```
- **Tamanho**: 14px (text-sm)
- **Cor**: neutral-400 (#A3A3A3)

#### Títulos de Seção (Colunas 2 e 3)
```tsx
text-white font-semibold text-sm mb-4 uppercase tracking-wider
```
- **Tamanho**: 14px (text-sm)
- **Peso**: 600 (font-semibold)
- **Cor**: white
- **Transform**: uppercase (NAVEGAÇÃO, CONTATO)
- **Letter-spacing**: tracking-wider (0.05em)
- **Spacing**: mb-4 (16px inferior)

#### Links de Navegação
```tsx
text-neutral-400 hover:text-white transition-colors text-sm
```
- **Tamanho**: 14px (text-sm)
- **Cor normal**: neutral-400 (#A3A3A3)
- **Cor hover**: white
- **Transição**: transition-colors (150ms)

#### Copyright
```tsx
text-center text-neutral-500 text-sm
```
- **Tamanho**: 14px (text-sm)
- **Cor**: neutral-500 (#737373) - mais sutil que links
- **Alinhamento**: center

### Color Palette
| Elemento | Tailwind Class | Hex | Uso |
|----------|---------------|-----|-----|
| Background | bg-neutral-900 | #171717 | Fundo footer |
| Marca título | text-white | #FFFFFF | "Fluxen Labs" |
| Tagline | text-neutral-400 | #A3A3A3 | "Engenharia Operacional" |
| Títulos seção | text-white | #FFFFFF | "NAVEGAÇÃO", "CONTATO" |
| Links normal | text-neutral-400 | #A3A3A3 | Estado padrão |
| Links hover | text-white | #FFFFFF | Hover/focus |
| Copyright | text-neutral-500 | #737373 | Texto copyright |
| Divider | border-neutral-800 | #262626 | Linha separadora |

## Code Implementation

### Footer Completo
```tsx
{/* Footer */}
<footer className="bg-neutral-900 py-16">
  <div className="container-custom">
    {/* Grid 3 Colunas */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      {/* Coluna 1: Marca */}
      <div>
        <h3 className="text-white font-bold text-xl mb-2">Fluxen Labs</h3>
        <p className="text-neutral-400 text-sm">Engenharia Operacional</p>
      </div>

      {/* Coluna 2: Navegação */}
      <div>
        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegação</h4>
        <nav className="flex flex-col gap-3">
          <a 
            href="#arquitetura" 
            className="text-neutral-400 hover:text-white transition-colors text-sm"
          >
            Arquitetura
          </a>
          <a 
            href="#metodologia" 
            className="text-neutral-400 hover:text-white transition-colors text-sm"
          >
            Metodologia
          </a>
          <a 
            href="#diagnostico" 
            className="text-neutral-400 hover:text-white transition-colors text-sm"
          >
            Diagnóstico
          </a>
        </nav>
      </div>

      {/* Coluna 3: Contato */}
      <div>
        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contato</h4>
        <div className="flex flex-col gap-3">
          <a 
            href="mailto:contato@fluxenlabs.com" 
            className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            contato@fluxenlabs.com
          </a>
          <a 
            href="https://linkedin.com/company/fluxenlabs" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>

    {/* Linha Inferior - Copyright */}
    <div className="pt-8 border-t border-neutral-800">
      <p className="text-center text-neutral-500 text-sm">
        © 2026 Fluxen Labs. Engenharia aplicada à operação.
      </p>
    </div>
  </div>
</footer>
```

## Customization Guide

### Adicionar Mais Links de Navegação

```tsx
{/* Coluna 2: Navegação */}
<div>
  <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegação</h4>
  <nav className="flex flex-col gap-3">
    <a href="#arquitetura" className="text-neutral-400 hover:text-white transition-colors text-sm">
      Arquitetura
    </a>
    <a href="#metodologia" className="text-neutral-400 hover:text-white transition-colors text-sm">
      Metodologia
    </a>
    <a href="#diagnostico" className="text-neutral-400 hover:text-white transition-colors text-sm">
      Diagnóstico
    </a>
    <a href="#para-quem-e" className="text-neutral-400 hover:text-white transition-colors text-sm">
      Para Quem É
    </a>
    <a href="#casos" className="text-neutral-400 hover:text-white transition-colors text-sm">
      Casos de Sucesso
    </a>
  </nav>
</div>
```

### Adicionar Mais Canais de Contato

```tsx
{/* Coluna 3: Contato */}
<div>
  <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contato</h4>
  <div className="flex flex-col gap-3">
    {/* Email */}
    <a 
      href="mailto:contato@fluxenlabs.com" 
      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      contato@fluxenlabs.com
    </a>

    {/* LinkedIn */}
    <a 
      href="https://linkedin.com/company/fluxenlabs" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
      LinkedIn
    </a>

    {/* WhatsApp */}
    <a 
      href="https://wa.me/5511999999999" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      WhatsApp
    </a>

    {/* GitHub */}
    <a 
      href="https://github.com/fluxenlabs" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      GitHub
    </a>
  </div>
</div>
```

### Adicionar 4ª Coluna (Layout 4 colunas)

```tsx
{/* Grid 4 Colunas */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
  {/* Coluna 1: Marca */}
  <div>
    <h3 className="text-white font-bold text-xl mb-2">Fluxen Labs</h3>
    <p className="text-neutral-400 text-sm">Engenharia Operacional</p>
  </div>

  {/* Coluna 2: Produtos */}
  <div>
    <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Produtos</h4>
    <nav className="flex flex-col gap-3">
      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
        Automação WhatsApp
      </a>
      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
        Integração ERP
      </a>
      <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
        IA Operacional
      </a>
    </nav>
  </div>

  {/* Coluna 3: Navegação */}
  <div>
    <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegação</h4>
    <nav className="flex flex-col gap-3">
      <a href="#arquitetura" className="text-neutral-400 hover:text-white transition-colors text-sm">
        Arquitetura
      </a>
      <a href="#metodologia" className="text-neutral-400 hover:text-white transition-colors text-sm">
        Metodologia
      </a>
      <a href="#diagnostico" className="text-neutral-400 hover:text-white transition-colors text-sm">
        Diagnóstico
      </a>
    </nav>
  </div>

  {/* Coluna 4: Contato */}
  <div>
    <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contato</h4>
    <div className="flex flex-col gap-3">
      <a 
        href="mailto:contato@fluxenlabs.com" 
        className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        E-mail
      </a>
      <a 
        href="https://linkedin.com/company/fluxenlabs" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        LinkedIn
      </a>
    </div>
  </div>
</div>
```

### Adicionar Logo/Imagem na Marca

```tsx
{/* Coluna 1: Marca com Logo */}
<div>
  <div className="flex items-center gap-3 mb-2">
    <img 
      src="/logo.svg" 
      alt="Fluxen Labs" 
      className="h-8 w-auto"
    />
    <h3 className="text-white font-bold text-xl">Fluxen Labs</h3>
  </div>
  <p className="text-neutral-400 text-sm">Engenharia Operacional</p>
  
  {/* Opcional: Descrição adicional */}
  <p className="text-neutral-500 text-xs mt-4 max-w-xs">
    Desenvolvemos arquiteturas de automação e integração para empresas B2B em crescimento.
  </p>
</div>
```

### Adicionar Social Links com Ícones Apenas

```tsx
{/* Coluna 3: Contato */}
<div>
  <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contato</h4>
  
  {/* Email */}
  <a 
    href="mailto:contato@fluxenlabs.com" 
    className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 mb-3"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    contato@fluxenlabs.com
  </a>

  {/* Social Icons */}
  <div className="flex gap-4 mt-4">
    <a 
      href="https://linkedin.com/company/fluxenlabs" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors"
      aria-label="LinkedIn"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>
    <a 
      href="https://twitter.com/fluxenlabs" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors"
      aria-label="Twitter"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    </a>
    <a 
      href="https://github.com/fluxenlabs" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors"
      aria-label="GitHub"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
  </div>
</div>
```

### Adicionar Newsletter Signup

```tsx
{/* Após grid 3 colunas, antes da linha copyright */}
<div className="mb-12">
  <div className="max-w-md mx-auto text-center">
    <h4 className="text-white font-semibold text-sm mb-2 uppercase tracking-wider">
      Newsletter
    </h4>
    <p className="text-neutral-400 text-sm mb-4">
      Receba insights sobre arquitetura operacional
    </p>
    <form className="flex gap-2">
      <input
        type="email"
        placeholder="seu@email.com"
        className="flex-1 bg-neutral-800 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple"
      />
      <button
        type="submit"
        className="bg-primary-purple hover:bg-brand-purple text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
      >
        Inscrever
      </button>
    </form>
  </div>
</div>
```

### Variante: Copyright com Links Adicionais

```tsx
{/* Linha Inferior - Copyright com Links */}
<div className="pt-8 border-t border-neutral-800">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-neutral-500 text-sm">
      © 2026 Fluxen Labs. Engenharia aplicada à operação.
    </p>
    
    <div className="flex gap-6">
      <a href="/privacidade" className="text-neutral-500 hover:text-white text-sm transition-colors">
        Privacidade
      </a>
      <a href="/termos" className="text-neutral-500 hover:text-white text-sm transition-colors">
        Termos de Uso
      </a>
      <a href="/cookies" className="text-neutral-500 hover:text-white text-sm transition-colors">
        Cookies
      </a>
    </div>
  </div>
</div>
```

## Responsive Behavior

### Mobile (<768px)
- **Grid**: 1 coluna (stack vertical)
- **Ordem**: Marca → Navegação → Contato
- **Gap**: gap-12 (48px entre seções)
- **Copyright**: Centralizado, sem links adicionais

### Tablet/Desktop (>768px)
- **Grid**: 3 colunas iguais
- **Layout**: md:grid-cols-3
- **Gap**: gap-12 (48px entre colunas)
- **Alinhamento**: Left-aligned em todas colunas

### Breakpoints Customizados
```tsx
{/* 2 colunas no tablet, 3 no desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
  <!-- ... -->
</div>
```

## Accessibility

### Estrutura Semântica
```tsx
<footer className="bg-neutral-900 py-16" role="contentinfo">
  <nav aria-label="Footer Navigation">
    <h4>Navegação</h4>
    <a href="#arquitetura">Arquitetura</a>
    <!-- ... -->
  </nav>
  
  <div aria-label="Contact Information">
    <h4>Contato</h4>
    <!-- ... -->
  </div>
</footer>
```

### Links Externos
- **target="_blank"**: Abre em nova aba
- **rel="noopener noreferrer"**: Segurança e privacidade
- **aria-label**: Para ícones sem texto

### Navegação por Teclado
- **Tab**: Navega entre links
- **Hover**: Estados visuais claros
- **Focus**: Adicionar focus ring

```tsx
// Melhorar acessibilidade com focus visible
<a 
  href="#arquitetura" 
  className="text-neutral-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-primary-purple rounded transition-colors text-sm"
>
  Arquitetura
</a>
```

### Contraste
- **Links**: neutral-400 (#A3A3A3) sobre neutral-900 (#171717) = 4.6:1 ✓ (WCAG AA)
- **Hover**: white (#FFF) sobre neutral-900 = 17.2:1 ✓ (WCAG AAA)
- **Copyright**: neutral-500 (#737373) sobre neutral-900 = 3.5:1 ✓ (WCAG AA para texto grande)

## SVG Icons Reference

### Email Icon
```tsx
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
```

### LinkedIn Icon
```tsx
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
</svg>
```

### WhatsApp Icon
```tsx
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
</svg>
```

### GitHub Icon
```tsx
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
</svg>
```

### Twitter/X Icon
```tsx
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
</svg>
```

## Technical Considerations

### Performance
- **SVG inline**: 0 requisições HTTP adicionais
- **Sem imagens**: Load instantâneo
- **CSS puro**: Tailwind purge remove classes não usadas
- **Links internos**: Navegação rápida via âncoras

### SEO
```tsx
<footer 
  className="bg-neutral-900 py-16" 
  itemScope 
  itemType="https://schema.org/WPFooter"
>
  <nav itemScope itemType="https://schema.org/SiteNavigationElement">
    <h4>Navegação</h4>
    <a href="#arquitetura" itemProp="url">
      <span itemProp="name">Arquitetura</span>
    </a>
  </nav>
  
  <div itemScope itemType="https://schema.org/Organization">
    <span itemProp="name">Fluxen Labs</span>
    <a href="mailto:contato@fluxenlabs.com" itemProp="email">
      contato@fluxenlabs.com
    </a>
  </div>
</footer>
```

### Analytics Tracking
```tsx
<a 
  href="mailto:contato@fluxenlabs.com"
  onClick={() => {
    gtag('event', 'email_click', {
      'event_category': 'contact',
      'event_label': 'footer_email',
      'value': 1
    });
  }}
  className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
>
  <!-- ... -->
</a>
```

## Quality Checklist

### Visual ✓
- [ ] Background neutral-900 (#171717)
- [ ] 3 colunas no desktop, 1 no mobile
- [ ] Títulos seção uppercase com tracking-wider
- [ ] Links com hover state (neutral-400 → white)
- [ ] Ícones SVG presentes e alinhados
- [ ] Copyright centralizado
- [ ] Divider linha (border-neutral-800)

### Funcional ✓
- [ ] Todos links href configurados
- [ ] Links externos com target="_blank" + rel
- [ ] Email mailto: funcionando
- [ ] Navegação interna com # âncoras
- [ ] Hover states em todos links
- [ ] Responsive grid funcionando

### Conteúdo ✓
- [ ] Nome correto: "Fluxen Labs"
- [ ] Tagline: "Engenharia Operacional"
- [ ] Email correto: contato@fluxenlabs.com
- [ ] Links sociais atualizados
- [ ] Copyright ano atual: 2026
- [ ] Copyright text: "Engenharia aplicada à operação."

### Acessibilidade ✓
- [ ] Semântica footer correta
- [ ] nav para links de navegação
- [ ] aria-label em ícones
- [ ] Contraste WCAG AA/AAA
- [ ] Navegação por teclado OK
- [ ] Focus states visíveis

### Performance ✓
- [ ] SVG inline (não external)
- [ ] Classes Tailwind otimizadas
- [ ] Sem JavaScript pesado
- [ ] Sem requisições adicionais

---

**Última atualização**: 2026-02-19  
**Versão**: 1.0  
**Autor**: Fluxen Labs Design System
