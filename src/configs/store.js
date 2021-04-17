import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from '../redux/reducers/productReducer';
import thunk from "redux-thunk";

const reducer = combineReducers({
    productReducer,
  });

  export const store = createStore(
    reducer,
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );