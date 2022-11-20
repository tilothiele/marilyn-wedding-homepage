import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../layouts/DefaultLayout"
import { Container } from "@mui/material"
import type { HeadProps } from "gatsby"
import { SEO } from '../components/SEO';

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
        <Container maxWidth="sm">
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`

type MdxStruct = {
    mdx: {
      frontmatter: {
        title: string
      }
    }
}

export function Head({ data }: HeadProps<MdxStruct>) {
  return (
    <SEO title={data.mdx.frontmatter.title}/>
  )
}
