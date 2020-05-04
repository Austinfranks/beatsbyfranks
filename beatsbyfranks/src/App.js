import React from "react";
import "./App.css";

import Navbar from "../src/components/nav/index";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
