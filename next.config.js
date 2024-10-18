const withMDX = require('@next/mdx')()
const { codeInspectorPlugin } = require('code-inspector-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    webpack: (config , {dev , isServer }) => {
     config.plugins.push(codeInspectorPlugin({ bundler : "webpack"}))
     return config
    },
    experimental : {
        optimizePackageImports  :['framer-motion', 'lucide-react' , 'recharts'] , 
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
            },
            {
                protocol: 'https',
                hostname: 'assets.literal.club',
            },
            {
                protocol: 'https',
                hostname: 'images.chesscomfiles.com',
            }
            ,
            {
                protocol: 'https',
                hostname: 'www.chess.com',
            }
        ],
    },

}

module.exports = withBundleAnalyzer(withMDX(nextConfig))