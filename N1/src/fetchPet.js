export const petFetch = async ({ queryKey }) => {
  let id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!apiRes.ok) {
    throw new Error("Api request failed for id");
  }
  //because of react query, this is expected to return a promise, which this next line doess
  return apiRes.json();
};
