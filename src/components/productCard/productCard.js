import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router';
import './productCard.css';

export default function ProductCard({ product }) {
    const { title, author, brand, imgurl, price, rating, _id } = product;
    const { user, setUser, encodedToken } = useAuth();
    const [added, setAdded] = useState(false);
    const [wish, setWish] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.wishlist.length > 0) {
            console.log(user.wishlist);
            user.wishlist.map((item) => {
                if (item._id === _id) {
                    setWish(true)
                }
            })
        }
    }, [])

    const handleAddToCart = async () => {
        if (user) {
            const res = await axios.post("/api/user/cart", { product }, {
                headers: {
                    authorization: encodedToken
                }
            })
            setAdded(true);
            setUser({ ...user, cart: [...user.cart, { product }] })
        }
        else {
            navigate("/login");
        }
    }
    const addWish = async () => {

        const res = await axios.post("/api/user/wishlist", { product }, {
            headers: {
                authorization: encodedToken
            }
        })
        setUser({ ...user, wishlist: res.data.wishlist });
        setWish(true);

    }
    const removeWish = async () => {
        const res = await axios.delete(`/api/user/wishlist/${_id}`, {
            headers: {
                authorization: encodedToken
            }
        });
        setUser({ ...user, wishlist: res.data.wishlist });
        setWish(false);
    }
    const handleWishClick = () => {
        if (user) {
            if (user.wishlist.some(item => item._id === _id)) {
                console.log(title, user.wishlist.some(item => item._id === _id));
                removeWish();
            } else {
                console.log("Not in wishlist");
                addWish();
            }
        }
        else {
            navigate("/login");
        }

    }
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
                <button onClick={handleAddToCart} className={added ? "btn move-btn cart" : "btn login cart"}>{added ? "Added" : "Add to cart"}</button>
                <div onClick={handleWishClick} className="wishlist-btn">
                    {wish === true ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </div>
            </div>

        </div>
    )
}