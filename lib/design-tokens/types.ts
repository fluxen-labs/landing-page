/**
 * Tipos TypeScript para o Sistema de Cores Fluxen Labs
 * Fornece autocomplete e type safety ao usar o sistema de cores
 */

import type { colors, gradients, colorRules } from './colors';

// ============================================
// TIPOS BÁSICOS
// ============================================

export type Colors = typeof colors;
export type Gradients = typeof gradients;
export type ColorRules = typeof colorRules;

// ============================================
// TIPOS PARA CORES INDIVIDUAIS
// ============================================

export type BrandColor = keyof typeof colors.brand;
export type PrimaryColor = keyof typeof colors.primary;
export type NeutralColor = keyof typeof colors.neutral;
export type AccentColor = keyof typeof colors.accent;

// ============================================
// TIPOS PARA VALORES DE COR
// ============================================

export type ColorValue = 
  | typeof colors.brand[BrandColor]
  | typeof colors.primary[PrimaryColor]
  | typeof colors.neutral[NeutralColor]
  | typeof colors.accent[AccentColor]
  | typeof colors.white;

// ============================================
// TIPOS PARA CLASSES TAILWIND
// ============================================

export type BgColorClass = 
  | 'bg-brand-purple'
  | 'bg-primary-purple'
  | 'bg-primary-slate'
  | 'bg-neutral-900'
  | 'bg-neutral-800'
  | 'bg-neutral-500'
  | 'bg-neutral-100'
  | 'bg-accent-cyan'
  | 'bg-accent-green'
  | 'bg-white';

export type TextColorClass = 
  | 'text-brand-purple'
  | 'text-primary-purple'
  | 'text-primary-slate'
  | 'text-neutral-900'
  | 'text-neutral-800'
  | 'text-neutral-500'
  | 'text-neutral-100'
  | 'text-accent-cyan'
  | 'text-accent-green'
  | 'text-white';

export type BorderColorClass = 
  | 'border-brand-purple'
  | 'border-primary-purple'
  | 'border-primary-slate'
  | 'border-neutral-900'
  | 'border-neutral-800'
  | 'border-neutral-500'
  | 'border-neutral-100'
  | 'border-accent-cyan'
  | 'border-accent-green'
  | 'border-white';

export type GradientClass = 
  | 'bg-gradient-to-b from-primary-slate to-neutral-900'
  | 'bg-gradient-hero';

// ============================================
// HELPER TYPES PARA COMPONENTES
// ============================================

/**
 * Props de cor para componentes que aceitam cores customizadas
 */
export interface ColorProps {
  bgColor?: BgColorClass;
  textColor?: TextColorClass;
  borderColor?: BorderColorClass;
}

/**
 * Props para componentes de botão/CTA
 */
export interface CTAColorProps {
  variant?: 'primary' | 'secondary' | 'accent-cyan' | 'accent-green';
}

/**
 * Props para seções com background
 */
export interface SectionColorProps {
  theme?: 'light' | 'dark' | 'hero';
}

// ============================================
// UTILITÁRIOS DE TIPO
// ============================================

/**
 * Extrai o valor de cor a partir do caminho
 * Exemplo: GetColor<'brand.purple'> = '#5B21B6'
 */
export type GetColor<T extends string> = 
  T extends `brand.${infer K extends BrandColor}` ? typeof colors.brand[K] :
  T extends `primary.${infer K extends PrimaryColor}` ? typeof colors.primary[K] :
  T extends `neutral.${infer K extends NeutralColor}` ? typeof colors.neutral[K] :
  T extends `accent.${infer K extends AccentColor}` ? typeof colors.accent[K] :
  T extends 'white' ? typeof colors.white :
  never;

// ============================================
// CONSTANTES HELPER
// ============================================

/**
 * Todas as classes de cor disponíveis
 */
export const ALL_BG_COLORS: BgColorClass[] = [
  'bg-brand-purple',
  'bg-primary-purple',
  'bg-primary-slate',
  'bg-neutral-900',
  'bg-neutral-800',
  'bg-neutral-500',
  'bg-neutral-100',
  'bg-accent-cyan',
  'bg-accent-green',
  'bg-white',
];

export const ALL_TEXT_COLORS: TextColorClass[] = [
  'text-brand-purple',
  'text-primary-purple',
  'text-primary-slate',
  'text-neutral-900',
  'text-neutral-800',
  'text-neutral-500',
  'text-neutral-100',
  'text-accent-cyan',
  'text-accent-green',
  'text-white',
];

// ============================================
// TIPOS DE VALIDAÇÃO
// ============================================

/**
 * Valida se uma string é uma cor hexadecimal válida
 */
export type HexColor = `#${string}`;

/**
 * Valida se uma cor é permitida (não pode ser #000000)
 */
export type ValidColor<T extends HexColor> = 
  T extends '#000000' ? never : T;
