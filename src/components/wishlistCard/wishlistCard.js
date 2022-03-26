import React from 'react';

export default function WishlistCard({ wishlistitem }) {
    const { title, author, brand, imgurl, price, rating, _id, id } = wishlistitem;
    return (
        <div>
            <div className="container-card">
                <img alt="Sample image" className="item-img" src={imgurl} />
                <div className="content center">
                    <h3 className="item-name">{title}</h3>
                    <p className="grey-text">{brand} </p>
                    <p> Rating : {rating} </p>
                    <b>Rs. {price}</b>
                </div>
                <button className="btn move-btn cart">Move to cart</button>
            </div>
        </div>
    )
}