import type { ReactElement } from "react";
import cn from "../utils/cn";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRef } from "react";

type TCarousselProps<T> = {
  data: T[];
  containerClassName?: string;
  itemClassName?: string;
  Item: ({ data }: { data: T }) => ReactElement;
};

const carouselRef = useRef<HTMLDivElement | null>(null);

console.log(carouselRef.current);

const Caroussel = <T extends { id: number | string }>({
  data,
  containerClassName,
  itemClassName,
  Item,
}: TCarousselProps<T>) => {
  return (
    <div
      ref={carouselRef}
      className={cn(
        "hide-scrollbar flex gap-2.5 overflow-scroll",
        containerClassName,
      )}
    >
      {data.map((elem) => {
        return (
          <article key={elem.id} className={cn("shrink-0", itemClassName)}>
            <Item data={elem} />
          </article>
        );
      })}
      <button
        onClick={() =>
          carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" })
        }
      >
        <IoArrowBackCircleOutline />
      </button>
    </div>
  );
};

export default Caroussel;
