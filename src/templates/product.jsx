import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/Seo"

const ProductStyles = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export default function Product({ data, pageContext }) {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/product" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <>
      <SEO title="Aktitanium | Product" />
      <ProductStyles>
        {data.allMarkdownRemark.nodes.map(product => {
          return (
            <div key={product.frontmatter.slug}>
              <Link to={product.frontmatter.slug}>
                <Img
                  fluid={product.frontmatter.featureImage.childImageSharp.fluid}
                  alt={product.frontmatter.title}
                />
              </Link>
            </div>
          )
        })}
      </ProductStyles>
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
              isNaN(prevPage) ? prevPage : `/product/${parseInt(prevPage)}`
            }`}
            rel="prev"
          >
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link
            to={`/product/${nextPage === 0 ? "" : parseInt(nextPage)}`}
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
  query productListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { fileAbsolutePath: { regex: "/product/" } }
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
