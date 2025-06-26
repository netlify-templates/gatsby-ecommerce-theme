// Archivo: gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `Gatsby Ecommerce Theme`,
    siteUrl: `https://akiva.com.co`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
