module.exports = {
  pathPrefix: "/website",
  plugins: [{
    resolve: `@react95/gatsby-theme`,
    options: {
      // basePath defaults to `/`
      basePath: `/`,
    },
  },
  ]
};