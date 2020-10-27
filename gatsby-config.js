/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Bart Kipping`,
    siteURL: `www.bartkipping.nl`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-source-notionso",
      options: {
        name: "Blog",
        rootPageUrl:
          "https://www.notion.so/gatsby-notion-101-d11543de90e8470d97c70325244698c0",
        tokenv2:
          "ed5506042c61f477385c3f2161a397a97fbc3b972387be3117f9129610efd1724327f59b997d31158b836444db571f785e98474e28aec9347870926ee0774aecf58b8a577d53f83e66cd8623fbb6",
        debug: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
