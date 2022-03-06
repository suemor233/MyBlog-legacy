import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { combineReducers } from 'redux-immutable'
import { reducer as home } from "./modules/home"

const store = createStore(combineReducers({
    home
}), applyMiddleware(thunk))

export default store
