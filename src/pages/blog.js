import React from "react"
import Template from "../templates/page.js"
import Layout from "../layouts/layout.js"
import Node from "../../gatsby-node"
export default function blog() {
  return (
    <Layout>
      {/* <Node></Node> */}
      <Template></Template>
    </Layout>
  )
}
