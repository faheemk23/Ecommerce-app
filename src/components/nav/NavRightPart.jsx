import { NavLink } from "react-router-dom";
import "./Navigation.css";

export function NavRightPart({ showBtnLogin }) {
  const handleActiveLink = ({ isActive }) =>
    isActive
      ? {
          color: "#6e9144",
          fontWeight: "bold",
        }
      : {};

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
        Wishlist
      </NavLink>
      <NavLink style={handleActiveLink} className="nav-link" to="/cart">
        Cart
      </NavLink>
      {showBtnLogin && (
        <>
          <button>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </button>
        </>
      )}
      {showBtnLogin && (
        <>
          <button>
            <NavLink className="nav-link" to="/login">
              Sign Up
            </NavLink>
          </button>
        </>
      )}
    </div>
  );
}
