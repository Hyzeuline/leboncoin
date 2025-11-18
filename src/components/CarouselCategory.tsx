import data from "../assets/data.json";
import type { TCategorie } from "../types";
import Caroussel from "./Carousel";

const CarouselCategories = () => {
  const categories: TCategorie[] = data.categories;

  return (
    <Caroussel
      data={categories}
      itemClassName="relative size-32 overflow-hidden rounded-2xl"
      Item={({ data }) => {
        return (
          <>
            <img
              src={data.image}
              alt={data.title}
              className="size-full object-cover"
            />
            <p className="absolute bottom-1 w-full text-center text-sm text-white">
              {data.title}
            </p>
          </>
        );
      }}
    />
  );
};

export default CarouselCategories;
