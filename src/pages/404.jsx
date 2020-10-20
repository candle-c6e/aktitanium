import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function NotFoundPage({ data }) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
    </>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
