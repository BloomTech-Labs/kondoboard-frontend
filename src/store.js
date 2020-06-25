import { createStore, compose } from 'redux';
import { reducer } from './model/state/reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer,
    composeEnhancers()
);