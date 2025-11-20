import { createContext } from "react";
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
