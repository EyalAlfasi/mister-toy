import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { toyReducer } from "./reducers/toyReducer.js"

const mainReducer = combineReducers({
    toyReducer
})

export const store = createStore(mainReducer, applyMiddleware(thunk)) //Passing the reducer

// For Debug
window.theStore = store;
store.subscribe(() => {
    console.log('Global State is:', store.getState())
})