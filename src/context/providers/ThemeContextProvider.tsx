import { useState, type ReactNode } from "react";
import type { TTheme } from "../../types";
import { ThemeContext } from "../ThemeContext";

type TThemeProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: TThemeProps) => {
  const [theme, setTheme] = useState<TTheme>("light");

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
