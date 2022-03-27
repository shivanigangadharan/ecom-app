import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/authContext';

export default function WishlistCard({ product }) {
    const { title, author, brand, imgurl, price, rating, _id } = product;
    const { encodedToken, user, setUser } = useAuth();
    const [added, setAdded] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(async () => {
        const res = await axios.get("/api/user/cart", {
            headers: {
                authorization: encodedToken
            }
        });
        setCartItems(res.data.cart);
        if (cartItems.some(item => item._id === _id)) {
            setAdded(true);
        }


    }, [cartItems])

    const handleAddToCart = async () => {
        if (!cartItems.some(item => item._id === _id)) {
            const res = await axios.post("/api/user/cart", { product }, {
                headers: {
                    authorization: encodedToken
                }
            })
            setUser({ ...user, cart: [...user.cart, { product }] });
            setAdded(true);
        }
        else {
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
                <button onClick={handleAddToCart} className={added ? "btn move-btn cart" : "btn login cart"}>{added ? "Added to cart" : "Add to cart"}</button>
                <button onClick={handleRemove} className="btn move-btn cart">Remove from wishlist</button>
            </div>
        </div>
    )
}