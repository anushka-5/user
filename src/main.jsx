import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import AppContext from "./utils/context.jsx"; 
// import "./index.css"; 
import "../public/css/Banner.css";
import "../public/css/Cart.css";
import "../public/css/CartItem.css";
import "../public/css/Category.css";
import "../public/css/Footer.css";
import "../public/css/Header.css";
import "../public/css/Home.css";
import "../public/css/Newsletter.css";
import "../public/css/Recipe.css";
import "../public/css/Recipes.css";
import "../public/css/Search.css";
import "../public/css/SingleRecipe.css";
import "../public/css/Order.css";

import store from "./redux-store/store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <Provider store={store}>
    <App />
  </Provider>
);
