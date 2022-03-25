import React, { useEffect, useState } from 'react';
import jacket from '../../assets/jacket.jpg';
import { useAuth } from '../../context/authContext';
import axios from 'axios';

export default function CartCard({ cartitem }) {
    const { title, author, brand, imgurl, price, rating } = cartitem;
    console.log("cart", cartitem);
    return (
        <div>
            <div className="horizontal-card">
                <img className="img" src={jacket} />
                <div className="card-details">
                    <h3>{title}</h3>
                    <span className="bold">Rs {price}</span>
                    <div className="quantity">
                        <label>Quantity:</label>
                        <div className="flex">
                            <button className="plusminus">+</button>
                            <input className="qty-ip" type="number" />
                            <button className="plusminus">-</button>
                        </div>
                    </div>
                    <button className="btn move-btn remove">Remove from cart</button>
                    <button className="btn remove">Move to wishlist</button>

                </div>
            </div>
        </div>
    )
}