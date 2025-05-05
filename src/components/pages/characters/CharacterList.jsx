import CharacterCard from "./CharacterCard";

export const CharacterList = ({ characters }) => {
  if (!characters || characters.length === 0) {
    return <p>No se encontraron personajes.</p>;
  }

  return (
    <div className="characters__container">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onkeyDown={(e) => {
            if (onClick && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onClick();
            }
          }}
        />
      ))}
    </div>
  );
};
