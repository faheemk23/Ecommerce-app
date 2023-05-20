import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupHandler } from "../../../utilites/authUtilities";
import { AuthContext } from "../../../contexts/AuthContext";

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
  const [userAcceptsConditions, setUserAcceptsConditions] = useState(false);

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
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "350px" }}>
      <h2>Sigup</h2>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <div>
        <label htmlFor="firstName">First name: </label>
        <input
          type="text"
          id="firstName"
          onChange={handleSignupFields}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name: </label>
        <input
          type="text"
          id="lastName"
          onChange={handleSignupFields}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email address: </label>
        <input type="text" id="email" onChange={handleSignupFields} required />
      </div>
      <div>
        <label htmlFor="password">Password: </label>

        <input
          type={handlePasswordVisiblityToggle()}
          id="password"
          onChange={handleSignupFields}
          required
        />
        {showPassword ? (
          <i
            className="fa-sharp fa-regular fa-eye-slash"
            onClick={toggleShowPassword}
          ></i>
        ) : (
          <i className="fa-regular fa-eye" onClick={toggleShowPassword}></i>
        )}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm password: </label>
        <input
          type="password"
          id="confirmPassword"
          onChange={handleSignupFields}
          required
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="accept-tc"
          onClick={(e) => setUserAcceptsConditions(e.target.checked)}
          required
        />
        <label htmlFor="accept-tc">I accept all Terms & Conditions</label>{" "}
      </div>
      <div>
        <input
          type="submit"
          id="signup-submit"
          value="Sign Up"
          disabled={!userAcceptsConditions}
          onClick={() =>
            signupHandler(signupData, navigate, setErrorMessage, setLoggedIn)
          }
        />
      </div>

      <Link to="/login">Already have an Account {">"} </Link>
    </div>
  );
}
