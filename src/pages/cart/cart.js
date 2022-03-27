import React, { useEffect, useState } from 'react';
import './cart.css';
import CartCard from '../../components/cartCard/cartCard';
import { useAuth } from '../../context/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import PriceCard from '../../components/priceCard/priceCard';

export default function Cart() {
    const { user, encodedToken, setUser } = useAuth();
    const [cartdata, setCartdata] = useState([]);
    const navigate = useNavigate();
    useEffect(async () => {
        if (user !== null) {
            const res = await axios.get("/api/user/cart", {
                headers: {
                    authorization: encodedToken
                }
            });
            const original = res.data.cart.filter((ele, index, arr) => arr.findIndex(e => (e._id === ele._id)) === index);
            setCartdata(original);
            setUser({ ...user, cart: original });
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
                                <div className="empty-cart">
                                    <h1>No items</h1>
                                    <Link to="/productlist"> <button className="btn linked"> View more products </button></Link>
                                </div>
                                :
                                cartdata.map((item) => {
                                    return (
                                        <CartCard cartitem={item} key={item.id} />
                                    )
                                })
                        }
                    </div>
                    <PriceCard cartdata={cartdata} />

                </div>
            </div>

        </div>
    )
}