import React from 'react';
import './wishlist.css';

export default function Wishlist() {
    return (
        <div>
            <div class="wishlist-page">
                <h2 class="bold"> My wishlist</h2>

                <div class="wishlist-grid">
                    <div class="container-card">
                        <img alt="Sample image" class="item-img" src="../../assets/jacket.jpg" />
                        <div class="content center">
                            <h3 class="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button class="btn move-btn cart">Move to cart</button>
                    </div>
                    <div class="container-card">
                        <img alt="Sample image" class="item-img" src="../../assets/jacket.jpg" />
                        <div class="content center">
                            <h3 class="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button class="btn move-btn cart">Move to cart</button>
                    </div>
                    <div class="container-card">
                        <img alt="Sample image" class="item-img" src="../../assets/jacket.jpg" />
                        <div class="content center">
                            <h3 class="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button class="btn move-btn cart">Move to cart</button>
                    </div>
                    <div class="container-card">
                        <img alt="Sample image" class="item-img" src="../../assets/jacket.jpg" />
                        <div class="content center">
                            <h3 class="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button class="btn move-btn cart">Move to cart</button>
                    </div>
                    <div class="container-card">
                        <img alt="Sample image" class="item-img" src="../../assets/jacket.jpg" />
                        <div class="content center">
                            <h3 class="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button class="btn move-btn cart">Move to cart</button>
                    </div>
                </div>
            </div>

        </div>
    )
}