import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const petApi = createApi({
    reducerPath: "petApi",
    //reducerPath is to have it controlled at all times, so a descriptive name is recommended.
    baseQuery: fetchBaseQuery({ baseUrl: "https://pets-v2.dev-apis.com"}),
    //endpoints are all the possible queries that can be done with this base url.
    //If we wanted from another url, that would need another file with another base url
    endpoints: (builder) => ({
        //builder seems to "build" the method on top of the baseUrl
        getPet: builder.query({
            query: (id) => ({ url: "pets", params: {id}}),
            //url is put as a slash behind the base url (...apis.com/pets)
            //and params are put as equal (.../pets=id) thoudg i dont know what the notation is like
            transformResponse: (response) => response.pets[0],
        }),
        getBreeds: builder.query({
            query: (animal) => ({url: "breeds", params: { animal }}),
            transformResponse: (response) => response.breeds,
        }),
        search: builder.query({
            query: ({ animal, location, breed}) => ({
                url: "pets",
                params: { animal, location, breed },
            })    ,       
            transformResponse: (response) => response.pets
        })
    })
})


//this hook is automatically created with createApi
export const { useGetPetQuery, useGetBreedsQuery, useSearchQuery } = petApi;