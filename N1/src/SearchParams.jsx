import React from "react";
import { useState, useEffect } from "react";
import Pet from "./Pet";
import { useBreedList } from "./useBreeds";
let ANIMALS = ["bird", "dog", "cat", "reptile"];

export const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breedList] = useBreedList(animal);
  console.log(breedList);
  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const jsonPets = await res.json();
    setPets(jsonPets.pets);
  };

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Washington"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            disabled={breedList.length === 0}
            value={breed}
          >
            <option />
            {breedList.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          species={pet.animal}
          race={pet.breed}
        />
      ))}
    </div>
  );
};
