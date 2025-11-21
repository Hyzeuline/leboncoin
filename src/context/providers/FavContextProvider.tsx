import { useReducer, type ReactNode } from "react";
import { FavContext } from "../FavContext";
import type { TProduct } from "../../types";
import { calculateTotal } from "../../utils/calculateTotal";

type TFavProps = {
  children: ReactNode;
};

export type TState = {
  fav: TProduct[];
  total: number;
};

export type TAction =
  | { type: "addToFav"; payload: TProduct }
  | { type: "removeFromFav"; payload: TProduct };

export const favReducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case "addToFav":
      const newFav = [...state.fav, action.payload];
      return { fav: newFav, total: calculateTotal(newFav) };
    case "removeFromFav":
      const removeFav = state.fav.filter(
        (elem) => elem.id !== action.payload.id,
      );
      return { fav: removeFav, total: calculateTotal(removeFav) };
    default:
      return state;
  }
};

export const FavProvider = ({ children }: TFavProps) => {
  const [state, dispatch] = useReducer(favReducer, { fav: [], total: 0 });
  const { fav, total } = state;

  return (
    <FavContext.Provider
      value={{
        fav,
        dispatch,
        total,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};
