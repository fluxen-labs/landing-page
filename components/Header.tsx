/**
 * Header Minimalista e Técnico - Fluxen Labs
 * Design enterprise clean inspirado em Stripe + Vercel
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Diagnóstico', href: '/#diagnostico' },
    { label: 'Soluções', href: '/#construimos' },
    { label: 'Metodologia', href: '/#metodologia' },
    { label: 'Para Quem É', href: '/#clientes' },
    { label: 'Casos', href: '/#casos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary-slate border-b transition-all duration-300 ${
        isScrolled
          ? 'border-neutral-800 shadow-lg'
          : 'border-neutral-800/50'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform group-hover:scale-105">
              <Image
                src="/icon.svg"
                alt="Fluxen Labs"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg md:text-xl font-semibold text-white group-hover:text-brand-purple transition-colors">
              Fluxen Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-neutral-100 hover:text-white hover:bg-neutral-800/50 rounded-md transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Dropdown Ferramentas */}
            <div className="relative">
              {toolsOpen && (
                <div
                  className="fixed inset-0 z-[90]"
                  onClick={() => setToolsOpen(false)}
                />
              )}
              <button
                className="relative z-[91] flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-100 hover:text-white hover:bg-neutral-800/50 rounded-md transition-all duration-200"
                onClick={() => setToolsOpen((prev) => !prev)}
              >
                Ferramentas
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {toolsOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-[100]">
                  <Link
                    href="/anonymize"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-200 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                    onClick={() => setToolsOpen(false)}
                  >
                    <svg className="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Anonymizer IA
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/#agendar-diagnostico"
            className="hidden lg:flex items-center gap-2 bg-primary-purple hover:bg-brand-purple text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-brand-purple/30"
          >
            <span>Agendar Diagnóstico</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>

          {/* Mobile CTA + Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/#agendar-diagnostico"
              className="bg-primary-purple hover:bg-brand-purple text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Agendar
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 hover:bg-neutral-800/50 rounded-md transition-colors"
              aria-label="Menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-800 py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-neutral-100 hover:text-white hover:bg-neutral-800/50 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* Ferramentas mobile */}
              <div className="px-4 pt-2 pb-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-1">Ferramentas</p>
                <Link
                  href="/anonymize"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-neutral-100 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Anonymizer IA
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
