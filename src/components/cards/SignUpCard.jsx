import { Link } from "react-router-dom";

export function SignUpCard() {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "350px" }}>
      <h2>Sigup</h2>
      <form action="#" method="post">
        <div>
          <label htmlFor="email">Email address</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <div>
          <input type="checkbox" id="accept-tc" />
          <label htmlFor="accept-tc">
            I accept all Terms & Conditions
          </label>{" "}
        </div>
        <div>
          <button>Create New Account</button>{" "}
        </div>

        <Link to="/login">Already have an Account {">"} </Link>
      </form>
    </div>
  );
}
