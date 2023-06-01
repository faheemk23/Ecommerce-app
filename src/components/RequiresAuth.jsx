import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { giveToast } from "../utilites/miscUtilities";

export function RequiresAuth({ children }) {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
  if (!loggedIn) {
    giveToast("Please log in first.", "error");
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
