import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export default function CarProvider({ children }) {
  //Empty initialized array setItems will change it to items in it
  const [items, setItems] = useState([]);

  function addToCart(item) {
    setItems((prevState) => [...prevState, item]);
  }

  function itemsWithQuantities(items) {
    return items.reduce((acc, item) => {
      const found = acc.find((_item) => _item.sku === item.sku);
      if (found) {
        found.quantity = found.quantity;
      } else {
        acc.push({
          quantity: 1,
          ...item,
        });
      }
      return acc;
    }, []);
  }

  return (
    <CartContext.Provider
      value={{ items: itemsWithQuantities(items), addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
