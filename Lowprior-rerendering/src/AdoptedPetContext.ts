import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void] >([
    {
        id: 1111,
        name: "Lola",
        animal:"dog",
        breed: "Poodle",
        city: "Seattle",
        description: "",
        images: [],
        state: "WA"
    },
    //eslint-disable-next-line
    () => {},
]);

//could also be done like this but the initial value would be null and we'd have to type check everywhere else
//const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void] | null>(null);

export default AdoptedPetContext;
