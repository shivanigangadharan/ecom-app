import React from 'react';
import '../login/login.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <div>

            <div class="page-container">

                <div class="container-login">
                    <h2 class="heading">Sign up</h2>
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
                                <input type="checkbox" /> I accept all terms and conditions
            </div>
                        </div>
                        <button class="btn login">Create new account</button>
                        <div class="create">
                            <Link to="/login">
                                Already have an account
                <i class="fa-solid fa-chevron-right"></i>
                            </Link>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}