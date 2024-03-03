import Pet from "./Pet";

export const Results = ({ pets }) => {
  console.log(pets);
  return (
    <>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          species={pet.animal}
          race={pet.breed}
          location={`${pet.city},${pet.state}`}
        />
      ))}
      ;
    </>
  );
};
