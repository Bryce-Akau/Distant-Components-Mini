export function login (name){
    return {
        type: 'LOGGED_IN',
        payload: name
    }
}
const initialState = {
    loggedInAs: '',
    isCreditCardHolder: false
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'LOGGED_IN':
            // const newState = object.assian({}, state, { loggedInAs: ''}) can do both 
            const newState = { ...state, loggedInAs: action.payload} //(spread operator)
            return newState
            // return {...state, loggedInAs: action.payload} can use this instead of the top. seen more often
        default: 
        return state
    }
}

export default reducer;
