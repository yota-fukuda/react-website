import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link 
                        to="/" 
                        className="navbar-logo"
                        onClick={closeMenu}    
                    >
                        Portfolio <i class="fas fa-anchor"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link
                                to="/" 
                                className="nav-links" 
                                onClick={closeMenu}
                             >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/products" 
                                className="nav-links" 
                                onClick={closeMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/contacts"
                                className="nav-links"
                                onClick={closeMenu}
                            >
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar