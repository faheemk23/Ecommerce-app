import Mockman from "mockman-js";
import { Link } from "react-router-dom";

export function MockmanTest() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Mockman />
    </div>
  );
}
