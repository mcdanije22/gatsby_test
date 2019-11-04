import React from "react"
import Layout from "../components/layout"
import Data from "../components/data"
import { useStaticQuery, graphql, Link } from "gatsby"
import { node } from "prop-types"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map((post, i) => {
          return (
            <Link to={`/blog/${post.node.slug}`} key={i}>
              <li>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}
export default Blog
