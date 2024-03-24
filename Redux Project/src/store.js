import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import adoptedPet from "./AdoptedPetSlice";
import searchParams from "./SearchParamsSlice"
import { petApi } from "./petApiService";

export const store = configureStore({
    reducer: {
        adoptedPet,
        searchParams,
        [petApi .reducerPath] :petApi.reducer,
    }, middleware: getDefaultMiddleware().concat(petApi.middleware)
})
