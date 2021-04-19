import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from '../redux/reducers/productReducer';

const reducer = combineReducers({
    productReducer,
  });

  export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware())
    ,
  );