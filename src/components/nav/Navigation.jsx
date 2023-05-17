import "./Navigation.css";
import { SearchBar } from "./SearchBar";
import { NavRightPart } from "./NavRightPart";

import navLogo from "../../assets/nav-image.jpg";
import { useNavigate } from "react-router-dom";

export function Navigation({ showBtnLogin }) {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <img className="nav-logo" src={navLogo} onClick={() => navigate("/")} />
      <div className="nav-logo"></div>
      <SearchBar />
      <NavRightPart showBtnLogin={showBtnLogin} />
    </div>
  );
}
