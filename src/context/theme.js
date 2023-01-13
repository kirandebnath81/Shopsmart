import { createContext, useContext, useEffect, useState } from "react";

//context
const ThemeContext = createContext();

//provider
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    window.localStorage.getItem("theme") || "light"
  );

  //storing the theme value in the local storage
  useEffect(() => {
    window.localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={[themeMode, setThemeMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

//consume context
export const useTheme = () => useContext(ThemeContext);
