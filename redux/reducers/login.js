// (state, action) => newState
// contains logic and global state of your application

import * as Types from "../actions/types";
// importing types that are used 

const initialState = {
    // creating an initial state for login component
   "loggedIn": false,
   "isValidToken": false,
   "result": {},
   "user": {
       "email": "",
       "displayName": "",
       "emailVerified" : false,
       "lastLoggedInAt": "", 
   }

};

// create function to return state object

const handleLoginServerResponseSuccess = (state, action) => {
    console.log("Redux" + JSON.stringify(action));
    let newState = { ...state };
    if (action.result !== undefined) {
        newState = Object.assign({}, state, { "result" : Object.assign({}, action.result)})
    }
    console.log("State changes to" + JSON.stringify(newState));
    return { ...newState };
}

const handleLoginServerResponseFail = (state, action) => {
    let newState = { ...state };
    return { ...newState };
}

// root reducer is responsible for handling actions, and updating state

export default (state = initialState, action) => {
    // we use initialState as a default value
    switch(action.type) {
        // reducer looks at action.type field to understand what's happening
        case Types.LOGIN_USER:
            return Object.assign({}, state, { "loggedIn": false, "isValidToken": false})
        case Types.LOGIN_USER_RESPONSE_SUCCESS:
            return handleLoginServerResponseSuccess(state, action);
        case Types.LOGIN_USER_RESPONSE_FAIL:
            return handleLoginServerResponseFail(state);
        default:
            // if reducer doesn't recognize action type, or it doesn't care
            return state
                // we return whichever state reducer thinks it needs
    }
}