/**
 * Header - Fluxen Labs
 * Menu enxuto + botão fixo de diagnóstico (WhatsApp)
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_DIAGNOSTICO_URL } from '@/lib/contato';

const navItems = [
  { label: 'Para quem é', href: '/#para-quem-e' },
  { label: 'Como trabalhamos', href: '/#como-trabalhamos' },
  { label: 'Diagnóstico', href: '/#diagnostico' },
  { label: 'Contato', href: '/#contato' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-slate border-b border-neutral-800">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative w-8 h-8 md:w-9 md:h-9">
              <Image src="/icon.svg" alt="" fill className="object-contain" priority />
            </span>
            <span className="text-lg md:text-xl font-semibold text-white">Fluxen Labs</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-100/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_DIAGNOSTICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-purple hover:bg-brand-purple text-white text-sm font-semibold px-4 py-2 lg:px-5 lg:py-2.5 rounded-md transition-colors"
            >
              Agendar diagnóstico
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-neutral-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-800 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-100/80 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
