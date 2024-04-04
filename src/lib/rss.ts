import { siteConfig } from '@/config';
import fs from 'fs'
import path from 'path';
import RSS from 'rss'

export async function generateRSSFeed() {



    async function curDirFolder(dirPath: string) {

        const parentDir = process.cwd()
        const fullPath = path.join(parentDir, dirPath)
        const items = await fs.promises.readdir(fullPath)
        const folders = items.filter(item => fs.statSync(path.join(fullPath, item)).isDirectory());
        return folders

    }



    const feedOptions = {
        title: "Blog posts | RSS Feed",
        description: "Welcome to this blog posts!",
        site_url: siteConfig.url,
        feed_url: `${siteConfig.url}/rss.xml`,
        image_url: `${siteConfig.url}/logo.jpeg`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}`,
    };

    const feed = new RSS(feedOptions);

    const folders = await curDirFolder('src/app/writing/(articles)')

}