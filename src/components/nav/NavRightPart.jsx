import { Link } from "react-router-dom";

export function NavRightPart({home}){
    console.log(home)
    return (<div className='nav-right-part'>
    {home && <><button>Login</button></>}
    <Link to='/wishlist'>Wishlist</Link>
    <Link to ='/cart'>Cart</Link>
    </div>)
}