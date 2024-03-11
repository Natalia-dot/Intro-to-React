import React from "react";
import { Link } from "react-router-dom";

const Pet = ({ name, id, location, species, race, images }) => {
  let hero = "http://pets-images.dev-apis.com/pets.none.com";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white ">
        <h1>{name}</h1>
        <h2>
          {species} - {race} - {location}
        </h2>
      </div>
    </Link>
  );
};

//OLDDD
// const Pet = (props) => {
//   //props es intrinseco de los elementos de react. Tambien funciona si hago destructuring de los props con {}
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.species),
//     React.createElement("h2", {}, props.race),
//     React.createElement("h3", {}, props.location),
//   ]);
// };

export default Pet;
