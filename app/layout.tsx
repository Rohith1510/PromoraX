import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WalletProvider } from './components/WalletProvider'
import { ResizableNavigation } from './components/ResizableNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PromoraX - ZK-Powered AI Prompt Marketplace',
  description: 'Discover, create, and earn from AI prompts with zero-knowledge voting and NFT-gated premium access',
  keywords: 'AI prompts, marketplace, Web3, ZK, NFT, Base network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          <ResizableNavigation />
          {children}
        </WalletProvider>
      </body>
    </html>
  )
} 