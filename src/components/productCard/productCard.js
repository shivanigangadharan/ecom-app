import React from 'react';

export default function ProductCard({ product }) {
    const { title, author, brand, imgurl, price } = product;
    return (
        <div>
            <div className="container-card">
                <img alt="Sample image" className="item-img" src={imgurl} />
                <div className="content center">
                    <h3 className="item-name">{title}</h3>
                    <p className="grey-text">{brand} </p>
                    <b>Rs. {price}</b>
                </div>
                <button className="btn login cart">Add to cart</button>
            </div>
        </div>
    )
}