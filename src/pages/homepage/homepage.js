import React, { useState, useEffect } from 'react';
import './homepage.css';
import '../../components.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFilter } from '../../context/filterContext';
import axios from 'axios';
import newarrival from '../../assets/newarrival.jpg';
import trends from '../../assets/trends.png';

export default function Homepage() {

    const [categories, setCategories] = useState();

    useEffect(async () => {
        const res = await axios.get("/api/categories");
    })

    const { state, dispatch } = useFilter();
    const navigate = useNavigate();

    const handleCategory = (e) => {
        dispatch({ type: "CLEAR" });
        dispatch({ type: "ADD_FILTER_BY_CATEGORY", payload: e });
        navigate("/productlist");
    }
    return (
        <div>
            <div className="homepage">
                <div className="img-grid">
                    <div className="category-box">
                        <img className="category-img" onClick={() => handleCategory("womens clothing")} alt="womens clothing" src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <div className="category-label"> WOMEN'S CLOTHING </div>
                    </div>
                    <div className="category-box">
                        <img className="category-img" onClick={() => handleCategory("mens clothing")} alt="mens clothing" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <div className="category-label"> MEN'S CLOTHING </div>
                    </div>
                    <div className="category-box">
                        <img className="category-img" onClick={() => handleCategory("kids clothing")} alt="kids clothing" src="https://images.unsplash.com/photo-1611428813653-aa606c998586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80" />
                        <div className="category-label"> KID'S CLOTHING </div>
                    </div>
                </div>

                <div className="content-grid">
                    <div className="section-main">
                        <Link to="/productlist">
                            <button className="btn secondary"> View all products </button>
                        </Link>
                    </div>

                    <div className="section-sub s1">
                        <img className="img new-img" alt="new arrival" src={newarrival} />
                        <div className="new-arrivals">
                            <div>NEW ARRIVALS</div>
                            <div>
                                <h4 className="bold">Summer Collection</h4>
                                <span>Check out our best summer collection and slay in fashion. </span>
                            </div>
                        </div>
                    </div>
                    <div className="section-sub s2">
                        <img className="img new-img" alt="trends" src={trends} />
                        <div className="new-arrivals">
                            <div>TREND-SETTERS</div>
                            <div>
                                <h4 className="bold">Latest trends</h4>
                                <span>Get products currently in trend curated exclusively by our style experts. </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}