import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import axios from 'axios';

export default function PriceCard({ cartdata }) {
    console.log("Cart data in price card :", cartdata);
    const { user, encodedToken } = useAuth();
    const [totalprice, setTotalprice] = useState(0);
    useEffect(async () => {
        const res = await axios.get("/api/user/cart", {
            headers: {
                authorization: encodedToken
            }
        });
        let sum = 0;
        res.data.cart.map((e) => {
            sum += e.price;
        })
        setTotalprice(sum);
    }, [])

    return (
        <div>

            <div className="price-details">
                <h4 className="bold">PRICE DETAILS</h4>
                <hr />
                <div className="flex-between">
                    <span>Price ({cartdata.length} items) </span>
                    <span className="text-right">2000 </span>
                </div>
                <div className="flex-between">
                    <span>Discount </span>
                    <span className="text-right">-1999 </span>
                </div>
                <div className="flex-between">
                    <span>Delivery charges </span>
                    <span className="text-right"> 499 </span>
                </div>
                <hr />
                <div className="flex-between">
                    <span className="bold">TOTAL AMOUNT</span>
                    <span className="text-right bold">{totalprice}</span>
                </div>
                <span>You will save Rs. 1999 on this order</span>
                <button className="login">Place order</button>

            </div>
        </div>
    )
}