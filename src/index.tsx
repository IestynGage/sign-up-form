import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignUp from "./pages/SignUp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);
