import "./ThemeToggler.css";

import { useTheme } from "../../context/theme";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useTheme();

  const clickHandler = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  return (
    <div
      className={`themeToggler ${themeMode === "dark" && "themeToggler__dark"}`}
      onClick={clickHandler}
    >
      <div className="themeToggler__circle"></div>
    </div>
  );
};

export default ThemeToggler;
