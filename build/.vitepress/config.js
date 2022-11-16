export default {
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
            { text: 'Guide', link: '/guide.md' },
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
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/guide/introduction' },
                    { text: 'Get Started', link: '/guide/get-started' },
                    { text: 'Individual Tree', link: '/vinv-individual-tree/vinv-tree.md', items:[
                        { text: 'Location', link: '/vinv-individual-tree/0.md' },
                    ]},
                ]
            },
            {
                text: 'Definitions',
                items: [
                    { text: 'About', link: '/introduction', items:[
                        { text: 'Location', link: '/introduction' },
                    ] }
                ]
            },
            {
                text: 'Individual Tree',
                items: [
                    { text: 'Overview', link: '/overview-individual-tree.md' },
                    { text: 'Usage', link: '/usage-individual-tree.md'},
                    { text: 'Schema', link: '/vinv-individual-tree/0.md', items:[
                        { text: 'v0.0.1', link: '/vinv-individual-tree/vinv-tree-properties-location.md' },
                    ]},
                ]
            }
        ]
    }
}