import { Link } from "react-router-dom"
import "./Navigation.css"
import { SearchBar } from "./SearchBar"
import { NavRightPart } from "./NavRightPart"

export function Navigation({showBtnLogin}){
    return(<div className="nav">
        <div className="nav-logo"><Link to='/'>BazaarShoppingSite</Link></div>
        <SearchBar/>
        <NavRightPart showBtnLogin={showBtnLogin}/>
    </div>)
}