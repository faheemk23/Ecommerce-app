import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
  if (!loggedIn) {
    alert("Please log in first.");
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
