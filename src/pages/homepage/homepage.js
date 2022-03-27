import React from 'react';
import './homepage.css';
import '../../components.css';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div>
            <div className="homepage">
                <div className="img-grid">
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                </div>

                <div className="content-grid">
                    <div className="section-main">
                        <Link to="/productlist">
                            <button className="btn secondary"> View products </button>
                        </Link>
                    </div>

                    <div className="section-sub s1">
                        <img className="img new-img" alt="new arrival" src="../../assets/newarrival.jpg" />
                        <div className="new-arrivals">
                            <div>NEW ARRIVALS</div>
                            <div>
                                <h4 className="bold">Winter Collection</h4>
                                <span>Check out our best winter collection and stay warm in fashion. </span>
                            </div>
                        </div>
                    </div>
                    <div className="section-sub s2">
                        <img className="img new-img" alt="new arrival" src="../../assets/newarrival.jpg" />
                        <div className="new-arrivals">
                            <div>NEW ARRIVALS</div>
                            <div>
                                <h4 className="bold">Winter Collection</h4>
                                <span>Check out our best winter collection and stay warm in fashion. </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}