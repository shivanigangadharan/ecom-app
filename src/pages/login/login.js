import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <div className="page-container">

                <div className="container-login">
                    <h2 className="heading">Login</h2>
                    <form>
                        <div>
                            <label className="label">Email address</label>
                            <br />
                            <input className="text-input" type="email" placeholder="adarshbalika@gmail.com" />
                        </div>
                        <div>
                            <label className="label">Password</label>
                            <br />
                            <input className="text-input" type="password" placeholder="***********" />
                        </div>
                        <div className="remember-me">
                            <div>
                                <input type="checkbox" /> Remember me
            </div>
                            <a href="#">Forgot your password?</a>
                        </div>
                        <button className="btn login">Login</button>
                        <div className="create">
                            <Link to="/signup">
                                Create new account
                <i className="fa-solid fa-chevron-right" />
                            </Link>
                        </div>
                    </form>
                </div>

            </div>


        </div>
    )
}