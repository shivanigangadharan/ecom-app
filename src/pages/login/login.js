import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <div class="page-container">

                <div class="container-login">
                    <h2 class="heading">Login</h2>
                    <form>
                        <div>
                            <label class="label">Email address</label>
                            <br />
                            <input class="text-input" type="email" placeholder="adarshbalika@gmail.com" />
                        </div>
                        <div>
                            <label class="label">Password</label>
                            <br />
                            <input class="text-input" type="password" placeholder="***********" />
                        </div>
                        <div class="remember-me">
                            <div>
                                <input type="checkbox" /> Remember me
            </div>
                            <a href="#">Forgot your password?</a>
                        </div>
                        <button class="btn login">Login</button>
                        <div class="create">
                            <Link to="/signup">
                                Create new account
                <i class="fa-solid fa-chevron-right" />
                            </Link>
                        </div>
                    </form>
                </div>

            </div>


        </div>
    )
}