// store is created from reducers 

import { createStore } from 'redux';
// import createStore function

import reducers from '../reducers/index';
// import all reducers from reducer/index.js

const store = createStore(reducers);
// create store using Redux core library

export default store
// exports the store you created