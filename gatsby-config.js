const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Gatsby Serif',
    description: 'my theme',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'zerostaticthemes@gmail.com',
    },
    menuLinks: [
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'Quiz',
        link: '/quiz',
      },
      {
        name: 'Team',
        link: '/team',
      },
      {
        name: 'Testimonials',
        link: '/testimonials',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
      {
        name: 'EnSavoirPlus',
        link: '/ensavoirplus',
      },
      {
        name: 'DetailedArticle',
        link: '/detailedarticle',
      },
      {
        name: 'ComprendreVosOptions',
        link: '/comprendrevosoptions',
      },
      {
        name: 'MaximiserVosOptions',
        link: '/maximiservosoptions',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
