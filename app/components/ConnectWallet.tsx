'use client'

import { useWallet } from './WalletProvider'

export function ConnectWallet() {
  const { account, connect, disconnect, isConnected } = useWallet()

  const handleConnect = async () => {
    console.log('Connect button clicked')
    try {
      await connect()
    } catch (error) {
      console.error('Connection error:', error)
    }
  }

  const handleDisconnect = () => {
    console.log('Disconnect button clicked')
    disconnect()
  }

  if (isConnected && account) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {account.slice(0, 6)}...{account.slice(-4)}
        </span>
        <button
          onClick={handleDisconnect}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors relative z-10"
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={handleConnect}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors relative z-10 pointer-events-auto"
    >
      Connect Wallet
    </button>
  )
} 