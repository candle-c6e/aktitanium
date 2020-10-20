import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from "../components/Seo"

const AboutStyles = styled.div`
  .about-section {
    display: flex;
    margin-bottom: 3rem;
  }

  .about-image {
    flex: 0 40%;
  }

  .about-detail {
    flex: 1;
    line-height: 1.4;
  }

  .about-section:nth-child(1) .about-detail {
    margin-left: 1rem;
  }

  .about-section:nth-child(2) .about-detail {
    margin-right: 1rem;
    order: 1;
  }

  .about-section:nth-child(2) .about-image {
    order: 2;
  }

  @media (max-width: 500px) {
    .about-detail {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1000px) {
    .about-section {
      flex-wrap: wrap;
    }

    .about-image {
      flex: 0 100%;
    }

    .about-section:nth-child(1) .about-detail {
      margin-left: 0;
      margin-top: 1rem;
    }

    .about-section:nth-child(2) .about-detail {
      margin-right: 0;
      margin-top: 1rem;
      order: 2;
    }
  }
`

export default function About({ data, location }) {
  return (
    <AboutStyles>
      <SEO title="Aktitanium | About" />
      <div className="about-section">
        <div className="about-image">
          <Img fluid={data.allFile.nodes[0].childImageSharp.fluid} />
        </div>
        <div className="about-detail">
          <p>
            3 wolf moon vice pork belly snackwave aesthetic kombucha vaporware
            migas iceland sartorial schlitz taiyaki. Stumptown direct trade
            flannel copper mug offal literally swag ugh letterpress truffaut yr
            actually viral. Schlitz disrupt vice aesthetic cronut chia. Meh yr
            cardigan craft beer narwhal migas, thundercats helvetica 8-bit. Put
            a bird on it umami selvage poutine sustainable. Listicle poke
            schlitz mlkshk seitan +1. Scenester irony food truck, health goth
            bicycle rights quinoa adaptogen four dollar toast banjo.
          </p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-image">
          <Img fluid={data.allFile.nodes[1].childImageSharp.fluid} />
        </div>
        <div className="about-detail">
          <p>
            Synth hoodie pabst sustainable banjo hammock. Dreamcatcher chillwave
            listicle, cloud bread blue bottle single-origin coffee salvia
            locavore before they sold out palo santo. +1 mixtape waistcoat
            activated charcoal, yr chillwave hammock banh mi asymmetrical salvia
            actually prism artisan woke. Echo park letterpress shoreditch vinyl
            godard fanny pack jianbing pok pok roof party pour-over pug migas
            whatever. Lo-fi portland tote bag lomo kinfolk. Woke taxidermy
            yuccie kogi. Before they sold out vexillologist wolf hammock.
          </p>
        </div>
      </div>
    </AboutStyles>
  )
}

export const query = graphql`
  query {
    allFile(filter: { dir: { regex: "/about/" } }, limit: 2) {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`
