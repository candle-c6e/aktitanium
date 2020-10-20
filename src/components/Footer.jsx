import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GrFacebook, GrTwitter, GrGoogle } from "react-icons/gr"

import Logo from "../images/logo.png"

const FooterStyles = styled.footer`
  .footer-info {
    font-size: 1.4rem;
    background-color: var(--gold);
    padding: 3rem 0;

    .container {
      display: grid;
      grid-template-columns: 20% 60% 20%;
      align-items: center;
    }

    .info {
      padding: 0 2rem;
      border-left: 1px solid;
      border-right: 1px solid;
    }

    .social-media {
      padding-left: 1rem;
      text-align: center;

      svg {
        margin: 1rem;
      }
    }
  }

  .footer-nav {
    padding: 2rem 0;
    font-size: 1.4rem;
    .container {
      display: flex;
      height: 100%;
      align-items: center;
    }

    .logo {
      flex: 0 50%;
    }

    ul {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      list-style: none;
    }

    li:not(:last-child) {
      margin-right: 1rem;
    }
  }

  @media (max-width: 950px) {
    .footer-nav {
      display: none;
    }

    .footer-info .container {
      grid-template-columns: 1fr;
    }

    .footer-info .logo {
      text-align: center;
    }

    .footer-info .info {
      margin: 2rem 0;
    }
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="footer-info">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "90px", height: "90px" }}
              />
            </Link>
          </div>
          <div className="info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia cum,
            soluta dolore necessitatibus ullam autem dolorum eveniet iusto
            nesciunt sequi eum facilis amet pariatur unde.
          </div>
          <div className="social-media">
            <GrFacebook />
            <GrTwitter />
            <GrGoogle />
          </div>
        </div>
      </div>
      <div className="footer-nav">
        <div className="container">
          <div className="logo">COPYRIGHT &copy; CANDLE</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyles>
  )
}
