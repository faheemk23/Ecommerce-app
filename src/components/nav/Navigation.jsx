import "./Navigation.css";
import { NavRightPart } from "./NavRightPart";

import navLogo from "../../assets/nav-image.jpg";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { SearchContainer } from "./SearchContainer";

export function Navigation({ showBtnLogin }) {
  const { filtersState } = useContext(ProductsListingContext);

  const navigate = useNavigate();

  return (
    <div className="nav">
      <img
        className="nav-logo"
        src={navLogo}
        onClick={() => navigate("/")}
        alt="nav-logo"
      />
      <SearchContainer />
      <NavRightPart showBtnLogin={showBtnLogin} />
    </div>
  );
}
