import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  GiDress,
  GiGingerbreadMan,
  GiBodyHeight,
  GiCaduceus,
} from "react-icons/gi"

import SEO from "../components/Seo"

const HeroStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gold);
  padding: 7rem;
  border-radius: 5px;
  font-family: "Piazzolla", serif;
  line-height: 1;

  h3,
  .copy-right {
    font-weight: 100;
  }

  h2 {
    font-size: 6rem;
  }

  .copy-right {
    margin-top: 1rem;
  }

  @media (max-width: 700px) {
    & {
      padding: 3rem;
    }

    h2 {
      font-size: 4rem;
    }

    h3,
    .copy-right {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 3rem;
    }
  }
`

const InfoStyles = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 40% 1fr;
  line-height: 1.6;

  h4 {
    margin-bottom: 2rem;
  }

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`

const ServiceStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  svg {
    font-size: 4rem;
  }

  .service-wrapper {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .service-detail {
    p {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    margin-top: 1.5rem;
  }
`

const BannerStyles = styled.div`
  padding-top: 2rem;
`

const PortStyles = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;

  a {
    display: grid;
  }

  & > :nth-child(3) {
    grid-column: span 1;
    grid-row: span 2;
  }

  & > :nth-child(5) {
    grid-column: span 2;
    grid-row: span 1;
    max-height: 300px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    & > :nth-child(3) {
      grid-column: auto;
      grid-row: auto;
    }

    & > :nth-child(5) {
      grid-column: auto;
      grid-row: auto;
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO />
      <HeroStyles>
        <h3>Royal Presentation</h3>
        <h2>ROYALISTIC</h2>
        <p className="copy-right">COPYRIGHT &copy; ROYALISTIC</p>
      </HeroStyles>
      <InfoStyles>
        <div className="info-left">
          <h4>Where does it come from?</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="info-right">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy
          </p>
        </div>
      </InfoStyles>
      <ServiceStyles>
        <div className="service-wrapper">
          <GiDress />
          <div className="service-detail">
            <p>Dess</p>
            <span>
              and a search for 'lorem ipsum' will uncover many web sites still
              in their infancy
            </span>
          </div>
        </div>
        <div className="service-wrapper">
          <GiGingerbreadMan />
          <div className="service-detail">
            <p>GingerbreadMan</p>
            <span>
              and a search for 'lorem ipsum' will uncover many web sites still
              in their infancy
            </span>
          </div>
        </div>
        <div className="service-wrapper">
          <GiBodyHeight />
          <div className="service-detail">
            <p>BodyHeight</p>
            <span>
              and a search for 'lorem ipsum' will uncover many web sites still
              in their infancy
            </span>
          </div>
        </div>
        <div className="service-wrapper">
          <GiCaduceus />
          <div className="service-detail">
            <p>Caduceus</p>
            <span>
              and a search for 'lorem ipsum' will uncover many web sites still
              in their infancy
            </span>
          </div>
        </div>
      </ServiceStyles>
      <BannerStyles>
        <Img fluid={data.file.childImageSharp.fluid} />
      </BannerStyles>
      <PortStyles>
        {data.allMarkdownRemark.nodes.map(item => {
          return (
            <Link to={`${item.frontmatter.slug}`} key={item.id}>
              <Img
                fluid={item.frontmatter.featureImage.childImageSharp.fluid}
              />
            </Link>
          )
        })}
      </PortStyles>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "gold.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/portfolio/" } }
      limit: 6
    ) {
      nodes {
        id
        frontmatter {
          slug
          featureImage {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
