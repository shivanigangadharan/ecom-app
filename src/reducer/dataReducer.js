export const initialState = {
    product: [],
    sortBy: "",
    rating: "",
}

export const dataReducer = (state, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return { ...state, product: action.payload }
        case "SORT_BY_PRICE":
            // if (action.payload == "low-high") {
            //     return { ...state, product: state.product.sort((a, b) => { return a.price - b.price }) }
            // }
            // if (action.payload == "high-low") {
            //     return { ...state, product: state.product.sort((a, b) => { return b.price - a.price }) }
            // }
            return { ...state, sortBy: action.payload }
        case "SORT_BY_RATING":
            return { ...state, rating: action.payload }
        case "CLEAR":
            return { ...state, product: state.product, sortBy: "", rating: "" }
    }
}