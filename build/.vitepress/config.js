// https://vitepress.vuejs.org/config/app-configs#markdown
export default {
    
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
    themeConfig: {
        footer: {
            message: 'Released under the GNU GENERAL PUBLIC LICENSE.',
            copyright: 'Copyright © 2022 - present Grünecho'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vinv-group' },
        ],
        logo: '/logo_transparent.png',
        editLink: {
            pattern: 'https://github.com/vinv-group/documentation/edit/main/src/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            { text: 'Guide', link: '/guide/introduction.md' },
            { text: 'Code of Cunduct', link: '/code-of-conduct.md' },
            {
                text: 'Contributing',
                items: [
                    { text: 'Report an Issue', link: 'https://github.com/vinv-group/documentation/issues', target: '_blank' },
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
                items: [
                    {   text: 'vinv-Basics',
                        link: '/guide/basics.md',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            { text: 'Location', link: '/basics/location/0.0.1/dereferenced.md' },
                            { text: 'Coordinates', link: '/basics/coordinates/0.0.1/dereferenced.md' },
                            { text: 'Image', link: '/basics/image/0.0.1/dereferenced.md' },
                            { text: 'Species', link: '/basics/species/0.0.1/dereferenced.md' }
                        ]
                    }
                ]
            },
            {
                text: 'Individual Tree',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Overview', link: '/specifications/vinv-individual-tree/overview.md' },
                    //{ text: 'Usage', link: '/specifications/vinv-individual-tree/usage.md'},
                    { text: 'Schema', link: '/specifications/vinv-individual-tree/0.0.1/dereferenced.md' }
                ]
            }
        ]
    }
}