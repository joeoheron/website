module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `Joe O'Heron`,
    // Used for SEO
    description: `This is Joe O'Heron's personal website`,
    // Used for resolving images in social cards
    siteUrl: `https://joeoheron.com`,
    // Used for SEO in social cards
  },
  plugins: [{
    resolve: `@react95/gatsby-theme`,
    options: {
      // basePath defaults to `/`
      basePath: `/`,
    },
  },
  ]
};