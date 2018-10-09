module.exports = {
  siteMetadata: {
    title: 'TerraStack',
    author: 'TerraStack Team',
    description: 'TerraStack - Orchestrating Terraform Workflows',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127202549-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
