import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import './Nav.css'


const Nav = () => {
    const history = useHistory()

    return (
        <>
            <nav>
                <ul>
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
                </ul>
            </nav>
        </>
    )
}

export default Nav
