const CharacterCard = ({ character, onClick, onkeyDown }) => {
  return (
    <div
      className="card"
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
      onKeyDown={onkeyDown}
    >
      <div className="card__img-container">
        <img
          className="card__img"
          src={character.image}
          alt={`Imagen de ${character.name}`}
          loading="lazy"
        />
      </div>
      <div className="card__info-container">
        <div className="card__info">
          <h2 className="card__info-title">{character.name}</h2>
          <div className="card__info-style">
            <p>
              Power: <span>{character.ki}</span>
            </p>
            <p>
              Max: <span>{character.maxKi}</span>
            </p>
          </div>
          <div className="card__info-style">
            <p>
              Gender: <span>{character.gender}</span>
            </p>
            <p>
              Race: <span>{character.race}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
