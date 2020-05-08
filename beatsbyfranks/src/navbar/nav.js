import React, { useContext } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaMusic, FaShoppingCart, FaEnvelope } from "react-icons/fa";

import { CartContext } from "../components/cart/context";

const Styles = styled.div`
  nav {
    height: 10vh;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    transition: 1s ease;
  }

  .link {
    text-decoration: none;
    font-size: 2.5em;
    color: #999;
  }

  #link1 {
    letter-spacing: 0.2em;
  }

  @media only screen and (max-width: 500px) {
    .link {
      font-size: 2.2em;
    }
  }

  .link:hover {
    color: black;

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
      <nav>
        <Link className="link" id="link1" to="/">
          BEATSBYFRANKS
        </Link>
        <Link className="link" id="link2" to="/cart">
          <FaShoppingCart />
          {numItems}
        </Link>
      </nav>
    </Styles>
  );
}
