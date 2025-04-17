
import '..//../App.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="Header">

            <h1>Country App</h1>

            <nav className="nav">
                <ul>
                    <li><NavLink to="/"  className="NavLink">Home</NavLink></li>
                    <li><NavLink to="/about" className="NavLink">About</NavLink></li>
                    <li><NavLink to="/country" className="NavLink">Country</NavLink></li>
                    <li><NavLink to="/contact" className="NavLink">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;