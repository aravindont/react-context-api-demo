import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
