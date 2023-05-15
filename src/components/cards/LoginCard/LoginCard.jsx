import { useState } from "react";
import { Link } from "react-router-dom";
import {
  loginHandler,
  testUserLoginHandler,
} from "../../../Utilites/authUtilities";

export function LoginCard() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginEmailField = (e) => {
    const userEmail = e.target.value;
    setloginData((prev) => ({ ...prev, email: userEmail }));
  };

  const handleLoginPasswordField = (e) => {
    const userPassword = e.target.value;
    setloginData((prev) => ({ ...prev, password: userPassword }));
  };
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "350px" }}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" onChange={handleLoginEmailField} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="" onChange={handleLoginPasswordField} />
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
          onClick={() => loginHandler(loginData)}
          value="Login"
        />
      </div>
      <div>
        <button onClick={testUserLoginHandler}>Login as Test User</button>
      </div>

      <Link to="/signup">Create New Account {">"} </Link>
    </div>
  );
}
