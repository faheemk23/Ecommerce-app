import { Link } from "react-router-dom";

export function LoginCard() {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "350px" }}>
      <h2>Login</h2>
      <form action="#" method="post">
        <div>
          <label htmlFor="email">Email address</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="" password />
        </div>
        <div>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>{" "}
          <Link to="#">Forgot your Password?</Link>
        </div>
        <div>
          <button>Login</button>{" "}
        </div>

        <Link to="/signup">Create New Account {">"} </Link>
      </form>
    </div>
  );
}
