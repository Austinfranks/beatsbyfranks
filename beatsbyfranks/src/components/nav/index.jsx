import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

const Styles = styled.div`
  nav {
    height: 10vh;
    width: 100vw;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  nav a {
    text-decoration: none;
    padding: 0;
    margin: 0;
    color: black;
  }

  .brand-title {
    text-transform: uppercase;
  }
`;

export default function Navbar() {
  return (
    <Styles>
      <nav className="navbar">
        <div className="brand-title">
          <Link className="link" to="/">
            Beats By Franks
          </Link>
        </div>
        <div className="navbar-links">
          <Link className="link" to="/cart">
            {" "}
            <FiShoppingCart />
          </Link>
        </div>
      </nav>
    </Styles>
  );
}
