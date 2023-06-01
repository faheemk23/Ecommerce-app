import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import { ProductsListingProvider } from "./contexts/ProductsListingContext";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider } from "./contexts/DataContext";
import { AuthProvider } from "./contexts/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <AuthProvider>
      <ProductsListingProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ProductsListingProvider>
    </AuthProvider>
  </Router>,
  // </React.StrictMode>
  document.getElementById("root")
);
