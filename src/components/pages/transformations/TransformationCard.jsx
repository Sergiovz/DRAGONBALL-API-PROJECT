const TransformacionCard = ({ transformation }) => {
  return (
    <div key={transformation.id} className="card">
      <div className="card__img-container">
        <img
          className="card__img"
          src={transformation.image}
          alt={`Imagen transformación de ${transformation.name}`}
          loading="lazy"
        />
      </div>
      <div className="card__info-container">
        <div className="card__info">
          <h2 className="card__info-title">{transformation.name}</h2>
          <div className="card__info-style">
            <p>
              Power: <span>{transformation.ki}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformacionCard;
