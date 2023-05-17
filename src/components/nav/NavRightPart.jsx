import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

export function NavRightPart({ showBtnLogin }) {
  const handleActiveLink = ({ isActive }) =>
    isActive
      ? {
          color: "var(--primary-color)",
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
      <div className="nav-auth">
        {showBtnLogin && (
          <>
            <Link className="btn btn-secondary" to="/login">
              Login
            </Link>
          </>
        )}
        {showBtnLogin && (
          <>
            <Link className="btn btn-primary" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
