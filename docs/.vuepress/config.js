module.exports = {
  lang: 'zh-CN',
  title: '经验之谈',
  description: '帮助 1000 位大学生先跑',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'images/logo.png' }],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    logoDark: '/images/logo-dark.png',
    repo: 'https://github.com/exptalks/exptalks.github.io',
    navbar: [
      { text: '首页', link: '/' },
    ],
  },
  plugins: [
    [
      '@vuepress/docsearch',
      {
        apiKey: '07d6e853853ae446b7f44f27cde218c8',
        appId: 'M4N7ATG220',
        indexName: 'exptalks',
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索',
          },
        },
      },
    ],
  ],
};
