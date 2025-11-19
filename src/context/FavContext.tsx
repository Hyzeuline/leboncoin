import { createContext, useReducer } from "react";
import type { TProduct } from "../types";
import { calculateTotal } from "../utils/calculateTotal";

type TState = { fav: TProduct[]; total: number };

type TAction =
  | { type: "addToFav"; payload: TProduct }
  | { type: "removeFromFav"; payload: TProduct };

const favReducer = (state: TState, action: TAction) => {
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

export type FavContextType = {
  fav: TProduct[];
  dispatch: React.Dispatch<TAction>;
  total: number;
};

export const FavContext = createContext<FavContextType>({
  fav: [],
  dispatch: () => {},

  total: 0,
});

export const FavProvider = ({ children }: { children: React.ReactNode }) => {
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
