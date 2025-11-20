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

  return <div className="bg-off-white max-w-screen font-inter px-6 py-8 md:px-30 md:pt-20">
    <Navbar screenWidth={screenWidth} />
    <div className="lg:flex gap-5 items-start">
      <Hero screenWidth={screenWidth} />
      <New />
    </div>
    <ArticleContainer />
  </div>
}

export default App;