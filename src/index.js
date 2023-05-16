import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import { ProductsProvider } from "./contexts/ProductsContext";
import App from "./App";
import { makeServer } from "./server";
import DataProvider from "./contexts/DataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
