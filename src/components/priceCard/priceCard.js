import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import axios from 'axios';

export default function PriceCard({ cartdata }) {
    const { user, encodedToken } = useAuth();
    const [totalprice, setTotalprice] = useState(0);
    const [discount, setDiscount] = useState(500);
    const [delivery, setDelivery] = useState(250);
    const [finalprice, setFinalprice] = useState();
    const [saved, setSaved] = useState(0);

    useEffect(async () => {
        const res = await axios.get("/api/user/cart", {
            headers: {
                authorization: encodedToken
            }
        });
        let sum = 0;
        let disc = 0;
        let del = 0;
        res.data.cart.map((e) => {
            sum += (e.price * e.qty);
            disc += (0.05 * e.price);
            //5 percent discount for every item
            del += (0.02 * e.price);
            //2 percent delivery charge for each item
        })
        setTotalprice(sum);
        setDelivery(del);
        setFinalprice(totalprice - discount + delivery);
        setSaved(discount - delivery);
    }, [user])

    return (
        <div>

            <div className="price-details">
                <h4 className="bold">PRICE DETAILS</h4>
                <hr />
                <div className="flex-between">
                    <span>Price ({cartdata.length} items) </span>
                    <span className="text-right">{totalprice} </span>
                </div>
                <div className="flex-between">
                    <span>Discount </span>
                    <span className="text-right">-{discount} </span>
                </div>
                <div className="flex-between">
                    <span>Delivery charges </span>
                    <span className="text-right"> {delivery} </span>
                </div>
                <hr />
                <div className="flex-between">
                    <span className="bold">TOTAL AMOUNT</span>
                    <span className="text-right bold">{finalprice}</span>
                </div>
                <span>You will save Rs. {saved} on this order</span>
                <button className="login">CHECKOUT</button>

            </div>
        </div>
    )
}