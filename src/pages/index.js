import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => <h1>{data.site.siteMetadata.title}</h1>

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
