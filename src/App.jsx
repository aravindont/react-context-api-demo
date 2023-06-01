import React, { useState } from "react";
import Dashboard from "./Dashboard";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
