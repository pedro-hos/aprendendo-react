import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./pages/Home/index.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>
)