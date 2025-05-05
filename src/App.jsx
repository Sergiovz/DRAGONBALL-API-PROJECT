import { Suspense, useState } from "react";
import { HomeCharactesrs, HomePlanets, HomeTransformations, Nav } from "./components/index";
import "./styles/index.css";

const LoadingFallback = () => (
  <div className="lazy-container">
    <span className="lazy-container__loading"></span>
  </div>
);

const App = () => {
  const [activePage, setActivePage] = useState("characters");

  const renderActivePage = () => {
    switch (activePage) {
      case "characters":
        return <HomeCharactesrs />;
      case "planets":
        return <HomePlanets />;
      case "transformations":
        return <HomeTransformations />;
      default:
        return <HomeCharactesrs />;
    }
  };

  return (
    <>
      <Nav activePage={activePage} setActivePage={setActivePage} />
      <Suspense fallback={<LoadingFallback />}>{renderActivePage()}</Suspense>
    </>
  );
};

export default App;
