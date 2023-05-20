import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginHandler } from "../../../utilites/authUtilities";
import { AuthContext } from "../../../contexts/AuthContext";
import { DataContext } from "../../../contexts/DataContext";

export function LoginCard() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const { dataDispatch } = useContext(DataContext);
  const { setLoggedIn, loggedIn } = useContext(AuthContext);
  // console.log({ setLoggedIn, loggedIn });

  const navigate = useNavigate();

  const testUserData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const handleLoginFields = (e) => {
    const field = e.target.id;
    const fieldValue = e.target.value;
    setloginData((prev) => ({ ...prev, [field]: fieldValue }));
  };

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "350px" }}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email address: </label>
        <input type="text" id="email" onChange={handleLoginFields} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" onChange={handleLoginFields} />
      </div>
      <div>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>{" "}
        <Link to="#">Forgot your Password?</Link>
      </div>
      <div>
        <input
          type="submit"
          id="login-submit"
          onClick={() =>
            loginHandler(loginData, navigate, setLoggedIn, dataDispatch)
          }
          value="Login"
        />
      </div>
      <div>
        <button
          onClick={() =>
            loginHandler(testUserData, navigate, setLoggedIn, dataDispatch)
          }
        >
          Login as Test User
        </button>
      </div>

      <Link to="/signup">Create New Account {">"} </Link>
    </div>
  );
}
