import "./Navbar.css";

import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span>shop</span>smart
      </div>
      <div className="navbar__themeToggler">
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
