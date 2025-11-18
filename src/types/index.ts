export type TCategorie = {
  id: number;
  image: string;
  title: string;
};

export type TProduct = {
  id: number;
  avatar: string;
  username: string;
  stars?: number;
  comments?: number;
  image: string;
  title: string;
  price: number;
  delivery?: boolean;
  place: string;
  date: string;
};
