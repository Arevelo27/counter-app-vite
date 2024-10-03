import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./HelloWorldApp";
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp config={{title: 'Hola, soy Goku', subTitle: 'Hola, soy un subtítulo'}}/> */}
    {/* <FirstApp title="Hola, soy Goku" subTitle="Hola, soy un subtítulo"/> */}
    <CounterApp value={1} />
  </React.StrictMode>
)