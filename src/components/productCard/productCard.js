import React from 'react';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router';

export default function ProductCard({ product }) {
    const { title, author, brand, imgurl, price, rating } = product;
    const { user, encodedToken } = useAuth();
    const navigate = useNavigate();
    const handleAddToCart = async () => {
        if (user) {
            const res = await axios.post("/api/user/cart", { product }, {
                headers: {
                    authorization: encodedToken
                }
            })
            console.log("posting to cart", res);
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
                <button onClick={handleAddToCart} className="btn login cart">Add to cart</button>
            </div>
        </div>
    )
}