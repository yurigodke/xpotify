import React from "react";
import ReactDOM from "react-dom";

import App from "Pages";

import { Provider } from "react-redux";
import configureStore from "./redux";

import { PersistGate } from "redux-persist/integration/react";

const configStore = configureStore();

ReactDOM.render(
  <Provider store={configStore.store}>
    <PersistGate loading={null} persistor={configStore.persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
