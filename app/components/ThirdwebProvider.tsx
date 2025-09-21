'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { ethers } from 'ethers'

// Extend Window interface to include ethereum
declare global {
  interface Window {
    ethereum?: any
  }
}

interface WalletContextType {
  account: string | null
  connect: () => Promise<void>
  disconnect: () => void
  isConnected: boolean
  provider: ethers.providers.Web3Provider | null
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider')
  }
  return context
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<string | null>(null)
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  const isMetaMaskInstalled = () => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
  }

  useEffect(() => {
    // Check if MetaMask is installed
    if (isMetaMaskInstalled()) {
      console.log('MetaMask detected, initializing provider...')
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum!)
      setProvider(ethProvider)
      
      // Check if already connected
      checkConnection(ethProvider)
      
      // Listen for account changes
      window.ethereum!.on('accountsChanged', handleAccountsChanged)
      window.ethereum!.on('chainChanged', () => window.location.reload())
    } else {
      console.warn('MetaMask not detected')
    }
  }, [])

  const checkConnection = async (providerInstance?: ethers.providers.Web3Provider) => {
    const currentProvider = providerInstance || provider
    if (currentProvider) {
      try {
        const accounts = await currentProvider.listAccounts()
        if (accounts.length > 0) {
          setAccount(accounts[0])
          setIsConnected(true)
        }
      } catch (error) {
        console.error('Error checking connection:', error)
      }
    }
  }

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      setAccount(null)
      setIsConnected(false)
    } else {
      setAccount(accounts[0])
      setIsConnected(true)
    }
  }

  const connect = async () => {
    console.log('Connect function called')
    
    if (!isMetaMaskInstalled()) {
      console.error('MetaMask not installed')
      alert('Please install MetaMask browser extension!')
      window.open('https://metamask.io/download/', '_blank')
      return
    }

    try {
      console.log('Requesting accounts...')
      // Request account access
      const accounts = await window.ethereum!.request({
        method: 'eth_requestAccounts',
      })
      
      console.log('Accounts received:', accounts)
      
      if (accounts.length > 0) {
        setAccount(accounts[0])
        setIsConnected(true)
        console.log('Connected to account:', accounts[0])
      } else {
        console.error('No accounts returned')
        alert('No accounts found. Please check your MetaMask.')
      }
    } catch (error: any) {
      console.error('Error connecting wallet:', error)
      if (error.code === 4001) {
        alert('Connection rejected by user.')
      } else if (error.code === -32002) {
        alert('Connection request already pending. Please check MetaMask.')
      } else {
        alert('Failed to connect wallet: ' + (error.message || 'Unknown error'))
      }
    }
  }

  const disconnect = () => {
    setAccount(null)
    setIsConnected(false)
  }

  const value = {
    account,
    connect,
    disconnect,
    isConnected,
    provider
  }

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  )
} 