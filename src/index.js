import React from "react";
import ReactDOM from "react-dom";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import { RootReducer } from "./Reducer/RootReducer";
import rootSaga from './Saga/rootSaga';
//import {watchersaga as todoSaga} from './Saga/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const store=createStore(RootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);