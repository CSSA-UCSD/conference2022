import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../img/logos/Wordmark_Dark.svg";
import Logo from "../../assets/Logo with glow.png";
import LogoNoGlow from "../../assets/Logo without glow.png";

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
                                        <Link to='/register' className='nav-link'>Register</Link>
                                    </h6>
                                </li>
                                <li className='nav-item'>
                                    <h6>
                                        <a href='https://urldefense.com/v3/__https://ucsd.zoom.us/w/91595431566?tk=ZUbRWXc9JiglvhsaeDsBt-NB1zdW2FK3uTvnhfJa8mk.DQIAAAAVU4NejhZSLWQ3WHlrRVFLZWFqLUlhdUVybFNnAAAAAAAAAAAAAAAAAAAAAAAAAAAA__;!!Mih3wA!Se0Nw7K3IQ3dbDF1ZldGin8IFC0FcDz4f8dx5ccQNWv5suDce9RavD0sYjVc5BQw$' target="_blank" className='nav-link'>Zoom</a>
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