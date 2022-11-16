import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Marilyn Wedding Events`,
    siteUrl: `https://marilyn-wedding-events.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "fxRdp6rQwk0hmAx4A05c8jAwlNz2sO6btrmfe2KZHKc",
      // previewToken: _8lZJbRTfG-zGpnflTMjD7mxBZBv4OFN2UAjM2ZjNWg
//      "accessToken": "CFPAT-OwKcmga_GwBkLN7GsiKhHJNguPDeBXe0xvEW1FcNEh4",
      "spaceId": "aydwzzbft1ya"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
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
