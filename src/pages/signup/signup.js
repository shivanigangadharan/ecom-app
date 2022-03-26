import React, { useState } from 'react';
import '../login/login.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [checkTerms, setCheckTerms] = useState(false);
    const { SignupUser } = useAuth();
    const toggleCheck = (e) => {
        setCheckTerms(e.target.checked);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkTerms) {
            SignupUser(email, password);
        }
        else {
            alert("Please accept terms and conditions.");
        }
    }
    return (
        <div>

            <div className="page-container">

                <div className="container-login">
                    <h2 className="heading">Sign up</h2>
                    <form>
                        <div>
                            <label className="label">Email address</label>
                            <br />
                            <input onChange={e => setEmail(e.target.value)} className="text-input" type="email" placeholder="adarshbalika@gmail.com" />
                        </div>
                        <div>
                            <label className="label">Password</label>
                            <br />
                            <input onChange={e => setPassword(e.target.value)} className="text-input" type="password" placeholder="***********" />
                        </div>
                        <div className="remember-me">
                            <div>
                                <input type="checkbox" onClick={e => toggleCheck(e)} /> I accept all terms and conditions
            </div>
                        </div>
                        <button onClick={(e) => { handleSubmit(e) }} className="btn login">Create new account</button>
                        <div className="create">
                            <Link to="/login">
                                Already have an account
                <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                        </div>
                    </form>
                </div>

            </div>

        </div >
    )
}