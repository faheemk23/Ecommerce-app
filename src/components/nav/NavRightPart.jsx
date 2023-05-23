import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";

export function NavRightPart({ showBtnLogin }) {
  const { loggedIn } = useContext(AuthContext);
  const { dataState } = useContext(DataContext);

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const { firstName } = userInfo ?? { firstName: "" };

  const handleActiveLink = ({ isActive }) =>
    isActive
      ? {
          color: "var(--primary-color)",
          fontWeight: "bold",
        }
      : {};

  const { cart, wishlist } = dataState;

  return (
    <div className="nav-right-part">
      <NavLink style={handleActiveLink} className="nav-link" to="/">
        Home
      </NavLink>

      <NavLink
        style={handleActiveLink}
        className="nav-link"
        to="/productlisting"
      >
        Products
      </NavLink>

      {/* <NavLink to="/mockman">Mockman</NavLink> */}

      <NavLink style={handleActiveLink} className="nav-link" to="/wishlist">
        Wishlist <i className="fa-sharp fa-solid fa-heart"></i>{" "}
        <span className="superscript">({wishlist.length})</span>
      </NavLink>

      <NavLink style={handleActiveLink} className="nav-link" to="/cart">
        Cart <i className="fa-solid fa-cart-shopping"></i>{" "}
        <span className="superscript">({cart.length})</span>
      </NavLink>

      <div className="nav-auth">
        {showBtnLogin && (
          <>
            {loggedIn ? (
              <Link className="btn btn-primary bg-orange" to="/account">
                Hi, {firstName}! <i className="fa-sharp fa-solid fa-user"></i>
              </Link>
            ) : (
              <Link className="btn btn-secondary" to="/login">
                Login
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}
