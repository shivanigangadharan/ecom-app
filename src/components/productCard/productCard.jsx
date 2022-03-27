import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router';

export default function ProductCard({ product }) {
    const { title, author, brand, imgurl, price, rating } = product;
    const { user, setUser, encodedToken } = useAuth();
    const [added, setAdded] = useState(false);
    const navigate = useNavigate();
    const handleAddToCart = async () => {
        if (user) {
            const res = await axios.post("/api/user/cart", { product }, {
                headers: {
                    authorization: encodedToken
                }
            })
            setAdded(true);
            setUser({ ...user, cart: [...user.cart, { product }] })
        }
        else {
            navigate("/login");
        }

    }
    return (
        <div>
            <div className="container-card">
                <img alt="Sample image" className="item-img" src={imgurl} />
                <div className="content center">
                    <h3 className="item-name">{title}</h3>
                    <p className="grey-text">{brand} </p>
                    <p> Rating : {rating} </p>
                    <b>Rs. {price}</b>

                </div>
                <button onClick={handleAddToCart} className={added ? "btn move-btn cart" : "btn login cart"}>{added ? "Added" : "Add to cart"}</button>
            </div>
        </div>
    )
}