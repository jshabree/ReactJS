// store is created from reducers 

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./sagas";
import reducers from '../reducers/index';

const sagaMiddleWare = createSagaMiddleware();

let middleware = [sagaMiddleWare];

if(process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleWare.run(rootSaga);

export default store;