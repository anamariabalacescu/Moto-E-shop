export const ACTION_TYPES = {
    ADD_ORDER: 'ADD_ORDER',
    REMOVE_ORDER: 'REMOVE_ORDER',
    CLEAR_ORDERS: 'CLEAR_ORDERS'
}

export const orderReducer=(state= [],action)=>
{
    if(action.type=== ACTION_TYPES.ADD_ORDER) {
        state.push(action.data);
        return state;
    }
    if(action.type=== ACTION_TYPES.REMOVE_ORDER) {
        state = state.filter(order => order.id !== action.data.id);
        return state;
    }
    if(action.type=== ACTION_TYPES.CLEAR_ORDERS) {
        state = [];
        return state;
    }
    return state;
}