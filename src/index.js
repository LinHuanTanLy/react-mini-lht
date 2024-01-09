import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers";
import "./assets/iconfont/iconfont.css";
import "./assets/css/common.less";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppRouter></AppRouter>
  </React.StrictMode>
);
