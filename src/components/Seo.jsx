import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)

  const {
    title: DefaultTitle,
    description: DefaultDescription,
  } = site.siteMetadata

  const seo = {
    title: title || DefaultTitle,
    description: description || DefaultDescription,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <link
        href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@100;300;500&family=Sansita+Swashed:wght@300;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default SEO
