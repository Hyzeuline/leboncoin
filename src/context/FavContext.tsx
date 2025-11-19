import { createContext, useState, useCallback } from "react";
import type { TProduct } from "../types";

export type FavContextType = {
  fav: TProduct[];
  setFav: React.Dispatch<React.SetStateAction<TProduct[]>>;
  addToFav: (product: TProduct) => void;
  removeFromFav: (product: TProduct) => void;
};

export const FavContext = createContext<FavContextType>({
  fav: [],
  setFav: () => {},
  addToFav: () => {},
  removeFromFav: () => {},
});

export const FavProvider = ({ children }: { children: React.ReactNode }) => {
  const [fav, setFav] = useState<TProduct[]>([]);

  const addToFav = useCallback(
    (product: TProduct) => {
      setFav((prev) => [...prev, product]);
    },
    [setFav],
  );

  const removeFromFav = useCallback(
    (product: TProduct) => {
      setFav((prev) => prev.filter((elem) => elem.id !== product.id));
    },
    [setFav],
  );

  return (
    <FavContext.Provider
      value={{
        fav,
        setFav,
        addToFav,
        removeFromFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};
