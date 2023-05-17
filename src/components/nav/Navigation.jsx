import "./Navigation.css";
import { SearchBar } from "./SearchBar";
import { NavRightPart } from "./NavRightPart";

import navLogo from "../../assets/nav-image.jpg";

export function Navigation({ showBtnLogin }) {
  return (
    <div className="nav">
      <img src={navLogo} />
      <div className="nav-logo"></div>
      <SearchBar />
      <NavRightPart showBtnLogin={showBtnLogin} />
    </div>
  );
}
