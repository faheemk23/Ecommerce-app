import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";

export function NavRightPart({ showBtnLogin }) {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);
  const { filtersDispatch } = useContext(ProductsListingContext);

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const { firstName } = userInfo ?? { firstName: "" };

  // console.log({ loggedIn });

  const handleActiveLink = ({ isActive }) =>
    isActive
      ? {
          color: "var(--primary-color)",
          fontWeight: "bold",
        }
      : {};

  const handleBtnLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    dataDispatch({ type: "clear-all" });
    filtersDispatch({ type: "clear-all" });
  };

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
            {loggedIn ? (
              <button className="btn btn-primary" onClick={handleBtnLogout}>
                Logout
              </button>
            ) : (
              <Link className="btn btn-secondary" to="/login">
                Login
              </Link>
            )}
          </>
        )}
        {firstName && <div>Hi, {firstName}</div>}
        {/* {showBtnLogin && (
          <>
            <Link className="btn btn-primary" to="/signup">
              Sign Up
            </Link>
          </>
        )} */}
      </div>
    </div>
  );
}
