/**
 * Fluxen Labs - Design Tokens
 * Exportações centralizadas do sistema de cores
 */

// Cores e configurações
export { colors, gradients, colorRules } from './colors';
export type { Color, Gradient, ColorRules } from './colors';

// Tipos TypeScript
export type {
  Colors,
  Gradients,
  BrandColor,
  PrimaryColor,
  NeutralColor,
  AccentColor,
  ColorValue,
  BgColorClass,
  TextColorClass,
  BorderColorClass,
  GradientClass,
  ColorProps,
  CTAColorProps,
  SectionColorProps,
  GetColor,
  HexColor,
  ValidColor,
} from './types';

export {
  ALL_BG_COLORS,
  ALL_TEXT_COLORS,
} from './types';

// Re-exportar para facilitar importações
export * from './colors';
export * from './types';
