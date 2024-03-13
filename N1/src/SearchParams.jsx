import React, { useContext } from "react";
import { useState } from "react";
import { useBreedList } from "./useBreeds";
import { Results } from "./Results";
import { fetchSearch } from "../fetchSearch";
import { useQuery } from "@tanstack/react-query";
import { AdoptedPetContext } from "./AdoptedPetContext";
let ANIMALS = ["bird", "dog", "cat", "reptile"];

export const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [breedList, status] = useBreedList(animal);
  const [fetchList, setFetchList] = useState({
    animal: "",
    location: "",
    breed: "",
  });
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", fetchList], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setFetchList(obj);
        }}
      >
        {adoptedPet ? (
          <div id="adoptedPet">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            className="search-input"
            type="text"
            id="location"
            name="location"
            placeholder="Washington"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            className="search-input"
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
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
            disabled={breedList.length === 0}
            className="search-input grayed-out"
          >
            <option />
            {breedList.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button className="rounded px-6 py-2 text-white hover:opacity-50 border-none bg-orange-500">
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
