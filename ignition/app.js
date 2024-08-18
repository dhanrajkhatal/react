import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = React.createElement(
    "div",
    {},
    // single child element
    React.createElement("div", {},
        //multi child element
        [
            React.createElement("h1", { id: "heading", key: "first" }, "Hello, Dhanraj"), 
            React.createElement("h2", {id: "heading2", key: "second" }, "React developer !!!")
        ]
    )
)

//Root element 
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(reactElement)