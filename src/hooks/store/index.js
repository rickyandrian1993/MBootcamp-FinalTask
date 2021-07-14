import auth from './auth/reducer';
import cart from './cart/reducer';
import product from './product/reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    auth,
    cart,
    product,
  }), composeWithDevTools(applyMiddleware(thunk))
);

export default store;
