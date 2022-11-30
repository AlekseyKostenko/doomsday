/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Часы судного дня онлайн`,
    description: `Осталось 100 секунд до полуночи`,
    author: `me`,
    siteUrl: `https://xn-----6kcnec4ddfb1ab0a5c8c1d.xn--p1ai`
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: true,                
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/static/fonts/`
      }
    }
  ]
}
