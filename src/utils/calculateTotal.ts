import type { TProduct } from "../types";

export const calculateTotal = (fav: TProduct[]) => {
  return fav.reduce((total: number, element) => total + element.price, 0);
};
