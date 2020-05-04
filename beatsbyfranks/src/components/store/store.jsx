import React, { useContext } from "react";
import products from "../../data/products";

import { CartContext } from "../cart/context";

import styled from "styled-components";

const Styles = styled.div`
  .mainbox {
    font-size: 2.4em;
    text-align: center;
    display: grid;
    grid-template-rows: auto auto auto;
    justify-content: stretch;
    justify-items: stretch;
    background-color: white;
    border-radius: 10px;
  }

  /* html5 audio disapearing */

  .subbox {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    align-items: center;
    justify-items: center;

    padding: 10px;
  }

  img {
  }

  .subbox:hover .name {
    color: white;
  }

  .subbox:hover {
    background-color: black;
    padding-bottom: 20px;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }

  audio {
    width: 75%;
  }
  button {
    border-radius: 5px;
    background-color: red;
    padding: 5px 12px;
    color: whitesmoke;
    border: none;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  button:hover {
    background-color: limegreen;
    color: white;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  @media (max-width: 703px) {
  }

  img {
    border-radius: 10px;
    display: grid;
    align-items: center;
  }
  audio {
    display: grid;
    align-items: center;
  }
`;

export default function Store() {
  const cartCtx = useContext(CartContext);

  return (
    <Styles>
      <div>
        <div className="mainbox">
          {products.map((product) => (
            <div className="subbox">
              <div>
                <img
                  src={`/images/${product.sku}.jpg`}
                  alt={product.name}
                  width={50}
                  height={50}
                />
              </div>

              <div className="name">{product.name}</div>

              <div>
                <audio
                  controls="controls"
                  src={`/beats/${product.sku}.wav`}
                  controlsList="nofullscreen nodownload"
                ></audio>
              </div>
              <div>
                <button onClick={() => cartCtx.addToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  );
}
