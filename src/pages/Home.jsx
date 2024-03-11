import React from 'react'

import HeroSlider from "../components/HeroSlider"
import Cta from "../components/cta/Cta";
import Avantages from "../layout/Avantages";
import GalleryHome from "../layout/GalleryHome";
import Intro from "../layout/Intro";
import Services from "../layout/Services";

export default function Home() {
  return (
      <div>
          
    <HeroSlider />
    
      <Intro />

      <Services />
      <Cta />
      <Avantages />
      <GalleryHome />
    </div>
  );
}
