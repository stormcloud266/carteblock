const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Carteblock",
    siteUrl: `https://carteblock.com`,
    description: `Carteblock is a strategic management consultancy, guiding startups and enterprises with smart technology for growth in dynamic markets.`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-anchor-links",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@global": path.resolve(__dirname, "src/components/global"),
          "@animations": path.resolve(__dirname, "src/components/animations"),
          "@UI": path.resolve(__dirname, "src/components/UI"),
          "@home": path.resolve(__dirname, "src/components/home"),
          "@images": path.resolve(__dirname, "src/assets/images"),
          "@globalStyles": path.resolve(__dirname, "src/assets/globalStyles"),
          "@context": path.resolve(__dirname, "src/context"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@data": path.resolve(__dirname, "src/data"),
        },
      },
    },
  ],
};
