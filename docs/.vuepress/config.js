module.exports = {
  lang: 'zh-CN',
  title: 'Exp Talks',
  description: 'Aiming to help 1000 undergraduates.',
  head: [],
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
