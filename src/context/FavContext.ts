import { createContext, type Dispatch } from "react";
import type { TProduct } from "../types";
import type { TAction } from "./providers/FavContextProvider";

type TFavContext = {
  fav: TProduct[];
  dispatch: Dispatch<TAction>;
  total: number;
};

export const FavContext = createContext<TFavContext>({
  fav: [],
  dispatch: () => {},

  total: 0,
});
