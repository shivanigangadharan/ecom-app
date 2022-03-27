import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/authContext';

export default function WishlistCard({ product }) {
    const { title, author, brand, imgurl, price, rating, _id } = product;
    const { encodedToken, user, setUser } = useAuth();
    const [added, setAdded] = useState(false);

    const handleAddToCart = async () => {
        if (!added) {
            const res = await axios.post("/api/user/cart", { product }, {
                headers: {
                    authorization: encodedToken
                }
            })
            setUser({ ...user, cart: [...user.cart, { product }] });
            setAdded(true);
        }
    }

    const handleRemove = async () => {
        const res = await axios.delete(`/api/user/wishlist/${_id}`, {
            headers: {
                authorization: encodedToken
            }
        });
        setUser({ ...user, wishlist: res.data.wishlist });
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
                <button onClick={handleRemove} className="btn move-btn cart">Remove from wishlist</button>
            </div>
        </div>
    )
}