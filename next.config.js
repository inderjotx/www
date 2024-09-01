const withMDX = require('@next/mdx')()
const { codeInspectorPlugin } = require('code-inspector-plugin');



/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
    typescript : {
        ignoreBuildErrors: true
    }
    ,
    output : env.NEXT_PUBLIC_PROVIDER === 'self-host' ? "standalone" : "export"

    webpack: (config , {dev , isServer }) => {
     config.plugins.push(codeInspectorPlugin({ bundler : "webpack"}))
     return config
    }
    ,

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

module.exports = withMDX(nextConfig)