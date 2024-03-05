import React from "react";
import { useState } from "react";
import { useBreedList } from "./useBreeds";
import { Results } from "./Results";
import { fetchSearch } from "../fetchSearch";
import { useQuery } from "@tanstack/react-query";
let ANIMALS = ["bird", "dog", "cat", "reptile"];

export const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [breedList, status] = useBreedList(animal);
  const [fetchList, setFetchList] = useState({
    animal: "",
    location: "",
    breed: "",
  });

  const results = useQuery(["search", fetchList], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
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
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            name="location"
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
          <select name="breed" id="breed" disabled={breedList.length === 0}>
            <option />
            {breedList.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
