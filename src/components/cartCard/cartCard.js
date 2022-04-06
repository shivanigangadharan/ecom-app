import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import axios from 'axios';

export default function CartCard({ product }) {
    const { title, author, brand, imgurl, price, rating, _id, id, qty } = product;
    const { encodedToken, user, setUser } = useAuth();
    const handleRemove = async () => {
        const res = await axios.delete(`/api/user/cart/${_id}`, {
            headers: {
                authorization: encodedToken
            }
        });
        setUser({ ...user, cart: res.data.cart });
    }
    const moveToWishlist = async () => {
        if (user.wishlist.length > 0) {
            if (!user.wishlist.some(item => item._id === _id)) {
                //if not in wishlist
                const res = await axios.post("/api/user/wishlist", { product }, {
                    headers: {
                        authorization: encodedToken
                    }
                });
                setUser({ ...user, wishlist: res.data.wishlist });
                handleRemove();
            }
        } else {
            const res = await axios.post("/api/user/wishlist", { product }, {
                headers: {
                    authorization: encodedToken
                }
            });
            setUser({ ...user, wishlist: res.data.wishlist });
            handleRemove();
        }
    }
    const changeQty = async (e) => {
        const res = await axios.post(`/api/user/cart/${_id}`, {
            action: {
                type: e === '+' ? "increment" : "decrement"
            }
        }, {
                headers: {
                    authorization: encodedToken
                }
            }
        )
    }
    return (
        <div>
            <div className="horizontal-card">
                <img className="img" src={imgurl} />
                <div className="card-details">
                    <h3>{title}</h3>
                    <span className="bold">Rs {price}</span>
                    <div className="quantity">
                        <label>Quantity:</label>
                        <div className="flex">
                            <button value="-" onClick={(e) => changeQty(e.target.value)} className="plusminus">-</button>
                            <input value={qty} className="qty-ip" type="number" />
                            <button value="+" onClick={(e) => changeQty(e.target.value)} className="plusminus">+</button>
                        </div>
                    </div>
                    <button onClick={handleRemove} className="btn move-btn remove">Remove from cart</button>
                    <button onClick={moveToWishlist} className="btn remove">Move to wishlist</button>
                </div>
            </div>
        </div>
    )
}