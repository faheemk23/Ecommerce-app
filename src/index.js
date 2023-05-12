import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import { ProductsProvider } from "./contexts/ProductsProvider";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
      <App />
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
