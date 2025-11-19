import { createContext, useState, type ReactNode } from "react";
import type { TTheme } from "../types";

export type TThemeContext = {
  theme: TTheme;
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>;
  toggle: () => void;
};

export const ThemeContext = createContext<TThemeContext>({
  theme: "light",
  setTheme: () => {},
  toggle: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
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
