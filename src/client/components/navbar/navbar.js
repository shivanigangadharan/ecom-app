import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <div class="container-nav">
                <Link to="/">
                    <span class="brandname">E-mart</span>
                </Link>
                <div class="flex">
                    <input class="searchbar" type="text" placeholder="Search" />
                    <i class="search-icon fas fa-search" aria-hidden="true"></i>
                </div>
                <div class="nav-options">
                    <Link class="nav-item" to="/login"> Login </Link>
                    <Link to="/wishlist">
                        <i class="nav-icon fa-regular fa-heart badge-icon">
                            <div class="badge-number">
                                6
                    </div>
                        </i>
                    </Link>
                    <Link to="/cart">
                        <i class="nav-icon fas fa-shopping-cart badge-icon" aria-hidden="true">
                            <div class="badge-number">
                                1
                    </div>
                        </i>
                    </Link>
                </div>
            </div>

        </div>
    )
}