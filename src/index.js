import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App/App";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import contacts from "./contacts.json";

ReactDOM.render(
  <ReactRouter>
    <App contacts={contacts} />
  </ReactRouter>,
  document.getElementById("root")
);
