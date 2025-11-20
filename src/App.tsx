import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import New from "./components/New";
import ArticleContainer from "./components/ArticleContainer";

function App() {

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)


  useEffect(() => {
    const resizeHandler = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [])

  return <div className="bg-off-white h-dvh font-inter px-6 py-8  ">
    <Navbar screenWidth={screenWidth} />
    <Hero screenWidth={screenWidth} />
    <New />
    <ArticleContainer />
  </div>
}

export default App;