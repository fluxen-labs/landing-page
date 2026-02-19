/**
 * Header Showcase - Estados e Variações
 * Demonstra diferentes estados do header para testes visuais
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';

// ============================================
// ESTADO NORMAL (Sem Scroll)
// ============================================
export function HeaderNormalState() {
  return (
    <div className="bg-neutral-900 p-8">
      <header className="bg-primary-slate border-b border-neutral-800/50">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.svg"
                  alt="Fluxen Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white">
                Fluxen Labs
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Arquitetura
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Metodologia
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Diagnóstico
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Contato
              </Link>
            </div>

            <Link
              href="#"
              className="flex items-center gap-2 bg-primary-purple text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm"
            >
              <span>Agendar Diagnóstico</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
      <div className="text-center mt-4 text-neutral-500 text-sm">
        Estado Normal - Sem Scroll
      </div>
    </div>
  );
}

// ============================================
// ESTADO SCROLLED (Com Shadow)
// ============================================
export function HeaderScrolledState() {
  return (
    <div className="bg-neutral-900 p-8">
      <header className="bg-primary-slate border-b border-neutral-800 shadow-lg">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.svg"
                  alt="Fluxen Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white">
                Fluxen Labs
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Arquitetura
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Metodologia
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Diagnóstico
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Contato
              </Link>
            </div>

            <Link
              href="#"
              className="flex items-center gap-2 bg-primary-purple text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm"
            >
              <span>Agendar Diagnóstico</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
      <div className="text-center mt-4 text-neutral-500 text-sm">
        Estado Scrolled - Com Shadow
      </div>
    </div>
  );
}

// ============================================
// ESTADO HOVER - Logo
// ============================================
export function HeaderLogoHover() {
  return (
    <div className="bg-neutral-900 p-8">
      <header className="bg-primary-slate border-b border-neutral-800">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 scale-105 transition-transform">
                <Image
                  src="/logo.svg"
                  alt="Fluxen Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-brand-purple transition-colors">
                Fluxen Labs
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Arquitetura
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Metodologia
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Diagnóstico
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Contato
              </Link>
            </div>

            <Link
              href="#"
              className="flex items-center gap-2 bg-primary-purple text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm"
            >
              <span>Agendar Diagnóstico</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
      <div className="text-center mt-4 text-neutral-500 text-sm">
        Estado Hover - Logo (roxo + scale)
      </div>
    </div>
  );
}

// ============================================
// ESTADO HOVER - Menu Item
// ============================================
export function HeaderMenuHover() {
  return (
    <div className="bg-neutral-900 p-8">
      <header className="bg-primary-slate border-b border-neutral-800">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.svg"
                  alt="Fluxen Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white">
                Fluxen Labs
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Arquitetura
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-white bg-neutral-800/50 rounded-md">
                Metodologia
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Diagnóstico
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Contato
              </Link>
            </div>

            <Link
              href="#"
              className="flex items-center gap-2 bg-primary-purple text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm"
            >
              <span>Agendar Diagnóstico</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
      <div className="text-center mt-4 text-neutral-500 text-sm">
        Estado Hover - Menu Item (fundo cinza)
      </div>
    </div>
  );
}

// ============================================
// ESTADO HOVER - CTA Button
// ============================================
export function HeaderCTAHover() {
  return (
    <div className="bg-neutral-900 p-8">
      <header className="bg-primary-slate border-b border-neutral-800">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.svg"
                  alt="Fluxen Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white">
                Fluxen Labs
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Arquitetura
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Metodologia
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Diagnóstico
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-neutral-100 rounded-md">
                Contato
              </Link>
            </div>

            <Link
              href="#"
              className="flex items-center gap-2 bg-brand-purple text-white font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-brand-purple/30"
            >
              <span>Agendar Diagnóstico</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
      <div className="text-center mt-4 text-neutral-500 text-sm">
        Estado Hover - CTA (brand purple + sombra roxa)
      </div>
    </div>
  );
}

// ============================================
// MOBILE VERSION
// ============================================
export function HeaderMobileVersion() {
  return (
    <div className="bg-neutral-900 p-8">
      <div className="max-w-md mx-auto">
        <header className="bg-primary-slate border-b border-neutral-800">
          <nav className="flex items-center justify-between h-16 px-6">
            <Link href="#" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.svg"
                  alt="Fluxen Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold text-white">
                Fluxen Labs
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="bg-primary-purple text-white text-sm font-semibold px-4 py-2 rounded-lg"
              >
                Agendar
              </Link>
              
              <button className="text-white p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="border-t border-neutral-800 py-4 px-6">
            <div className="flex flex-col gap-1">
              <Link href="#" className="px-4 py-3 text-sm font-medium text-neutral-100 rounded-md">
                Arquitetura
              </Link>
              <Link href="#" className="px-4 py-3 text-sm font-medium text-neutral-100 rounded-md">
                Metodologia
              </Link>
              <Link href="#" className="px-4 py-3 text-sm font-medium text-neutral-100 rounded-md">
                Diagnóstico
              </Link>
              <Link href="#" className="px-4 py-3 text-sm font-medium text-neutral-100 rounded-md">
                Contato
              </Link>
            </div>
          </div>
        </header>
        <div className="text-center mt-4 text-neutral-500 text-sm">
          Versão Mobile - Menu Aberto
        </div>
      </div>
    </div>
  );
}
