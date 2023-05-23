import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export function RequiresAuth({ children }) {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
  if (!loggedIn) {
    toast("Please log in first.", {
      position: "bottom-right",
      type: "error",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
