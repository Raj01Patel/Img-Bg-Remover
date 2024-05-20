
import { useState } from "react";
import RemoveBackground from "./components/BgRemover/BgRemover"
import Footer from "./components/Footer/Footer"
import FrontPage from "./components/FrontPage/FrontPage"
import Header from "./components/Header/Header"


function App() {

  const [mainPage, setMainPage] = useState(false);

  const handleGetStarted = () => {
    setMainPage(true);
  };

  return (
   <div>
    {
      mainPage ? (
        <>
        <Header/>
        <RemoveBackground/>
        <Footer/>
        </>
      ):(
        <FrontPage onGetStarted={handleGetStarted} />
      )
    }
   </div>
  )
}

export default App
