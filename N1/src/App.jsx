import React from "react";
import { createRoot } from "react-dom/client";
// 1.1 const Pet = () => {
// return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Maki"),
//     React.createElement("h2", {}, "Dog"),
//     React.createElement("h2", {}, "Yorkshire"),

// ])
// };
//This is okay but Pet will not be able to render any more pets, so we want to make it reusable

const Pet = (props) => {
  //props es intrinseco de los elementos de react. Tambien funciona si hago destructuring de los props con {}
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.species),
    React.createElement("h2", {}, props.race),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt-a-me!"),
    // 1.1 React.createElement(Pet),
    React.createElement(
      Pet,
      { name: "Maki", species: "Dog", race: "Yorkshire" },
      null
    ),
    React.createElement(
      Pet,
      { name: "Pitu", species: "Cat", race: "Orange cat" },
      null
    ),
    React.createElement(
      Pet,
      { name: "Pato", species: "Reptile", race: "Gecko" },
      null
    ),
  ]);
};
const mainContainer = document.getElementById("root");
const root = createRoot(mainContainer);
root.render(React.createElement(App, {}, null));
//siempre tiene 3 argumentos createElement, pero pueden obviarse
// React.createElement(App) funciona igual
