import React from 'react';
import '../login/login.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <div>

            <div className="page-container">

                <div className="container-login">
                    <h2 className="heading">Sign up</h2>
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
                                <input type="checkbox" /> I accept all terms and conditions
            </div>
                        </div>
                        <button className="btn login">Create new account</button>
                        <div className="create">
                            <Link to="/login">
                                Already have an account
                <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}