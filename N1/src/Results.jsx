import Pet from "./Pet";

export const Results = ({ pets }) => {
  return (
    <div className="search">
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
