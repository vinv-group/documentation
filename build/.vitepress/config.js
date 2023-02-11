// https://vitepress.vuejs.org/config/app-configs#markdown

import { createWriteStream, writeFile } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

import RSS from 'rss-generator';


const links = []

const config = {
    
    markdown: {
        theme: 'nord',
        lineNumbers: true,
    },

    title: 'vinv',
    description: 'Just playing around.',
    srcDir: '../src',
    outDir: '../docs',
    lastUpdated: true,
    lang: 'en-US',
    base: '/',
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/og/ios/192.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/og/ios/32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/og/ios/16.png"}],
        ['link', { rel: "manifest", href: "/og/manifest.json"}],
        ['link', { rel: "mask-icon", href: "/og/vinv.svg", color: "#3a0839"}],
        ['link', { rel: "shortcut icon", href: "/image/vinv.svg"}],
        ['meta', { name: "theme-color", content: "#75ebba"}],
    ],
    
    
    themeConfig: {
        footer: {
            message: 'Released under the GNU GENERAL PUBLIC LICENSE.',
            copyright: 'Copyright © 2022 - present Gerrit Balindt'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vinv-group' },
        ],
        logo: '/assets/images/vinv.svg',
        editLink: {
            pattern: 'https://github.com/vinv-group/documentation/edit/main/src/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            { text: 'Guide', link: '/guide/introduction.md' },
            { text: 'Code of Cunduct', link: '/code-of-conduct.md' },
            { text: 'Changelog', link: '/CHANGELOG.md' },
            {
                text: 'Contributing',
                items: [
                    { text: 'Report an Issue', link: 'https://github.com/vinv-group/vinv-schema/issues', target: '_blank' },
                    { text: 'Chat', link: 'https://matrix.to/#/%23vinv:matrix.org', target: '_blank' }
                ]
            }
        ],
        sidebar: [
            {
                items: [
                    { text: 'Introduction', link: '/guide/introduction' },
                    { text: 'Get Started', link: '/guide/get-started' },
                    { text: 'Envelope', link: '/guide/envelope' },
                ]
            },
            {
                text: 'Cadastre',
                collapsible: false,
                collapsed: false,
                items: [
                    { text: 'Overview', link: '/specifications/vinv-cadastre/overview.md' },
                    //{ text: 'Usage', link: '/specifications/vinv-individual-tree/usage.md'},
                    { text: 'Documentation', link: '/specifications/vinv-cadastre/0.0.1/dereferenced.md' }
                ]
            },
            {
                text: 'Roundwood Pile',
                collapsible: false,
                collapsed: false,
                items: [
                    { text: 'Overview', link: '/specifications/vinv-roundwood-pile/overview.md' },
                    { text: 'Documentation', link: '/specifications/vinv-roundwood-pile/0.0.1/dereferenced.md' }
                ]
            },
            {
                text: 'Utils',
                collapsible: true,
                collapsed: false,
                items: [
                    {   
                        text: 'Forestry',
                        items: [
                            { text: 'Species', link: '/basics/species/0.0.1/dereferenced.md' },
                            { text: 'Log', link: '/basics/log/0.0.1/dereferenced.md' }
                        ]
                    },
                    {   
                        text: 'Sensors',
                        items: [
                            { text: 'Location', link: '/basics/location/0.0.1/dereferenced.md' },
                            { text: 'Coordinates', link: '/basics/coordinates/0.0.1/dereferenced.md' },
                            { text: 'Image', link: '/basics/image/0.0.1/dereferenced.md' },
                            { text: 'Sensors', link: '/basics/sensors/0.0.1/dereferenced.md' },
                            { text: 'Device Orientation', link: '/basics/sensors/0.0.1/dereferenced.md' }
                        ]
                    }
                ]
            }
        ]
    },
    transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id)){
            
            links.push({
                // you might need to change this if not using clean urls mode
                title: pageData.title,
                description: pageData.description,
                url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
                lastmod: pageData.lastUpdated
            })
            console.log(pageData.title);
        }
    },
    buildEnd: async ({ outDir }) => {
        
        // https://www.npmjs.com/package/rss-generator
        var feed = new RSS({
            title: 'vinv.io',
            description: 'Specifications of Forest Inventory Data',
            feed_url: 'http://vinv.io/rss.xml',
            site_url: 'http://vinv.io',
            image_url: 'http://example.com/og/vinv.svg',
            language: 'en',
            managingEditor: 'Gerrit Balindt',
            webMaster: 'Gerrit Balindt',
            copyright: '2023 Gerrit Balindt',
            categories: ['Forestry','Standard','Inventory'],
            pubDate: new Date("Fri Jan 20 2012 11:51:36 GMT-0500").toUTCString(),
            ttl: '60'
        });
        const modules = config.sidebar[1].items;
        links.forEach((link) => {
            feed.item({
                title: link.title,
                description: link.description,
                url: link.url
            });
        });
        writeFile(resolve(outDir, 'rss.xml'), feed.xml(), (err) => {
            if (err) throw err;
            console.log('rss.xml saved');
        });


        const sitemap = new SitemapStream({
          hostname: 'https://vinv.io/'
        })
        const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
        sitemap.pipe(writeStream)
        links.forEach((link) => sitemap.write(link))
        sitemap.end()
        await new Promise((r) => writeStream.on('finish', r))
    },
}


export default config;