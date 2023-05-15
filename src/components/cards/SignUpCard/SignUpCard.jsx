import { useState } from "react";
import { Link } from "react-router-dom";
import { signupHandler } from "../../../Utilites/authUtilities";

export function SignUpCard() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

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
          type="text"
          id="password"
          onChange={handleSignupPasswordField}
          required
        />
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
