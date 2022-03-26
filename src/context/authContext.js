import { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState({ errorExists: false, errorMessage: "" })

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
            if (userResponse.statusText === "Created") {
                localStorage.setItem("token", JSON.stringify(userResponse.data.encodedToken));
                setUser(userResponse.data.createdUser);
            }
        }
        catch (e) {
            console.log("Found error: ", e);
            setError({
                errorExists: true,
                errorMessage: e
            })
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
            }
            else {
                setError({
                    errorExists: true,
                    errorMessage: "Invalid credentials."
                })
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
        <AuthContext.Provider value={{ user, setUser, error, setError, SignupUser, LoginUser }}>
            {children}
        </AuthContext.Provider>
    )
}



