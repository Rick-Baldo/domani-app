import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Domani.AI — IA aplicada à experiência e crescimento comercial',
  description:
    'IA, Bots e Automação para Atendimento e Vendas para grandes empresas. Produto + Squad especializado em IA, automação e estratégia.',
  keywords: 'IA, automação, atendimento, vendas, chatbot, inteligência artificial, Domani',
  openGraph: {
    title: 'Domani.AI — Bem-vindo à Era da IA',
    description: 'IA aplicada à experiência e crescimento comercial',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-domani-dark text-white antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
