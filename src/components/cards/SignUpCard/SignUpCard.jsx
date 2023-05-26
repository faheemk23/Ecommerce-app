import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupHandler } from "../../../utilites/authUtilities";
import { AuthContext } from "../../../contexts/AuthContext";

import "./SignUpCard.css";

export function SignUpCard() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { setLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignupFields = (e) => {
    const field = e.target.id;
    const fieldValue = e.target.value;
    setSignupData((prev) => ({ ...prev, [field]: fieldValue }));
  };

  const handlePasswordVisiblityToggle = () =>
    showPassword ? "text" : "password";

  return (
    <div className="signup-card">
      <div className="signup-header">Signup</div>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <div>
        <label className="signup-label" htmlFor="firstName">
          First name:{" "}
        </label>
        <input
          className="signup-input"
          type="text"
          id="firstName"
          onChange={handleSignupFields}
          required
        />
      </div>
      <div>
        <label className="signup-label" htmlFor="lastName">
          Last name:{" "}
        </label>
        <input
          className="signup-input"
          type="text"
          id="lastName"
          onChange={handleSignupFields}
          required
        />
      </div>
      <div>
        <label className="signup-label" htmlFor="email">
          Email address:{" "}
        </label>
        <input
          className="signup-input"
          type="text"
          id="email"
          onChange={handleSignupFields}
          required
        />
      </div>
      <div className="signup-password-container">
        <label className="signup-label" htmlFor="password">
          Password:{" "}
        </label>

        <input
          className="signup-input"
          type={handlePasswordVisiblityToggle()}
          id="password"
          onChange={handleSignupFields}
          required
        />
        {showPassword ? (
          <i
            className="fa-sharp fa-regular fa-eye-slash visiblity-eye"
            onClick={toggleShowPassword}
          ></i>
        ) : (
          <i
            className="fa-regular fa-eye visiblity-eye"
            onClick={toggleShowPassword}
          ></i>
        )}
      </div>
      <div>
        <label className="signup-label" htmlFor="confirmPassword">
          Confirm password:{" "}
        </label>
        <input
          className="signup-input"
          type="password"
          id="confirmPassword"
          onChange={handleSignupFields}
          required
        />
      </div>

      <div>
        <input
          className="signup-input btn btn-primary top-margin"
          type="submit"
          id="signup-submit"
          value="Sign Up"
          onClick={() =>
            signupHandler(signupData, navigate, setErrorMessage, setLoggedIn)
          }
        />
      </div>

      <Link className="auth-link orange" to="/login">
        Already have an Account {">"}{" "}
      </Link>
    </div>
  );
}
