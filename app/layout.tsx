import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fluxen Labs | Engenharia de Automação, Integração e IA Aplicada',
  description: 'Consultoria de engenharia hands-on para automação e integração operacional em ambientes críticos. Projetos fechados, entregas em produção, documentadas e monitoradas.',
  keywords: 'engenharia de automação, integração de sistemas, IA aplicada, consultoria técnica, projetos fechados, operações críticas',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
  },
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
