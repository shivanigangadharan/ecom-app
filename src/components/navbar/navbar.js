import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function Navbar() {
    const [loginBtn, setLoginBtn] = useState();
    const { user, setUser, setEncodedToken } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (user !== null) {
            setLoginBtn("Logout");
            // console.log("user at navbar : ", user)
        }
        else {
            setLoginBtn("Login");
        }
    })
    const handleLoginClick = () => {
        if (loginBtn == "Logout") {
            setUser(null);
            console.log("Logged out successfuly, user = ", user);
            navigate("/");
        }
        else {
            navigate("/login");
        }
    }
    return (
        <div>
            <div className="container-nav">
                <Link to="/">
                    <span className="brandname">E-mart</span>
                </Link>
                <div className="flex">
                    <input className="searchbar" type="text" placeholder="Search" />
                    <i className="search-icon fas fa-search" aria-hidden="true"></i>
                </div>
                <div className="nav-options">
                    <span onClick={handleLoginClick}> {loginBtn} </span>
                    <Link to="/wishlist">
                        <i className="nav-icon fa-regular fa-heart badge-icon">
                            <div className="badge-number">
                                6
                    </div>
                        </i>
                    </Link>
                    <Link to="/cart">
                        <i className="nav-icon fas fa-shopping-cart badge-icon" aria-hidden="true">
                            <div className="badge-number">
                                1
                    </div>
                        </i>
                    </Link>
                </div>
            </div>

        </div>
    )
}