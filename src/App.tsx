import { useState } from "react";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { Post } from "./components/Post";
import { type TProduct } from "./types";
import { FavContext } from "./context/FavContext";

function App() {
  const [fav, setFav] = useState<TProduct[]>([]);

  // const [modal, setModal] = useState<boolean>(false);

  return (
    <FavContext.Provider value={{ fav: fav, setFav: setFav }}>
      <div className="font-nunito-sans m-3 lg:mr-[110px] lg:ml-[110px] xl:mt-3 xl:mr-[212px] xl:mb-3 xl:ml-[212px]">
        <Header favCount={fav.length} />
        <Post />
        <Main />
      </div>
    </FavContext.Provider>
  );
}

export default App;
