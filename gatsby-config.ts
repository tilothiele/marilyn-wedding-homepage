import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.NODE_ENV)
console.log(process.env.CONTENTFUL_SPACE_ID)
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Marilyn Wedding Events`,
    description: 'Die Adresse für Ihre Hochzeitsplanung und -durchführung',
    image: './images/logos/marilyn-logo-pink.png',
    siteUrl: `https://marilyn-wedding-events.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID
    }
  },
  {
    resolve: `gatsby-plugin-gatsby-cloud`,
    options: {
      headers: {
        "/*.js": [
          "Cache-Control: public, max-age=0, must-revalidate",
          "Content-Type: text/javascript"
        ],
      },
    },
  },
  'gatsby-plugin-preload-fonts',
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-plugin-styled-components",
  "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logos/marilyn-logo-white.png"
    }
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.md`, `.mdx`],
      gatsbyRemarkPlugins: [],
    },
  },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`,
    },
    __key: "mdx"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
