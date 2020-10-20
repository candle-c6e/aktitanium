import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import SEO from "../components/Seo"

const PortfolioStyles = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  p {
    margin: 3rem 0;
    line-height: 1.6;
  }
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <PortfolioStyles>
      <SEO
        title={`${frontmatter.title} | Akatitanium`}
        description={frontmatter.description}
      />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <Img
        style={{ marginTop: "1rem" }}
        fluid={frontmatter.featureImage.childImageSharp.fluid}
      />
    </PortfolioStyles>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        featureImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        description
      }
    }
  }
`
