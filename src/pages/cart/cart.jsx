import React, { useEffect, useState } from 'react';
import './cart.css';
import CartCard from '../../components/cartCard/cartCard';
import { useAuth } from '../../context/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Cart() {
    const { user, encodedToken } = useAuth();
    const [cartdata, setCartdata] = useState([]);
    const navigate = useNavigate();
    useEffect(async () => {
        if (user !== null) {
            const res = await axios.get("/api/user/cart", {
                headers: {
                    authorization: encodedToken
                }
            });
            setCartdata(res.data.cart);
        }
        else {
            navigate("/login");
            alert("Please login first to see your cart.");
        }

    }, [user])
    return (
        <div>
            <div className="cart-page">
                <h2 className="bold center"> MY CART ({cartdata.length}) </h2>
                <div className="cart-content">
                    <div className="cards-container">
                        {
                            cartdata.length === 0 ?
                                <div>
                                    <h1>No items</h1>
                                </div>
                                :
                                cartdata.map((item) => {
                                    return (
                                        <CartCard cartitem={item} key={item.id} />

                                    )
                                })
                        }
                    </div>
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
                            <span className="text-right bold">3499</span>
                        </div>
                        <span>You will save Rs. 1999 on this order</span>
                        <button className="login">Place order</button>

                    </div>

                </div>
            </div>

        </div>
    )
}