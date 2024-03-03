import Pet from "./Pet";

export const Results = ({ pets }) => {
  return (
    <>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          species={pet.animal}
          location={pet.location}
          race={pet.breed}
        />
      ))}
    </>
  );
};
