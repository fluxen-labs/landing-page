# Fluxen Labs - Landing Page B2B

Landing page para consultoria de engenharia especializada em automação e integração de sistemas industriais.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript** (strict mode)
- **Tailwind CSS** para estilização
- **Inter** como fonte principal

## Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout raiz com metadata
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globais
├── components/
│   └── sections/
│       ├── Hero.tsx         # Hero com proposta de valor
│       ├── Problem.tsx      # Problemas que resolvemos
│       ├── Offer.tsx        # Oferta principal
│       ├── Method.tsx       # Metodologia de trabalho
│       ├── Services.tsx     # Camadas de serviço
│       ├── CTA.tsx          # Call-to-action com formulário
│       └── Footer.tsx       # Footer institucional
└── tailwind.config.ts       # Configuração de cores e tema
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Build para Produção

```bash
npm run build
npm start
```

## Características Técnicas

- **TypeScript Strict**: Configuração rigorosa para type safety
- **Mobile-first**: Layout responsivo com breakpoints SM, MD, LG
- **Acessibilidade WCAG AA**: 
  - Navegação por teclado
  - Contraste adequado de cores
  - Labels semânticos em formulários
  - ARIA labels onde necessário
- **SEO**: Metadata configurado no layout
- **Sem dependências externas**: Apenas Next.js, React e Tailwind

## Sistema de Cores

O projeto utiliza o sistema de cores oficial da Fluxen Labs:

- **Brand Purple** (#5B21B6): Identidade da marca, logo
- **Primary Purple** (#6D28D9): CTAs principais, elementos interativos
- **Primary Slate** (#0F172A): Backgrounds escuros, hero sections
- **Neutral 900** (#1E293B): Backgrounds secundários escuros
- **Neutral 800** (#334155): Títulos e textos principais
- **Neutral 500** (#64748B): Textos secundários, labels
- **Neutral 100** (#F1F5F9): Backgrounds claros, cards
- **White** (#FFFFFF): Base, texto sobre fundos escuros
- **Accent Cyan** (#06B6D4): Badges técnicos, ícones
- **Accent Green** (#10B981): Estados de sucesso, verificações

Todas as cores seguem contraste mínimo WCAG AA (4.5:1).

## Próximos Passos (não implementados)

- Integração com ferramenta de analytics
- Backend para processamento de formulário
- Políticas de privacidade e termos de uso

## Estrutura de Conteúdo

1. **Hero**: Proposta de valor clara e direta
2. **Problema**: 4 pontos de dor do público-alvo
3. **Oferta**: Projeto fechado com preço e entregáveis
4. **Método**: 4 fases com anti-escopo infinito
5. **Serviços**: 3 camadas técnicas
6. **CTA**: Formulário de contato direto
7. **Footer**: Informações institucionais

## Licença

Proprietary - Fluxen Labs © 2026
