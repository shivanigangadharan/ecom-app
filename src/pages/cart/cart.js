import React from 'react';
import './cart.css';
import jacket from '../../assets/jacket.jpg';

export default function Cart() {
    return (
        <div>
            <div class="cart-page">
                <h2 class="bold center"> MY CART (2) </h2>
                <div class="cart-content">

                    <div class="horizontal-card">
                        <img class="img" src={jacket} />
                        <div class="card-details">
                            <h3>Women premium jacket</h3>
                            <span class="bold">Rs 2000</span>
                            <span class="oldprice">Rs 3999</span>
                            <h3 class="grey-text bold">50% off</h3>
                            <div class="quantity">
                                <label>Quantity:</label>
                                <div class="flex">
                                    <button class="plusminus">+</button>
                                    <input class="qty-ip" type="number" />
                                    <button class="plusminus">-</button>
                                </div>
                            </div>
                            <button class="btn move-btn remove">Remove from cart</button>
                            <button class="btn remove">Move to wishlist</button>

                        </div>
                    </div>

                    <div class="price-details">
                        <h4 class="bold">PRICE DETAILS</h4>
                        <hr />
                        <div class="flex-between">
                            <span>Price (2 items) </span>
                            <span class="text-right">2000 </span>
                        </div>
                        <div class="flex-between">
                            <span>Discount </span>
                            <span class="text-right">-1999 </span>
                        </div>
                        <div class="flex-between">
                            <span>Delivery charges </span>
                            <span class="text-right"> 499 </span>
                        </div>
                        <hr />
                        <div class="flex-between">
                            <span class="bold">TOTAL AMOUNT</span>
                            <span class="text-right bold">3499</span>
                        </div>
                        <span>You will save Rs. 1999 on this order</span>
                        <button class="login">Place order</button>

                    </div>

                </div>
            </div>

        </div>
    )
}