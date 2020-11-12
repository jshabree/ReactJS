// store is created from reducers 

import { createStore, applyMiddleware } from 'redux';

import rootSaga from "./sagas";
import reducers from '../reducers/index';


const store = createStore(reducers);


export default store
