/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Часы судного дня онлайн – сколько осталось до полуночи ?`,
    description: `Часы судного дня онлайн: что это такое, как появились, что символизируют? И главный вопрос: какое время показывают сегодня?`,
    author: `me`,
    siteUrl: `https://xn-----6kcnec4ddfb1ab0a5c8c1d.xn--p1ai`
  },

  plugins: [

    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://xn-----6kcnec4ddfb1ab0a5c8c1d.xn--p1ai/admin/graphql`,
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: false,
        host: 'xn-----6kcnec4ddfb1ab0a5c8c1d.xn--p1ai',
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'http://xn-----6kcnec4ddfb1ab0a5c8c1d.xn--p1ai',
            to: 'https://xn-----6kcnec4ddfb1ab0a5c8c1d.xn--p1ai',
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/static/fonts/`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ]
}
