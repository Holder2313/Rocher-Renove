// import Gsap from "./components/Gsap"
import HeroSlider from "./components/HeroSlider"
import Cta from "./components/cta/Cta"
import Avantages from "./layout/Avantages"
import Footer from "./layout/Footer"
import GalleryHome from "./layout/GalleryHome"

import Header from "./layout/Header"

import Intro from "./layout/Intro"
import Services from "./layout/Services"

function App() {
  
  return (
    <div className=" overflow-auto ">
       <Header />
      <HeroSlider />
      <Intro />
      {/* <Gsap /> */}
      <Services />
      <Cta />
      <Avantages />
      <GalleryHome />
      <Footer />
      
    </div>
   
    
  )
}

export default App
