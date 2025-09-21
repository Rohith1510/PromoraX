'use client'

import { ConnectWallet } from './ConnectWallet'
import { useWallet } from './WalletProvider'
import Link from 'next/link'
import { Sparkles, Bot } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from '../../components/ui/resizable-navbar'

export function ResizableNavigation() {
  const { account } = useWallet()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Explore', link: '/explore' },
    { name: 'Submit', link: '/submit' },
    { name: 'Verify', link: '/bhindi-agent' },
    ...(account ? [{ name: 'Dashboard', link: '/dashboard' }] : []),
  ]

  return (
    <Navbar className="fixed top-0 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Promptora Logo" 
              width={42} 
              height={42} 
            />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">PromoraX</span>
          </Link>
        </div>

        {/* Navigation Items */}
        <NavItems items={navItems} />

        {/* Connect Wallet */}
        <div className="flex items-center relative z-10">
          <ConnectWallet />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="Promptora Logo" 
                width={32} 
                height={32} 
              />
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">PromoraX</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col space-y-4 w-full">
            <Link 
              href="/explore" 
              className="text-white hover:text-black transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link 
              href="/submit" 
              className="text-white hover:text-black transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Submit
            </Link>
            <Link 
              href="/bhindi-agent" 
              className="flex items-center space-x-1 text-white hover:text-black transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Bot className="h-4 w-4" />
              <span>Bhindi Agent</span>
            </Link>
            {account && (
              <Link 
                href="/dashboard" 
                className="text-white hover:text-black transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <div className="pt-4 border-t border-gray-200">
              <ConnectWallet />
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
