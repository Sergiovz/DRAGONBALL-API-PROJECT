import TransformacionCard from "./TransformationCard.jsx";

export const TransformationList = ({ transformations }) => {
  if (!transformations || transformations.length === 0) {
    return <p>No se encontraron Transformacions.</p>;
  }

  return (
    <div className="transformations__container">
      {transformations.map((transformation) => (
        <TransformacionCard
          key={transformation.id}
          transformation={transformation}
        />
      ))}
    </div>
  );
};
