import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);