// (state, action) => newState

// contains logic and global state of your application

// create a state for login component

const initialState = {
    username, password : do we define this?
    if the username, password match, it should let you log in

}

// import types, create state object

// create function to return state object

// state object modifies when ever action is called

// default state object

// create, return reducers from reducers/index.js

//define state value that contains application data
//define action objects that describe what happens 

// root reducer is responsible for handling actions, and updating state

export default function appReducer(state = initialState, action){
    // we use initialState as a default value
    switch(action.type) {
        // reducer looks at action.type field to understand what's happening
        default:
            // if reducer doesn't recognize action type, or it doesn't care
            return state
                // we return whichever state reducer thinks it needs
    }
}