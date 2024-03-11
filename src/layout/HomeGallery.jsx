import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { avantagesList } from "../components/avantages/avantagesList";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import cuisine from "../assets/images/home/entreeCuisine.jpg";
import pinceau from "../assets/images/home/pinceau.jpg";
import bath from "../assets/images/services/bath.jpg";
import facade from "../assets/images/services/facade.jpg";
import interieur from "../assets/images/services/interieur.jpeg";
import parquet from "../assets/images/services/parquet.jpg";
import canape from "../assets/images/slider/canape.jpg";
import chambre from "../assets/images/slider/chambre.jpg";
import salon from "../assets/images/slider/salon.jpg";
import Titre from "../components/titre/Titre";

export default function HomeGallery() {

    const [selectedImage, setSelectedImage] = useState(null);

     const openImage = (image) => {
       setSelectedImage(image);
     };

     const closeImage = () => {
       setSelectedImage(null);
     };


  // Supposons que tu aies un tableau d'URLs d'images
  const images = [
    cuisine,
      pinceau,
    canape,
    bath,
    interieur,
      parquet,
    chambre,
    facade,
      cuisine,
    salon,
    bath,
    pinceau,
    cuisine,
    interieur,
    pinceau,
    cuisine,
    parquet,
    pinceau,
    facade,
      bath,
    interieur,
      cuisine,
      interieur,
      facade,
    canape,
    
    // Ajoute plus d'URLs d'images ici
  ];
    
    
    useEffect(() => {
      gsap.fromTo(
        ".imgAnim",
        {
          x: 400,
          opacity: 0,
         
          stagger: 0.3,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.3,
        //   duration: 1,

          scrollTrigger: {
            trigger: ".imgAnim",
            start: " center",
            end: "bottom center",
          },
        }
      );
    }, []);

  return (
    <section className=" start max-w-[1340px] mx-auto bg-slate-50">
        <Titre titre={'Nos Réalisations'} />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((image, index) => (
            <img
              class=" imgAnim cursor-pointer"
              key={index}
              src={image}
              alt={`Realisation ${index + 1}`}
            //   style={{ width: "100%", display: "block" }}
              onClick={() => openImage(image)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {selectedImage && (
        <div
          className="fixed top-0 lg:p-10 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full z-60 cursor-pointer "
          />
        </div>
      )}
    </section>
  );
}
