import { useMemo } from "react";
import NavItem from "./NavItem";
import dragonBallLogo from "../../../assets/DragonBall-Logo.png";
import "./nav.css";

const Nav = ({ activePage, setActivePage }) => {
  const pages = useMemo(
    () => [
      { id: "characters", label: "Characters" },
      { id: "planets", label: "Planets" },
      { id: "transformations", label: "Transformations" },
    ],
    []
  );

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <header className="app-header">
      <picture className="app-header__logo">
        <img src={dragonBallLogo} alt="Logo Dragon-Ball Z" />
      </picture>
      <nav className="app-navigation">
        <ul className="app-navigation__list">
          {pages.map((page) => (
            <NavItem
              key={page.id}
              id={page.id}
              label={page.label}
              isActive={activePage === page.id}
              onClick={handlePageChange}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
