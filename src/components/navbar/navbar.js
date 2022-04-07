import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import axios from 'axios';
import logo from '../../assets/logo.png';

export default function Navbar() {
    const [loginBtn, setLoginBtn] = useState();
    const [cartnumber, setCartNumber] = useState();
    const [wishlistnumber, setWishlistNumber] = useState(0);
    const { user, setUser, encodedToken, setEncodedToken } = useAuth();
    const navigate = useNavigate();

    useEffect(async () => {
        const res = await axios.get("/api/user/wishlist", {
            headers: {
                authorization: encodedToken
            }
        });
        setWishlistNumber(res.data.wishlist.length);
    }, [user])

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("token");
        navigate("/");
    }
    return (
        <div>
            <div className="container-nav">
                <Link to="/" style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <span className="brand-name">STYLEKART</span>
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                {/* <div className="flex">
                    <input className="searchbar" type="text" placeholder="Search" />
                    <i className="search-icon fas fa-search" aria-hidden="true"></i>
                </div> */}
                <div className="navbar-options">
                    <span onClick={() => { user ? handleLogout() : navigate("/login") }}> {user ? "Logout" : "Login"} </span>
                    <Link to="/wishlist">
                        <i className="nav-icon fa-regular fa-heart badge-icon">
                            {
                                user !== null ? <div className="badge-number">
                                    {wishlistnumber}
                                </div> :
                                    null
                            }

                        </i>
                    </Link>
                    <Link to="/cart">
                        <i className="nav-icon fas fa-shopping-cart badge-icon" aria-hidden="true">
                            {
                                user ? <div className="badge-number">
                                    {user.cart.length}

                                </div> :
                                    null
                            }
                        </i>
                    </Link>
                </div>
            </div>

        </div>
    )
}