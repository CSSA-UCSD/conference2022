import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logos/Wordmark_Dark.svg";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <Link to="/" className="navbar-brand"><img src={Logo} alt="CSSA @ UCSD"></img> </Link>
                        <div className="menu">
                            <ul className="nav">
                                <li className='nav-item'>
                                    <h6>
                                        <Link to='/schedule' className='nav-link'>Schedule</Link>
                                    </h6>
                                </li>
                                <li className='nav-item'>
                                    <h6>
                                        <Link to='/speakers' className='nav-link'>Speakers</Link>
                                    </h6>
                                </li>
                                <li className='nav-item'>
                                    <h6>
                                        <Link to='/' className='nav-link'>Register</Link>
                                    </h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;