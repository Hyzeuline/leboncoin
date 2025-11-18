import { Header } from "./components/Header";
import Main from "./components/Main";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="font-nunito-sans m-3 lg:mr-[110px] lg:ml-[110px] xl:mt-3 xl:mr-[212px] xl:mb-3 xl:ml-[212px]">
      <Header />
      <Post />
      <Main />
    </div>
  );
}

export default App;
