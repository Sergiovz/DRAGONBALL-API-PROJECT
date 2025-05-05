import "./pageTemplate.css";

const PageTemplate = ({ title, children }) => {
  return (
    <div className="page-template">
      <h2 className="page-template__title">{title}</h2>
      <main className="page-template__content">{children}</main>
      <footer className="page-template__footer">
        <p>Dragon Ball API Project &copy;SergioVZ - 2025</p>
      </footer>
    </div>
  );
};

export default PageTemplate;
