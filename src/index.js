import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
  positions: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transitions: transitions.FADE,
  containerStyle: {
    zIndex: 100,
  },
};

root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);
