import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { loadToken } from "./localState";
import { store as rootReducer } from "./api/rootReducer";
import { thunk } from "redux-thunk";
const preloadedState = {
  auth: {
    token: loadToken(),
    loading: false,
    error: null,
    success: false,
  },
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, preloadedState, composedEnhancer);

export default store;
