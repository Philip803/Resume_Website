import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Root from "./components/Root";

// assuming our index.scss is in the same directory as our index.js
import "../public/stylesheets/main.css";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);
