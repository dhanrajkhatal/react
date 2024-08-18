import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = <h1>Hulk smash</h1>

const ReactComponent =()=> {
    return (
      <div>
        {reactElement}
        <h1>I can do this all day</h1>
      </div>
    );
}

const ReactComponent2 =()=> (
    <div>
        <ReactComponent />
        <h1>I am groot</h1>
    </div>
)

//Root element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComponent2 />);
