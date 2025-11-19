import type { TProduct } from "../types";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavContext } from "../context/FavContext";

type TProductProps = { data: TProduct };

const Product = ({ data }: TProductProps) => {
  const { fav, removeFromFav, addToFav } = useContext(FavContext);

  const isFav = fav.some((elem) => elem.id === data.id);

  return (
    <div className="h-[426px] w-44">
      <div className="mb-2.5 flex items-center gap-1.5">
        <img
          src={data.avatar}
          alt={data.username}
          className="size-7 rounded-full"
        />
        <span className="w-20 overflow-hidden text-ellipsis whitespace-nowrap">
          {data.username}
        </span>
        {data.stars && (
          <span className="flex justify-center gap-2">
            <FaStar className="text-dark-brown" />
            {data.stars}
          </span>
        )}
        {data.comments && <span>({data.comments})</span>}
      </div>
      <img
        src={data.image}
        alt={data.title}
        className="mb-2.5 h-52 w-full rounded-md object-cover"
      />
      <p>{data.title}</p>
      <p>{data.price} €</p>
      {data.delivery && <p>Livraison possible</p>}
      <div className="flex items-end justify-between">
        <div>
          <p>{data.place}</p>
          <p>{data.date}</p>
        </div>
        <button
          onClick={() => {
            isFav ? removeFromFav(data) : addToFav(data);
          }}
        >
          {isFav ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default Product;
