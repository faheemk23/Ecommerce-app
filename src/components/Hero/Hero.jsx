import { Link } from "react-router-dom";
import heroImage from "../../assets/fruits-hero.webp";
import "./Hero.css";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-heading">
        <h2>
          Order Your
          <br />
          Daily Groceries
        </h2>

        <h3 className="orange">#Free delivery</h3>
        <Link to="/productlisting" className="hero-link btn btn-primary">
          Show Products
        </Link>
      </div>
      <img
        className="hero-img"
        src={heroImage}
        height="42vh"
        width="62vw"
        alt="food"
      />
    </div>
  );
}
