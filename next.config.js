/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ipfs.io', 'gateway.ipfs.io', 'cloudflare-ipfs.com'],
  },
  webpack: (config, { webpack }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      process: require.resolve('process/browser'),
      buffer: require.resolve('buffer'),
    };
    
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
    );
    
    return config;
  },
}

module.exports = nextConfig 