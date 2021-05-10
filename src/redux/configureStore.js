import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { apiMiddleware } from "./middlewares";
import thunkMiddleware from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(apiMiddleware, thunkMiddleware))
  );
}
