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

  .mainbox2 {
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
    font-size: 2em;
    transition: 1s ease;
  }

  .header {
    font-weight: bold;
  }

  .body {
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
    justify-content: space-evenly;
  }

  .row {
    display: flex;
    justify-content: space-evenly;
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
      <div className="mainbox2">
        <div className="row header">
          <div>Cart</div>
        </div>
        <div className="body">
          {ctx.items.map((item) => (
            <div className="row">
              <div>
                {" "}
                <img
                  src={`/images/${item.sku}.jpg`}
                  alt={item.name}
                  width={50}
                  height={50}
                />
              </div>
              <div>{item.name}</div>

              <div>{formatPrice(item.price)}</div>
            </div>
          ))}

          <div className="row">
            <div>Total:</div>

            <div>{formatPrice(totalPrice(ctx.items))}</div>
            <div>
              <button onClick={checkout}>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}
