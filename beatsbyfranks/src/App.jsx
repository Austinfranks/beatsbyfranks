import React from "react";

import "./App.css";
import Navigation from "./navbar/nav";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./components/cart/context";

import ProductsPage from "./pages/products/productpage";
import ViewCartPage from "./pages/view-cart/vcpage";
import ContactPage from "./pages/contact/contactpage";

require("dotenv").config();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navigation />
          <Switch>
            <Route exact path="/" component={ProductsPage} />
            <Route exact path="/cart" component={ViewCartPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
