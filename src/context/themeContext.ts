import { createContext } from "react";

const ThemeContext = createContext({
  themeMode: "dark",
  toggleThemeMode: () => {},
});

export default ThemeContext;
