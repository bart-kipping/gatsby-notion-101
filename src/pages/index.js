import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"

export default function Home({ location }) {
  return (
    <Layout loc={location}>
      {/* <h1>About {data.site.siteMetadata.title}</h1> */}
      <h1>
        I design and develop art installations and web experiences for brands,
        theater, musicians and public spaces
      </h1>
    </Layout>
  )
}
