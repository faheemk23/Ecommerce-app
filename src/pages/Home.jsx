import { Navigation } from "../components/nav/Navigation";

import "../App.css";
import { CategoryCard } from "../components/cards/CategoryCard";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home">
      <Navigation showBtnLogin />
      <CategoryCard />
      <Link to="/productlisting">Products</Link>
    </div>
  );
}
