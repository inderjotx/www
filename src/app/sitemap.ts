import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.indejot.tech',
            lastModified: new Date(),
            changeFrequency: "weekly"
        },
        {
            url: 'https://www.indejot.tech/about',
            lastModified: new Date(),
            changeFrequency: "monthly"
        },
        {
            url: 'https://www.indejot.tech/writing',
            lastModified: new Date(),
            changeFrequency: "monthly"
        },
        {
            url: 'https://www.indejot.tech/anime',
            lastModified: new Date(),
            changeFrequency: "weekly"
        },
        {
            url: 'https://www.indejot.tech/books',
            lastModified: new Date(),
            changeFrequency: "weekly"
        },
        {
            url: 'https://www.indejot.tech/analytics',
            lastModified: new Date(),
            changeFrequency: "always"
        },
        {
            url: 'https://www.indejot.tech/music',
            lastModified: new Date(),
            changeFrequency: "weekly"
        },
        {
            url: 'https://www.indejot.tech/users',
            lastModified: new Date(),
            changeFrequency: "monthly"
        },
        {
            url: 'https://www.indejot.tech/work',
            lastModified: new Date(),
            changeFrequency: "weekly"
        },
    ]
}