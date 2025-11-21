import type { ReactNode } from "react";
import { ThemeContextProvider } from "./ThemeContextProvider";
import { FavProvider } from "./FavContextProvider";

type TAllContextProvider = {
  children: ReactNode;
};

export const AllContextProvider = ({ children }: TAllContextProvider) => {
  return (
    <ThemeContextProvider>
      <FavProvider>{children}</FavProvider>
    </ThemeContextProvider>
  );
};
