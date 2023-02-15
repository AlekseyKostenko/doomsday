import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import { Box } from '@primer/react';
import StyledBlogPost from './styled-blog-post'



import Bio from "../components/bio"
import {Layout} from "../components"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }
  console.log(post);
  
  return (
    <Layout>
      <Seo title={post.seo.title} description={post.seo.metaDesc} />
      <StyledBlogPost>
        <Box className="wrapper">
          <Box className="header_content">
            <Box className="title_content">
              <h1 itemProp="headline">{parse(post.title)}</h1>
            </Box>
            <Box className="title_image">
              {featuredImage?.data && (
                <GatsbyImage
                  image={featuredImage.data}
                  alt={featuredImage.alt}
                  style={{ marginBottom: 50 }}
                />
              )}
            </Box>
          </Box>
          <Box className="post_content">
            <article
              className="blog-post"
              itemScope
              itemType="http://schema.org/Article"
            >
              {!!post.content && (
                <section itemProp="articleBody">{parse(post.content)}</section>
              )}      

          
            </article>
          </Box>

        </Box>

      

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      </StyledBlogPost>
      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
      seo {
        title
        metaDesc
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`