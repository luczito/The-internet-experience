import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToxicProvider } from "./context/ToxicContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToxicProvider>
      <App />
    </ToxicProvider>
  </React.StrictMode>
);