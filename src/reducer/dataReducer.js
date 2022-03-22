export const initialState = {
    product: [],
    sortBy: ""
}

export const dataReducer = (state, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return { ...state, product: action.payload }
    }
}