import React from "react"
import Layout from "../components/layout"
import Data from "../components/data"
import { useStaticQuery, graphql } from "gatsby"
import { node } from "prop-types"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              Date
            }
            html
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <h1>Blog Page</h1>

      <ol>
        {data.allMarkdownRemark.edges.map((post, i) => {
          return (
            <li key={i}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.Date}</p>
              {post.node.html}
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
export default Blog
