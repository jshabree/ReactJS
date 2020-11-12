// store is created from reducers 

import { createStore } from 'redux';
// import createStore function

import rootReducer from './reducer';
// import all reducers from reducer/index.js

const store = createStore(rootReducer)
// create store using Redux core library

export default store
// exports the store you created