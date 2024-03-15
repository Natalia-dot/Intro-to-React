import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, Suspense, lazy } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

/*Server side rendering
Basically, we have Javascript, that can interact with the DOM. Node allows us to use that Javascript in a way so
that the server side rendering can be performed easily.
What is SSR? Server side is everything that does not haave to do with visuals and the appearance of information.
So Server Side manages calls to databases, user verification, data fetches and so on... 
Client side rendering, om the other hand, manages the visual representation of the data fetched by the server side.
Server side manages data fetching and client side manages interactivity. Placing the scope in Server Side Rendering
will allow us to have a shorter initial load time, but a longer period until interactivity is established, since
the "client side" will be put on second place (Javascript, which handles all DOM elements and places listeners too) and 
our app may not respond when prompted. 

*/
const SearchParams = lazy(() => import("./SearchParams"));
const Details = lazy(() => import("./Details"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

export const App = () => {
  const adoptedPet = useState(null);
  return (
    <div>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div>
                <h2 id="loading-pane">🐶</h2>
              </div>
            }
          >
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </div>
  );
};
