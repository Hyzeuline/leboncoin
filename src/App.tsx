import Header from "./components/Header";
import Main from "./components/Main";
import Post from "./components/Post";

import cn from "./utils/cn";

import { useThemeContext } from "./context/hooks/useThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
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
  );
}

export default App;
