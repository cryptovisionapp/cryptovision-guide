const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Crypto Vision Guide',
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
    ['meta', { name: 'theme-color', content: '#6ebddf' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'robots', content: 'noindex' }]
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
            text: 'App',
            link: 'https://cryptovision.app'
          }
        ],
        sidebar: {
          '/ja/guide/': [
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
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
