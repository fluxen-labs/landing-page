import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fluxen Labs | Consultoria de Engenharia e Automação Industrial',
  description: 'Projetos de automação e integração operacional com escopo fechado e previsibilidade técnica. Conectamos seus sistemas industriais e automatizamos processos críticos.',
  keywords: 'automação industrial, integração de sistemas, consultoria de engenharia, projetos técnicos, SCADA, PLC, MES',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
