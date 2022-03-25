import { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState({ errorExists: false, errorMessage: "" })
    const [encodedToken, setEncodedToken] = useState(localStorage.getItem("token"));
    const SignupUser = async (email, password) => {
        console.log("Posting sign up data");
        setError({
            errorExists: false,
            errorMessage: ""
        })
        try {

            const userResponse = await axios.post(`/api/auth/signup`, JSON.stringify({
                email: email,
                password: password,
            }));
            if (userResponse.statusText === "Created") {
                localStorage.setItem("token", JSON.stringify(userResponse.data.encodedToken));
                // console.log(localStorage.getItem("token"));
                setEncodedToken(userResponse.data.encodedToken);
                setUser(userResponse.data.createdUser);
                return user;
            }
        }
        catch (e) {
            console.log("Found error: ", e);
            // setError({
            //     errorExists: true,
            //     errorMessage: e
            // })
            alert("Credentials invalid. Please sign-up if you don't already have an account.");
        }
    }

    const LoginUser = async (email, password) => {
        console.log("Posting Log in data");
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
                console.log("Login successfull : ", userResponse);
                setUser(userResponse.data.foundUser);
                return true;
            }
            else {
                console.log("Incorrect credentials.")
                setError({
                    errorExists: true,
                    errorMessage: "Invalid credentials."
                })
                return false;
            }
        }
        catch (e) {
            console.log("Found error : ", e);
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



