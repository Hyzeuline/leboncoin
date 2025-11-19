import { Modal as MUIModal } from "@mui/material";
import type { TProduct } from "../types";
import { memo } from "react";

type FavModalProps = {
  fav: TProduct[];
  open: boolean;
  onClose: () => void;
  total: number;
};

const ModalFav = ({ fav, open, onClose, total }: FavModalProps) => {
  return (
    <MUIModal open={open} onClose={onClose}>
      <div className="fixed top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-bold">Mes favoris</h2>
        {fav.length === 0 ? (
          <p>Aucun favoris</p>
        ) : (
          fav.map((element) => (
            <div key={element.id} className="mb-4 flex justify-around">
              <div className="flex gap-4">
                <img
                  src={element.image}
                  alt={element.title}
                  className="size-10 rounded-md object-cover"
                />
                <p className="w-20 overflow-hidden mask-ellipse font-semibold text-ellipsis whitespace-nowrap">
                  {element.title}
                </p>
              </div>
              <p>{element.price} €</p>
            </div>
          ))
        )}
        <p>Prix total : {total} €</p>
      </div>
    </MUIModal>
  );
};

export default memo(ModalFav);
