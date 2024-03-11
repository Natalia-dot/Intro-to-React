import Pet from "./Pet";

export const Results = ({ pets }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            key={pet.id}
            name={pet.name}
            species={pet.animal}
            race={pet.breed}
            location={`${pet.city},${pet.state}`}
            images={pet.images}
          />
        ))
      )}
    </div>
  );
};
