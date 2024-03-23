import { configureStore } from "@reduxjs/toolkit";
import { adoptedPet } from "./AdoptedPetSlice";

export const store = configureStore({
    reducer: {adoptedPet}
})
