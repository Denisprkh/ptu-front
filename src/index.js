import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore(
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
