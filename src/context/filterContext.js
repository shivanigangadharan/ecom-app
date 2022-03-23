import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { initialState, dataReducer } from '../reducer/dataReducer';
import axios from 'axios';

export const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("/api/products");
                dispatch({ type: "INIT_PRODUCTS", payload: data.products });
            }
            catch (e) {
                console.log("Error getting products: ", e);
            }
        })();
    }, [])
    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    )
}
