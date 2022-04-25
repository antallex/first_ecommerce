import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];


//change createStore with configureStore
//https://redux-toolkit.js.org/api/configureStore

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;