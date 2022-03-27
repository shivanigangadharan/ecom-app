import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import axios from 'axios';

export default function CartCard({ cartitem }) {
    const { title, author, brand, imgurl, price, rating, _id, id } = cartitem;
    const [qty, setQty] = useState(1);
    const { encodedToken, user, setUser } = useAuth();
    const handleRemove = async () => {
        const res = await axios.delete(`/api/user/cart/${_id}`, {
            headers: {
                authorization: encodedToken
            }
        });
        setUser({ ...user, cart: res.data.cart });

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
                            <button onClick={() => setQty(qty - 1)} className="plusminus">-</button>
                            <input value={qty} className="qty-ip" type="number" />
                            <button onClick={() => setQty(qty + 1)} className="plusminus">+</button>
                        </div>
                    </div>
                    <button onClick={handleRemove} className="btn move-btn remove">Remove from cart</button>
                    <button className="btn remove">Move to wishlist</button>
                </div>
            </div>
        </div>
    )
}