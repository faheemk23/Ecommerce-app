import { useState } from "react";
import { Link } from "react-router-dom";
import { signupHandler } from "../../../utilites/authUtilities";

export function SignUpCard() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignupEmailField = (e) => {
    const userEmail = e.target.value;
    setSignupData((prev) => ({ ...prev, email: userEmail }));
  };

  const handleSignupPasswordField = (e) => {
    const userPassword = e.target.value;
    setSignupData((prev) => ({ ...prev, password: userPassword }));
  };
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "350px" }}>
      <h2>Sigup</h2>

      <div>
        <label htmlFor="first-name">First name: </label>
        <input type="text" id="first-name" required />
      </div>
      <div>
        <label htmlFor="last-name">Last name: </label>
        <input type="text" id="last-name" required />
      </div>
      <div>
        <label htmlFor="email">Email address: </label>
        <input
          type="text"
          id="email"
          onChange={handleSignupEmailField}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>

        <input
          type="password"
          id="password"
          onChange={handleSignupPasswordField}
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
        <label htmlFor="confirm-password">Confirm password: </label>
        <input type="password" id="confirm-password" required />
      </div>
      <div>
        <input type="checkbox" id="accept-tc" required />
        <label htmlFor="accept-tc">I accept all Terms & Conditions</label>{" "}
      </div>
      <div>
        <input
          type="submit"
          id="signup-submit"
          value="Sign Up"
          onClick={() => signupHandler(signupData)}
        />
      </div>

      <Link to="/login">Already have an Account {">"} </Link>
    </div>
  );
}
