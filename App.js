import React from "react";
import ReactDOM from "react-dom/client";

const Heading = ()=>{
    return <div>Hello world</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);