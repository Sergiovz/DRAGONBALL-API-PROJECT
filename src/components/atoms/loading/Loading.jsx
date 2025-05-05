export const Loading = ({ message }) => (
  <div className="loading">
    <div className="lazy-container">
      <span className="lazy-container__loading">{message}</span>
    </div>
  </div>
);
