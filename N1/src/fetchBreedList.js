export const fetchBreedList = async ({ queryKey }) => {
  let animal = queryKey[1];
  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiRes.ok) {
    throw new Error("Api request failed for species");
  }
  //because of react query, this is expected to return a promise, which this next line doess
  return apiRes.json();
};
