import type { TProduct } from "../types";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

type TProductProps = { data: TProduct };

const Product = ({ data }: TProductProps) => {
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
        {data.stars && <FaStar className="text-dark-brown" />}
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
        <CiHeart />
      </div>
    </div>
  );
};

export default Product;
