import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import notionRendererFactory from "gatsby-source-notionso/lib/renderer"
import Layout from "../layouts/layout"
import NotionBlockRenderer from "../components/notionBlockRenderer"

const Template = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query Jojo {
      notionPageBlog(pageId: { eq: "4f05b3c2-0834-4564-add9-cd4fafd34dfa" }) {
        blocks {
          blockId
          blockIds
          type
          attributes {
            att
            value
          }
          properties {
            propName
            value {
              text
              atts {
                att
                value
              }
            }
          }
        }
        imageNodes {
          imageUrl
          localFile {
            publicURL
          }
        }
        pageId
        slug
        title
        isDraft
        id
        indexPage
      }
    }
  `)

  const notionRenderer = notionRendererFactory({
    notionPage: data.notionPageBlog,
  })
  {
    console.log(data)
  }
  return (
    <div>
      <NotionBlockRenderer
        data={data}
        renderer={notionRenderer}
        debug={false}
      />
    </div>
  )
}

// export const query = graphql`
//   query($pageId: String!) {
//     notionPageBlog(pageId: { eq: $pageId }) {
//       blocks {
//         blockId
//         blockIds
//         type
//         attributes {
//           att
//           value
//         }
//         properties {
//           propName
//           value {
//             text
//             atts {
//               att
//               value
//             }
//           }
//         }
//       }
//       imageNodes {
//         imageUrl
//         localFile {
//           publicURL
//         }
//       }
//       pageId
//       slug
//       title
//       isDraft
//       id
//       indexPage
//     }
//   }
// `

export default Template
