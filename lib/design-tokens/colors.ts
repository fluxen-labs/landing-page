/**
 * Fluxen Labs - Design Tokens
 * Sistema de cores oficial da marca
 * 
 * REGRAS OBRIGATÓRIAS:
 * ❌ Nunca usar preto puro (#000000)
 * ❌ Nunca usar roxo em backgrounds grandes
 * ✅ Hero deve usar gradiente: linear-gradient(180deg, #0F172A 0%, #1E293B 100%)
 * ✅ CTA principal: primary-purple (#6D28D9)
 * ✅ Hover CTA: brand-purple (#5B21B6)
 * ✅ Seções alternadas: neutral-100 ou neutral-900
 */

export const colors = {
  brand: {
    purple: '#5B21B6',
  },
  primary: {
    purple: '#6D28D9',
    slate: '#0F172A',
  },
  neutral: {
    900: '#1E293B',
    800: '#334155',
    500: '#64748B',
    100: '#F1F5F9',
  },
  accent: {
    cyan: '#06B6D4',
    green: '#10B981',
  },
  white: '#FFFFFF',
} as const;

/**
 * Gradientes oficiais da marca
 */
export const gradients = {
  hero: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
} as const;

/**
 * Regras de uso de cores
 */
export const colorRules = {
  // Cores para CTAs (Call-to-Action)
  cta: {
    primary: colors.primary.purple,      // CTA principal
    hover: colors.brand.purple,          // Hover em CTA
  },
  
  // Backgrounds por seção
  backgrounds: {
    hero: gradients.hero,                // Hero section
    light: colors.neutral[100],          // Seções claras
    dark: colors.neutral[900],           // Seções escuras
    white: colors.white,                 // Background branco
  },
  
  // Textos
  text: {
    primary: colors.primary.slate,       // Texto principal escuro
    secondary: colors.neutral[500],      // Texto secundário
    inverse: colors.white,               // Texto sobre fundo escuro
    accent: colors.brand.purple,         // Texto destacado
  },
  
  // Destaques e acentos
  accents: {
    cyan: colors.accent.cyan,            // Destaques cyan
    green: colors.accent.green,          // Destaques green
    purple: colors.brand.purple,         // Destaques roxos (use com moderação)
  },
} as const;

/**
 * Helper para acessar cores via JavaScript
 */
export type Color = typeof colors;
export type Gradient = typeof gradients;
export type ColorRules = typeof colorRules;
