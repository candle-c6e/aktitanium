import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/Seo"

const PortfolioStyles = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export default function Portfolio({ data, pageContext }) {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/portfolio" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <>
      <SEO title="Aktitanium | Portfolio" />
      <PortfolioStyles>
        {data.allMarkdownRemark.nodes.map(portfolio => {
          return (
            <div key={portfolio.frontmatter.slug}>
              <Link to={portfolio.frontmatter.slug}>
                <Img
                  fluid={
                    portfolio.frontmatter.featureImage.childImageSharp.fluid
                  }
                  alt={portfolio.frontmatter.title}
                />
              </Link>
            </div>
          )
        })}
      </PortfolioStyles>
      <ul
        style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          textAlign: "center",
          listStyle: "none",
          padding: "50px 0",
        }}
      >
        {!isFirst && (
          <Link
            to={`${
              isNaN(prevPage) ? prevPage : `/portfolio/${parseInt(prevPage)}`
            }`}
            rel="prev"
          >
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link
            to={`/portfolio/${nextPage === 0 ? "" : parseInt(nextPage)}`}
            rel="next"
          >
            Next Page →
          </Link>
        )}
      </ul>
    </>
  )
}

export const query = graphql`
  query portfolioListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { fileAbsolutePath: { regex: "/portfolio/" } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          featureImage {
            childImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
