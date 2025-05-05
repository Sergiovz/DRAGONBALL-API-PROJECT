import PlanetCard from "./PlanetCard";

export const PlanetList = ({ planets }) => {
  if (!planets || planets.length === 0) {
    return <p>No se encontraron planetas.</p>;
  }

  return (
    <div className="container_planets">
      {planets.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} />
      ))}
    </div>
  );
};
