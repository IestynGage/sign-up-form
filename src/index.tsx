import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignUpPage from "./pages/SignUpPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SignUpPage />
  </React.StrictMode>
);
