import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useBreedList from "../useBreedList";
import { renderHook, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

//PRIMER TEST
//tienen que ser function, NO ArRROW
//ESTA FORMA ES ANTIGUAAAA AHORA SE PUEDEN TESTEAR HOOKS
// function fetchBreedList(animal) {
//   let list;

//   function Testing() {
//     list = useBreedList(animal);
//     return null;
//   }

//   render(
//     <QueryClientProvider client={queryClient}>
//       <Testing />
//     </QueryClientProvider>
//   );

//   return list;
// }

// test("Empty array when empty called", async () => {
//   const [breedList, status] = fetchBreedList();
//   expect(status).toBe("loading");
//   expect(breedList).toHaveLength(0);
// });

test("Empty array when empty called", async () => {
  const { result } = renderHook(() => useBreedList(""), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });

  const [breedList, status] = result.current;
  expect(breedList).toHaveLength(0);
  expect(status).toBe("loading");
});

//MOCKING FETCHES v??
test("Returns breeds if given an animal", async () => {
  const breeds = ["breed1", "breed2", "breed3"];

  fetch.mockResponseOnce(JSON.stringify({ animal: "dog", breeds: breeds }));

  const { result } = renderHook(() => useBreedList("dog"), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });
  await waitFor(() => expect(result.current[1]).toBe("success"));
  const [breedList] = result.current;
  expect(breedList).toEqual(breeds);
});
