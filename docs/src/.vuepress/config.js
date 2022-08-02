const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'CryptoVision Guide',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-LJTSY1CPNY' }],
    [
      'script',
      {},
      [
        `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\n\ngtag('config', 'G-LJTSY1CPNY');`
      ]
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6ebddf' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  locales: {
    '/': {
      lang: 'en-US'
    },
    '/ja/': {
      lang: 'ja-JP'
    },
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    domain: 'https://guide.cryptovision.app',
    repo: 'cryptovisionapp/cryptovision-guide',
    editLinks: true,
    docsDir: 'docs/src',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Q&A',
            link: '/qa/'
          },
          {
            text: 'Release',
            link: '/release/',
          },
          {
            text: 'App',
            link: 'https://cryptovision.app'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Account',
              collapsable: false,
              children: [
                'account-chain',
                'account-exchange',
                'account-service',
              ]
            }
          ],
        },
      },
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        ariaLabel: '言語',
        editLinkText: 'このドキュメントを編集',
        lastUpdated: '最終更新',
        nav: [
          {
            text: 'Guide',
            link: '/ja/guide/',
          },
          {
            text: 'Q&A',
            link: '/ja/qa/'
          },
          {
            text: 'Release',
            link: '/ja/release/',
          },
          {
            text: 'App',
            link: 'https://cryptovision.app'
          }
        ],
        sidebar: {
          '/ja/guide/': [
            {
              title: 'はじめに(ビギナーズガイド)',
              collapsable: false,
              children: [
                'introduction',
              ]
            },
            {
              title: 'アカウントの登録',
              collapsable: false,
              children: [
                'account-chain',
                'account-exchange',
                'account-service',
              ]
            },{
              title: 'ポートフォリオの管理',
              collapsable: false,
              children: [
                'portfolio',
              ]
            },{
              title: '取引の確認',
              collapsable: false,
              children: [
                'transaction-window',
                'transaction-journal',
                'transaction-tax',
              ]
            }
          ],
        },
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    [
      'seo',
      {
        description: ($page, $site) => $page.frontmatter.description || ($page.excerpt && $page.excerpt.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")) || $site.description || "",
        title: ($page, $site) => $page.title || $site.title,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image) || 'https://guide.cryptovision.app/thumbnail.jpg',
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://guide.cryptovision.app',
        exclude: ['/404.html'],
        dateFormatter: val => {
          return new Date().toISOString()
        }
      }
    ]
  ]
}
