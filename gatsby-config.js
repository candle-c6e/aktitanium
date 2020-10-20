module.exports = {
  siteMetadata: {
    siteUrl: `https://titanium-neon.vercel.app`,
    title: `Akatitanium | Coating`,
    description: `Coating Titanium`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Akatitanium`,
        short_name: `Akatitanium`,
        start_url: `/`,
        background_color: `#d4af37`,
        theme_color: `#d4af37`,
        display: `minimal-ui`,
        icon: `src/images/fav/favicon-16x16.png`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
  ],
}
