import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"

export default function Home({ data }) {
  return (
    <Layout>
      {data.allNotionPageBlog.edges.map(edge => (
        <div key={edge.node.pageIcon}>
          {console.log(edge.node)}
          <article className="media">
            <figure className="media-left">
              <p className="is-size-3">{edge.node.icon}</p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{edge.node.title}</strong>
                  {/* <p>{excerpt}</p> */}
                </p>
              </div>
            </div>
          </article>
        </div>
      ))}
      {/* <h1>About {data.site.siteMetadata.title}</h1> */}
      <h1>
        I design and develop art installations and web experiences for brands,
        theater, musicians and public spaces
      </h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    allNotionPageBlog(
      filter: { isDraft: { eq: false } }
      sort: { fields: [indexPage], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          excerpt
          pageIcon
        }
      }
    }
  }
`
