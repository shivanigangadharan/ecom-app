export const initialState = {
    product: [],
    sortBy: ""
}

export const dataReducer = (state, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return { ...state, product: action.payload }
        case "SORT_BY_PRICE":
            if (action.payload == "low-high") {
                return { ...state, product: state.product.sort((a, b) => { return a.price - b.price }) }
            }
            if (action.payload == "high-low") {
                return { ...state, product: state.product.sort((a, b) => { return b.price - a.price }) }
            }
    }
}