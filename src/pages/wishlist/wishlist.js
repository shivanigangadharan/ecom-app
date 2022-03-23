import React from 'react';
import './wishlist.css';

export default function Wishlist() {
    return (
        <div>
            <div className="wishlist-page">
                <h2 className="bold"> My wishlist</h2>

                <div className="wishlist-grid">
                    <div className="container-card">
                        <img alt="Sample image" className="item-img" src="../../assets/jacket.jpg" />
                        <div className="content center">
                            <h3 className="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button className="btn move-btn cart">Move to cart</button>
                    </div>
                    <div className="container-card">
                        <img alt="Sample image" className="item-img" src="../../assets/jacket.jpg" />
                        <div className="content center">
                            <h3 className="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button className="btn move-btn cart">Move to cart</button>
                    </div>
                    <div className="container-card">
                        <img alt="Sample image" className="item-img" src="../../assets/jacket.jpg" />
                        <div className="content center">
                            <h3 className="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button className="btn move-btn cart">Move to cart</button>
                    </div>
                    <div className="container-card">
                        <img alt="Sample image" className="item-img" src="../../assets/jacket.jpg" />
                        <div className="content center">
                            <h3 className="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button className="btn move-btn cart">Move to cart</button>
                    </div>
                    <div className="container-card">
                        <img alt="Sample image" className="item-img" src="../../assets/jacket.jpg" />
                        <div className="content center">
                            <h3 className="item-name">Women's premium jacket </h3>
                            <b>Rs. 2000</b>
                        </div>
                        <button className="btn move-btn cart">Move to cart</button>
                    </div>
                </div>
            </div>

        </div>
    )
}