
export const ACTION_TYPES = {
    LOGIN : 'LOGIN',
    LOGOUT : 'LOGOUT'
}
export const userReducer=(state=null,action)=>
{
    if(action.type=== ACTION_TYPES.LOGOUT) {
        state = null;
        return state;
    }
    if(action.type=== ACTION_TYPES.LOGIN) {
        state=action.data;
        return state;
    }

    return state;
}