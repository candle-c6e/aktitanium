import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"

import Logo from "../images/logo.png"

const NavStyles = styled.nav`
  background-color: transparent;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  height: 6rem;
  z-index: 5;

  .menu-active {
    color: var(--gold);
  }

  &.lock {
    background-color: gray;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 1rem;
  }

  .container {
    height: 100%;
  }

  .menu {
    display: flex;
    align-items: center;
    width: 100%;
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

  li {
    cursor: pointer;
  }

  li:not(:last-child) {
    margin-right: 1rem;
  }

  .menu-mobile_icon {
    font-size: 2.5rem;
    width: 100%;
    display: none;
  }

  .menu-mobile {
    z-index: 10;
    display: none;
    font-size: 2rem;

    &.active {
      width: 100vw;
      height: 100vh;
      transform: translate(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 50%;
      background: #000;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    li {
      margin: 2rem 0;
    }
  }

  .times {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 3rem;
    padding: 2rem;
    color: #f1c27d;
  }

  @media (max-width: 1030px) {
    height: 3rem;

    .menu {
      display: none;
    }
    .menu-mobile_icon {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`

export default function Navbar({ pathname }) {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = link => {
    setShowMenu(false)
    navigate(link)
  }

  return (
    <NavStyles>
      <div className="logo">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "90px", height: "90px" }}
          />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <span
              className={pathname === "/" ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/")}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className={pathname.includes("about") ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/about")}
            >
              About us
            </span>
          </li>
          <li>
            <span
              className={pathname.includes("product") ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/product")}
            >
              Product
            </span>
          </li>
          <li>
            <span
              className={pathname.includes("portfolio") ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/portfolio")}
            >
              Portfolio
            </span>
          </li>
          <li>
            <span
              className={pathname.includes("contact") ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/contact")}
            >
              Contact
            </span>
          </li>
        </ul>
      </div>
      <div className="menu-mobile_icon">
        <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
      </div>
      <div className={`menu-mobile ${showMenu ? "active" : ""}`}>
        <div
          className="times"
          role="presentation"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaTimes />
        </div>
        <ul>
          <li>
            <span
              className={pathname === "/" ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/")}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className={pathname === "/about" ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/about")}
            >
              About us
            </span>
          </li>
          <li>
            <span
              className={pathname === "/product" ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/product")}
            >
              Product
            </span>
          </li>
          <li>
            <span
              className={pathname === "/portfolio" ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/portfolio")}
            >
              Portfolio
            </span>
          </li>
          <li>
            <span
              className={pathname === "/contact" ? "menu-active" : ""}
              role="presentation"
              onClick={() => handleClick("/contact")}
            >
              Contact
            </span>
          </li>
        </ul>
      </div>
    </NavStyles>
  )
}
