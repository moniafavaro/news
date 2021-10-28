import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import SearchBar from "../pages/SearchBar"
import '../styles/Nav.css'


const Nav = () => {
    const history = useHistory()

    return (
        <>
            <nav>
                <ul>
                    <li className='name'>
                        <p>MONTANnews</p>
                    </li>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/sport'>SPORT</Link>
                    </li>
                    <li>
                        <Link to='/entertainment'>ENTERTAINMENT</Link>
                    </li>
                    <li>
                        <Link to='/business'>BUSINESS</Link>
                    </li>
                    <li>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                    <li className='search-bar'>
                        <SearchBar />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
