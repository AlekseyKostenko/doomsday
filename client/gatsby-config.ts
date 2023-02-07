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
      
      resolve: `gatsby-source-wordpress`,
      options: {        
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
    {      
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ]
}
