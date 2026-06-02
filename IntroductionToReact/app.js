// import React from "react";
import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const head = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child", key: 1 }, [
    React.createElement("p", { key: 11 }, "i am a p tag"),
    React.createElement("h1", { key: 12 }, "hello world"),
  ]),
  React.createElement("div", { className: "child2", key: 2 }, [
    React.createElement("p", { key: 21 }, "i am a p tag"),
    React.createElement("h1", { key: 22 }, "hello world"),
  ]),
]);
console.log("head: ", head);

const header = (
  <div className="main-cont">
  <div id="head">
    <p>i am a p tag</p>
    <h1>hello world</h1>
    <p>i am a p tag</p>
    <h1>hello world</h1>
  </div>

  <div id="body">
    <p>i am a p tag</p>
    <h1>hello world</h1>
    <p>i am a p tag</p>
    <h1>hello world</h1>
  </div>

  <div id="footer">
    <p>i am a p tag</p>
    <h1>hello world</h1>
    <p>i am a p tag</p>
    <h1>hello world</h1>
  </div>
  </div>
);

root.render(header);
// root.render(head);

//   <div class="parent">
//     <div class="child">
//         <p>i am a p tag</p>
//         <h1>hello world</h1>
//     </div>

//     <div class="child2">
//         <p>i am a p tag</p>
//         <h1>hello world</h1>
//     </div>
//  </div>

//jsx

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const head = React.createElement(
//   "h1",
//   { id: "head", className: "heading" },
//   "Hello world",
// );
// console.log("head: ", head);
// root.render(head);
