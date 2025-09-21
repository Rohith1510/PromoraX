'use client'

import { ConnectWallet } from './components/ConnectWallet'
import { useWallet } from './components/WalletProvider'
import Link from 'next/link'
import { Sparkles, Shield, Coins, Users, ArrowRight, Star, Lock } from 'lucide-react'
import { HeroAnimation } from './components/HeroAnimation'
import PromptPassMinter from './components/PromptPassMinter'
import { LampDemo } from './components/LampDemo'
import { WobbleCardDemo } from './components/WobbleCardDemo'
import { WarpHero } from './components/WarpHero'

export default function Home() {
  const { account } = useWallet()

  return (
    <div className="min-h-screen">
      {/* Warp Background Hero Section */}
      <WarpHero />

      {/* Lamp Effect Section */}
      <section className="w-full">
        <LampDemo />
      </section>

      {/* Wobble Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-white mb-4">
              Explore Our Features
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Discover the power of our AI prompt marketplace with these interactive feature cards
            </p>
          </div>
          <WobbleCardDemo />
        </div>
      </section>

      {/* Prompt Pass Section */}
      {account && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary-50 to-primary-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Unlock Premium Content
              </h2>
              <p className="text-gray-600 text-lg">
                Get your free Prompt Pass NFT to access exclusive AI prompts and features
              </p>
            </div>
            <PromptPassMinter />
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Promptora?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ZK-Powered Voting</h3>
              <p className="text-gray-600">
                Sybil-resistant voting using zero-knowledge proofs. One person, one vote, guaranteed.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">NFT-Gated Access</h3>
              <p className="text-gray-600">
                Premium prompts unlocked only with PromptPass NFT. Exclusive content for holders.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Coins className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Chain Tipping</h3>
              <p className="text-gray-600">
                Earn ETH directly from your prompts. Instant payments on Base network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">1,000+</div>
              <div className="text-gray-600">Prompts Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">500+</div>
              <div className="text-gray-600">Active Creators</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50 ETH</div>
              <div className="text-gray-600">Total Tips Sent</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10,000</div>
              <div className="text-gray-600">ZK Votes Cast</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the Future?
          </h2>
          <p className="text-primary-100 mb-8">
            Connect your wallet and start exploring the world's first ZK-powered AI prompt marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConnectWallet />
            <Link href="/explore" className="btn-outline bg-white text-primary-600 hover:bg-gray-50">
              Browse Prompts
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary-400" />
                <span className="text-lg font-bold">Promptora</span>
              </div>
              <p className="text-gray-400">
                The future of AI prompt discovery and monetization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/explore" className="hover:text-white transition-colors">Explore</Link></li>
                <li><Link href="/submit" className="hover:text-white transition-colors">Submit</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Promptora. Built with ❤️ on Base network.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 