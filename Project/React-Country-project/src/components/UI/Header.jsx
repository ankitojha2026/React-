
import '..//../App.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="Header bg-dark  text-white">

            <div className="m-10rem"><NavLink to="/"><img src="/Images/logo.png" alt="Logo"  width="50px"/></NavLink></div>

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