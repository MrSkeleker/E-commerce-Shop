import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer
});

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;