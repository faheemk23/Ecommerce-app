import { Navigation } from "../components/nav/Navigation";

import "../App.css"
import { CategoryCard } from "../components/cards/CategoryCard";

export function Home(){
    return(<div className="home">
    <Navigation showBtnLogin/>
    <CategoryCard/>
    </div>)
}