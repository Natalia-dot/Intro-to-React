import React from "react";

const Pet = (props) => {
  //props es intrinseco de los elementos de react. Tambien funciona si hago destructuring de los props con {}
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.species),
    React.createElement("h2", {}, props.race),
    React.createElement("h3", {}, props.location),
  ]);
};

export default Pet;
