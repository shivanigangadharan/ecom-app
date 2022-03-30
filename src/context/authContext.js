import { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState({ errorExists: false, errorMessage: "" })
    const [encodedToken, setEncodedToken] = useState(localStorage.getItem("token"));
    const SignupUser = async (email, password) => {
        setError({
            errorExists: false,
            errorMessage: ""
        })
        try {
            const userResponse = await axios.post(`/api/auth/signup`, JSON.stringify({
                email: email,
                password: password,
            }));
            if (userResponse.status === 201) {
                console.log("res", userResponse)
                localStorage.setItem("token", JSON.stringify(userResponse.data.encodedToken));
                setEncodedToken(userResponse.data.encodedToken);
                setUser(userResponse.data.createdUser);
                return user;
            }
        }
        catch (e) {
            console.log("Error: ", e);
            alert("Credentials invalid. Please sign-up if you don't already have an account.");
        }
    }

    const LoginUser = async (email, password) => {
        setError({
            errorExists: false,
            errorMessage: ""
        })
        try {
            const userResponse = await axios.post(`/api/auth/login`, {
                email: email,
                password: password,
            });
            if (userResponse.statusText === "OK") {
                setUser(userResponse.data.foundUser);
                return true;
            }
            else {
                setError({
                    errorExists: true,
                    errorMessage: "Invalid credentials."
                })
                return false;
            }
        }
        catch (e) {
            console.log("Error : ", e);
            setError({
                errorExists: true,
                errorMessage: e
            })
        }
    }
    return (
        <AuthContext.Provider value={{ user, setUser, error, setError, SignupUser, LoginUser, encodedToken, setEncodedToken }}>
            {children}
        </AuthContext.Provider>
    )
}



