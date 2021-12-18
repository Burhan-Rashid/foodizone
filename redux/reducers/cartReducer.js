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

const deleteFromCart = (state, action) => {
    let newState = { ...state };
    let newItems = newState.selectedItems.items.filter((item) => item.title !== action.payload.title);
    newState.selectedItems = {
        items: newItems,
        restaurantName: action.payload.restaurantName
    }
    return newState;
}

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return addToCart(state, action);
        case 'DELETE_FROM_CART': return deleteFromCart(state, action);
        default: return state;
    }
}

export default cartReducer;
