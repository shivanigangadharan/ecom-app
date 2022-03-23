export const initialState = {
    product: [],
    sortBy: "",
    rating: "",
    priceLimit: "",
    category: [],
    clear: false,
}

export const dataReducer = (state, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return { ...state, product: action.payload }
        case "FILTER_BY_PRICE":
            return { ...state, priceLimit: action.payload, clear: false }
        case "ADD_FILTER_BY_CATEGORY":
            return { ...state, category: [...state.category, action.payload], clear: false }
        case "REMOVE_FILTER_BY_CATEGORY":
            return { ...state, category: [...state.category].filter((cat) => cat != action.payload) }
        case "FILTER_BY_RATING":
            return { ...state, rating: action.payload, clear: false }
        case "SORT_BY_PRICE":
            return { ...state, sortBy: action.payload, clear: false }
        case "CLEAR":
            return { ...state, product: state.product, sortBy: "", rating: "", priceLimit: "", category: [], clear: true }
    }
}