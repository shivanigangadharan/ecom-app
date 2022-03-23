import React from 'react';
import './cart.css';
import jacket from '../../assets/jacket.jpg';

export default function Cart() {
    return (
        <div>
            <div className="cart-page">
                <h2 className="bold center"> MY CART (2) </h2>
                <div className="cart-content">

                    <div className="horizontal-card">
                        <img className="img" src={jacket} />
                        <div className="card-details">
                            <h3>Women premium jacket</h3>
                            <span className="bold">Rs 2000</span>
                            <span className="oldprice">Rs 3999</span>
                            <h3 className="grey-text bold">50% off</h3>
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

                    <div className="price-details">
                        <h4 className="bold">PRICE DETAILS</h4>
                        <hr />
                        <div className="flex-between">
                            <span>Price (2 items) </span>
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