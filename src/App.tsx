import Header from "./components/Header";
import Main from "./components/Main";
import Post from "./components/Post";

import { FavProvider } from "./context/FavContext";

import cn from "./utils/cn";

import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <FavProvider>
      <div
        className={cn({
          "bg-white text-black": theme === "light",
          "bg-black text-white": theme === "dark",
        })}
      >
        <Header />
        <Post />
        <Main />
      </div>
    </FavProvider>
  );
}

export default App;
