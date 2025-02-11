
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets/image";
import { Button } from "../button/button";
import './style.css';
export const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate("/");
    }

    // useEffect(() => {
    //     const checkAuthToken = () => {
    //         const token = sessionStorage.getItem('Auth token');
    //         if (token) {
    //             setIsLoggedIn(true);
    //         } else {
    //             setIsLoggedIn(false);
    //         }
    //     }

    //     window.addEventListener('storage', checkAuthToken);

    //     return () => {
    //         window.removeEventListener('storage', checkAuthToken);
    //     }
    // }, [])

    return (
        <nav id="header">
            <div className="container">
                {/* Logo Section */}
                <div className="logo-wrapper">
                    <Link to="/" className="logo">
                        <img src={IMAGES.foody} alt="logo" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="nav-menu-wrapper">
                    <Link to="/">Home</Link>
                    <Link to="#about">About</Link>
                </div>

                {/* Auth & Cart Section */}
                <div className="auth-buttons">
                    {/* <Link to="/cart" className="cart-icon"> */}
                    {/* Placeholder for cart icon */}
                    {/* </Link> */}
                    {isLoggedIn ? (
                        <Button text="Log Out" onClick={handleLogout} variant="primaryOrangeHex" />
                    ) : (
                        <>
                            <Link to="/login" className="auth-link">Log In</Link>
                            <Link to="/register" className="auth-link">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}