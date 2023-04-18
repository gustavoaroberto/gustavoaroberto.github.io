module.exports = {
  siteMetadata: {
    title: `About me`,
    siteUrl: `https://www.gustavoaroberto.me`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `About me - Gustavo A Roberto`,
        short_name: `About Gus`,
        description: `Just some things about me`,
        start_url: `/`,
        background_color: `#0a68f0`,
        theme_color: `#0a68f0`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        icons: [
          {
            src: `src/images/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/images/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `src/images/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `src/images/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
