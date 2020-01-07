module.exports = {
  siteMetadata: {
    title: "Gatsby Cvent"
  },
  plugins: [
    {
      resolve: "gatsby-source-cvent",
      options: {
        account: "value",
        username: "value",
        password: "value"
      }
    }
  ]
}
