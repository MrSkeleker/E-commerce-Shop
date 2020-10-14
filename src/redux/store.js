import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import cartReducer from './cart/cartReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;