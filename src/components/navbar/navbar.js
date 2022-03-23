import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
                    <Link className="nav-item" to="/login"> Login </Link>
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