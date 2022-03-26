import React, { useEffect, useState } from 'react';
import './wishlist.css';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router';
import axios from 'axios';
import WishlistCard from '../../components/wishlistCard/wishlistCard';

export default function Wishlist() {
    const { user, setUser, encodedToken } = useAuth();
    const navigate = useNavigate();
    const [wishlistdata, setWishlistData] = useState([]);
    useEffect(async () => {
        if (user) {
            const res = await axios.get("/api/user/wishlist", {
                headers: {
                    authorization: encodedToken
                }
            });
            console.log("res data: ", res.data.wishlist);
            setWishlistData(res.data.wishlist);
        }
        else {
            navigate("/login");
            alert("Please login first to see your wishlist.");
        }
    }, [])
    return (
        <div>
            <div className="wishlist-page">
                <h2 className="bold"> My wishlist</h2>

                <div className="wishlist-grid">
                    {
                        wishlistdata.length === 0 ?
                            <div>
                                <h1>No items</h1>
                            </div>
                            :
                            wishlistdata.map((item) => {
                                return (
                                    <WishlistCard product={item} key={item.id} />
                                )
                            })
                    }
                </div>
            </div>

        </div>
    )
}