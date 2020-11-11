import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";

import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { rootReducer, DispatchType, RootState } from "./store";

const store: Store<RootState> & {
  dispatch: DispatchType;
} = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
