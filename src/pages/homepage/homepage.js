import React from 'react';
import './homepage.css';
import '../../components.css';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div>
            <div class="homepage">
                <div class="img-grid">
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                    <img alt="clothing" src="https://picsum.photos/id/1005/250/150" />
                </div>

                <div class="content-grid">
                    <div class="section-main">
                        <Link to="/productlist">
                            <button class="btn secondary"> View products </button>
                        </Link>
                    </div>

                    <div class="section-sub s1">
                        <img class="img new-img" alt="new arrival" src="../../assets/newarrival.jpg" />
                        <div class="new-arrivals">
                            <div>NEW ARRIVALS</div>
                            <div>
                                <h4 class="bold">Winter Collection</h4>
                                <span>Check out our best winter collection and stay warm in fashion. </span>
                            </div>
                        </div>
                    </div>
                    <div class="section-sub s2">
                        <img class="img new-img" alt="new arrival" src="../../assets/newarrival.jpg" />
                        <div class="new-arrivals">
                            <div>NEW ARRIVALS</div>
                            <div>
                                <h4 class="bold">Winter Collection</h4>
                                <span>Check out our best winter collection and stay warm in fashion. </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}