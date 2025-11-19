import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ButtonPost from "./ButtonPost";
import Container from "./Container";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { memo, useCallback, useContext, useState } from "react";
import ModalFav from "./Modal";
import { FavContext } from "../context/FavContext";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { fav, total } = useContext(FavContext);
  const { toggle } = useContext(ThemeContext);

  const favCount = fav.length;

  const handleOpenModal = useCallback(() => {
    setModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <header className="border-light-grey border-b-2">
      <Container className="py-4">
        <div className="flex flex-col justify-around lg:flex-row">
          <div className="relative mb-2.5 flex justify-center gap-2">
            <img src={logo} alt="logo-leboncoin" />
            <IoMenu className="text-dark-blue absolute -top-2 left-0 text-5xl md:hidden" />
            <ButtonPost />
          </div>
          <div className="flex h-12 items-center gap-4 rounded-2xl bg-gray-100 px-3.5">
            <input
              type="text"
              className="flex-1 outline-0"
              placeholder="Rechercher sur leboncoin"
            />
            <FaMagnifyingGlass />
          </div>
          <div className="hidden lg:flex lg:flex-row lg:gap-2">
            <button onClick={toggle} className="flex flex-col gap-2 text-xs">
              <DarkModeOutlinedIcon />
              <h3>DarkMode</h3>
            </button>
            <div className="flex flex-col gap-2 text-xs">
              <NotificationsNoneOutlinedIcon />
              <h3>Notifications</h3>
            </div>
            <div
              className="flex flex-col gap-2 text-xs"
              onClick={handleOpenModal}
            >
              <div className="relative">
                <FavoriteBorderOutlinedIcon />
                <span className="absolute -top-1 right-1 rounded-full bg-red-500 px-1 text-[10px] text-white">
                  {favCount}
                </span>
              </div>
              <h3>Favoris</h3>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <MessageOutlinedIcon />
              <h3>Messages</h3>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <PersonOutlinedIcon />
              <h3>Se connecter</h3>
            </div>
          </div>
        </div>
        <ul className="font-nunito-sans text-md hide-scrollbar flex shrink-0 list-disc justify-around gap-5 overflow-scroll">
          <li className="shrink-0">Immobilier</li>
          <li className="shrink-0">Véhicules</li>
          <li className="shrink-0">Locations de vacances</li>
          <li className="shrink-0">Emploi</li>
          <li className="shrink-0">Mode</li>
          <li className="shrink-0">Maison & Jardin</li>
          <li className="shrink-0">Famille</li>
          <li className="shrink-0">Electronique</li>
          <li className="shrink-0">Loisirs</li>
          <li className="shrink-0">Autres</li>
        </ul>
      </Container>
      <ModalFav
        fav={fav}
        open={modal}
        onClose={handleCloseModal}
        total={total}
      />
    </header>
  );
};
export default memo(Header);
