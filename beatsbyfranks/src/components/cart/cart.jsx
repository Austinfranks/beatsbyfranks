import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context";

import styled from "styled-components";

const Styles = styled.div`
  button {
    border-radius: 5px;
    background-color: grey;
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

  .mainbox {
    font-size: 2.4em;
    text-align: center;
    display: grid;
    grid-template-rows: auto auto auto;
    justify-content: stretch;
    justify-items: stretch;
  }
  .subbox {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    align-items: center;
    justify-items: center;
    padding: 10px;
  }

  .subbox:hover .name {
    color: white;
  }

  .subbox:hover {
    background-color: black;
    border-radius: 10px;
    padding-bottom: 20px;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
`;

// Changes numbers to usd
function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`;
}

// Displays total price
function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.price, 0.0);
}

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext);

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  // Sends order to Stripe
  function checkout() {
    stripe.redirectToCheckout({
      items: ctx.items.map((item) => ({
        quantity: item.quantity,
        sku: item.sku,
      })),

      //COMEBACK TO LATER ON AND MAKE A SUCCESS PAGE AND A CANCEL PAGE
      successUrl:
        "https://www.youtube.com/channel/UCIqjyQTCGJ67GRxarEuRJIA?/success",
      cancelUrl:
        "https://www.youtube.com/channel/UCIqjyQTCGJ67GRxarEuRJIA?/canceled",
    });
  }
  return (
    <Styles>
      <div className="mainbox">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {ctx.items.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  <img
                    src={`/images/${item.sku}.jpg`}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                </td>
                <td>{formatPrice(item.price)}</td>
              </tr>
            ))}
            <tr>
              <td colspan={2}>Total:</td>
              <td>{formatPrice(totalPrice(ctx.items))}</td>
            </tr>
            <tr>
              <td colspan={3} style={{ textAlign: "right" }}>
                <button onClick={checkout}>Check Out</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Styles>
  );
}
