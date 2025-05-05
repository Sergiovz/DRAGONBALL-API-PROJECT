const PlanetCard = ({ planet }) => {
  return (
    <div className="card_planet">
      <div className="card_img_container_planet">
        <img
          className="card_img_planet"
          src={planet.image}
          alt={`Imagen del planeta ${planet.name}`}
          loading="lazy"
        />
      </div>
      <div className="card_info_planet">
        <div className="card_info_container_planet">
          <h2>{planet.name}</h2>
          <div className="card_info_container_style_planet">
            <p>
              Description: <span>{planet.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
