const NavItem = ({ id, label, isActive, onClick }) => {
  return (
    <li className="app-navigation__item">
      <button
        className={`app-navigation__button ${ isActive ? "app-navigation__button--active" : "" }`}
        onClick={() => onClick(id)}
        aria-pressed={isActive}
      >
        {label}
      </button>
    </li>
  );
};

export default NavItem;