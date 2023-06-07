import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginHandler } from "../../../utilites/authUtilities";
import { AuthContext } from "../../../contexts/AuthContext";
import { DataContext } from "../../../contexts/DataContext";

import "./LoginCard.css";

export function LoginCard() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const { dataDispatch } = useContext(DataContext);
  const { setLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from;

  const testUserData = {
    email: "jordanwalke@gmail.com",
    password: "jordanwalke",
  };

  const handleLoginFields = (e) => {
    const field = e.target.id;
    const fieldValue = e.target.value;
    setloginData((prev) => ({ ...prev, [field]: fieldValue }));
  };

  return (
    <div className="login-card">
      <div className="login-header">Login</div>
      <div>
        <label className="login-label" htmlFor="email">
          Email address:{" "}
        </label>
        <input
          className="login-input"
          type="text"
          id="email"
          onChange={handleLoginFields}
        />
      </div>
      <div>
        <label className="login-label" htmlFor="password">
          Password:{" "}
        </label>
        <input
          className="login-input"
          type="password"
          id="password"
          onChange={handleLoginFields}
        />
      </div>
      <div>
        <input className="login-checkbox" type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>{" "}
      </div>
      <div>
        <input
          className="login-input btn btn-primary"
          type="submit"
          id="login-submit"
          onClick={() =>
            loginHandler(loginData, navigate, setLoggedIn, dataDispatch, from)
          }
          value="Login"
        />
      </div>

      <button
        className="btn btn-secondary btn-test-user btn-secondary-hover"
        onClick={() =>
          loginHandler(testUserData, navigate, setLoggedIn, dataDispatch, from)
        }
      >
        Login as Test User
      </button>

      <Link className="auth-link orange" to="/signup">
        Create New Account {">"}{" "}
      </Link>
    </div>
  );
}
