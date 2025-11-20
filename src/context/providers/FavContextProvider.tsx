import { useReducer, type ReactNode } from "react";
import { FavContext, favReducer } from "../FavContext";

type TFavProps = {
  children: ReactNode;
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
