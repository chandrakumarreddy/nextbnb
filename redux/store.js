import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const { NODE_ENV } = process.env;

const middleware = applyMiddleware(...[thunk]);

export default (initialState) =>
  createStore(
    rootReducer,
    initialState,
    NODE_ENV === "development" ? composeWithDevTools(middleware) : middleware
  );
