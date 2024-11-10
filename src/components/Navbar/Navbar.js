import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar=()=>{
    return (
        <nav>
            <Link to='/' className='link'><h1>Brisphere</h1></Link>
            <ul className="links-container">
                <li><a href="#discover">Discover</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href="#aboutus">About Us</a></li>
            </ul>
        </nav>
    )
}
export default Navbar