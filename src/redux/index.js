import {createLogger} from "redux-logger";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import {usersReducer} from "./users";
import {todosReducer} from "./todos";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootStore = combineReducers({
    users: usersReducer,
    todos: todosReducer
})

export const store = createStore(rootStore, applyMiddleware(thunk, logger))