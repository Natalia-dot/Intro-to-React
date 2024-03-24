import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./AdoptedPetSlice";
import searchParams from "./SearchParamsSlice"

export const store = configureStore({
    reducer: {adoptedPet, searchParams}
})
