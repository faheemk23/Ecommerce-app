import { useContext } from "react";
import { Navigation } from "../../components/nav/Navigation";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { setLoggedIn } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);
  const { filtersDispatch } = useContext(ProductsListingContext);

  const navigate = useNavigate();

  const handleBtnLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    dataDispatch({ type: "clear-all" });
    filtersDispatch({ type: "clear-all" });
    navigate("/");
  };
  return (
    <>
      <Navigation />
      Profile
      <button className="btn btn-primary" onClick={handleBtnLogout}>
        Logout
      </button>
    </>
  );
}
