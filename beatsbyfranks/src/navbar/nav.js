import React, { useContext } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import { CartContext } from "../components/cart/context";

const Styles = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding-left: 5%;
    padding-right: 5%;
  }

  h1 {
    letter-spacing: 2px;
  }

  header,
  a {
    font-family: "Bebas Neue", cursive;
    font-size: 1.5em;
  }

  nav,
  a {
    display: inline-block;
    padding: 0px 10px;
    text-decoration: none;
    font-family: "Alegreya SC", serif;
    font-style: italic;

    color: #999;
  }

  nav .animation {
  }

  a:nth-child(1) {
  }

  @media only screen and (max-width: 490px) {
    h1 {
      font-size: 1.3em;
    }

    a {
      font-size: 1.1em;
      padding: 0px 5px;
    }
  }

  .link:hover {
    color: skyblue;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
`;

export default function Navigation() {
  //Displays number of items in cart
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.items.length;
  return (
    <Styles>
      <header>
        <h1>BEATSBYFRANKS</h1>
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/cart">
            Cart({numItems})
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>

          <div className="animation start-home"></div>
        </nav>
      </header>
    </Styles>
  );
}
