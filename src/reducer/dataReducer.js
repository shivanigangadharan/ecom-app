export const initialState = {
    product: [],
    sortBy: "",
    rating: "",
    priceLimit: "",
}

export const dataReducer = (state, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return { ...state, product: action.payload }
        case "SORT_BY_PRICE":
            return { ...state, sortBy: action.payload }
        case "SORT_BY_RATING":
            return { ...state, rating: action.payload }
        case "FILTER_BY_PRICE":
            console.log("pl: ", action.payload);
            return { ...state, priceLimit: action.payload }
        case "CLEAR":
            return { ...state, product: state.product, sortBy: "", rating: "", priceLimit: "" }
    }
}