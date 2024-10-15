import React from "react";
import ReactDOM from "react-dom/client";

/*//React.createElement is a JS Object
const heading = React.createElement(
    "div", //Which element is to be created?
    {id : "parent"}, //Setting attributes to the element created
    React.createElement("div", {id : "child"}, 
    //Siblings in an array
    [React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag")])
);//what to display?

//Rendering react
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
render() => renders a JS object(heading) and 
creates the element which the browser understands and puts it up in the DOM.

root.render(heading);*/
const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Namste Everyone!"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Namste Everyone2!"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading1, heading2]
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);