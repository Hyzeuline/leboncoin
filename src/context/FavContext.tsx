import { createContext } from "react";
import type { TProduct } from "../types";

export type FavContextType = {
  fav: TProduct[];
  setFav: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

export const FavContext = createContext<FavContextType>({
  fav: [],
  setFav: () => {},
});
