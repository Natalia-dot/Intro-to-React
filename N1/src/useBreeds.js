import { useState, useEffect } from "react";

const localCache = {};

export const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else fetchBreeds(animal);
  }, [animal]);

  const fetchBreeds = async () => {
    setBreedList([]);
    setStatus("loading");
    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const jsonBreeds = await res.json();
    localCache[animal] = jsonBreeds.breeds || [];
    setBreedList(localCache[animal]);
    setStatus("loaded");
  };

  return [breedList, status];
};
