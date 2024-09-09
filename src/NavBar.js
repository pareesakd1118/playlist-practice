import { Link } from "react-router-dom"

export default function NavBar() {

    return (
        <nav className="w-full flex justify-around ">
            <Link to="/" >Home</Link>
            <Link to="/favs" >Fav Songs</Link>
        </nav>
    )
}