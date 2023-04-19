import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "./reducer";
import ReduxThunk from 'redux-thunk';

const store = createStore(
    todoReducer,
    applyMiddleware(ReduxThunk)
    );

export default store;