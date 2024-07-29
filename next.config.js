const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
    typescript : {
        ignoreBuildErrors: true
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