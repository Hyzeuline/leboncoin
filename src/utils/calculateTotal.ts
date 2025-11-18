export const calculateTotal = (fav: { price: number }[]) => {
  return fav.reduce((total, element) => total + element.price, 0);
};
