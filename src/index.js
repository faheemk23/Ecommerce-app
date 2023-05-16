import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import { ProductsListingProvider } from "./contexts/ProductsListingContext";
import App from "./App";
import { makeServer } from "./server";
import DataProvider from "./contexts/DataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsListingProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ProductsListingProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
