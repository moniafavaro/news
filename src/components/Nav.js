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
                    <img src="https://i.ibb.co/Cb8Np5j/logo-01.png" alt="logo-01" width='156em'/>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/sport'>Sports</Link>
                    </li>
                    <li>
                        <Link to='/entertainment'>Entertainment</Link>
                    </li>
                    <li>
                        <Link to='/business'>Business</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
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
