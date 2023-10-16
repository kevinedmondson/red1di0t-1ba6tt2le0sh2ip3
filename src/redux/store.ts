import { createStore, applyMiddleware } from "redux";
import reducer from './reducer';
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools()
const store = createStore(reducer, enhancer);

export default store;