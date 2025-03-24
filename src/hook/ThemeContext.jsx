// src/hook/ThemeContext.jsx
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { lightTheme, darkTheme } from "../styles/Theme";

export const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProviderCustom.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);
