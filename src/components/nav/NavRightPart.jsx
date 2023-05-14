import { Link } from "react-router-dom";

export function NavRightPart({ showBtnLogin }) {
  return (
    <div className="nav-right-part">
      {showBtnLogin && (
        <>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </>
      )}
      <Link to="/mockman">Mockman</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}
