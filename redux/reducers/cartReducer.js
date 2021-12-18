const defaultState = {
    selectedItems: {
        items: [],
        restaurantName: ""
    }
}

const addToCart = (state, action) => {
    let newState = { ...state };
    newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName
    }
    return newState;
}

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return addToCart(state, action);
        default: return state;
    }
}

export default cartReducer;
