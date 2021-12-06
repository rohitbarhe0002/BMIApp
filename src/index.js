import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App/App.jsx";
import LoginUser from './components/User/LoginUser'

ReactDOM.render(
    <Provider store={store}>
<LoginUser/>
</Provider>
, document.getElementById("root"));
