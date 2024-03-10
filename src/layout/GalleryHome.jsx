import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { avantagesList } from "../components/avantages/avantagesList";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// Importe tes images
import cuisine from "../assets/images/home/entreeCuisine.jpg";
import pinceau from "../assets/images/home/pinceau.jpg";
import bath from "../assets/images/services/bath.jpg";
import facade from "../assets/images/services/facade.jpg";
import interieur from "../assets/images/services/interieur.jpeg";
import parquet from "../assets/images/services/parquet.jpg";
import canape from "../assets/images/slider/canape.webp";
import chambre from "../assets/images/slider/chambre.webp";
import salon from "../assets/images/slider/salon.webp";




export default function GalleryHome() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const images = [
    {
      img: pinceau,
      size: "vertical",
    },
    {
      img: bath,
      size: "vertical",
    },
    {
      img: facade,
      size: "vertical",
    },
    {
      img: salon,
      size: "horizontal",
    },
    {
      img: interieur,
      size: "vertical",
    },
    {
      img: parquet,
      size: "vertical",
    },
    {
      img: canape,
      size: "horizontal",
    },
    {
      img: cuisine,
      size: "vertical",
    },
    {
      img: chambre,
      size: "horizontal",
    },
    // Ajoute plus d'URLs d'images ici
  ];
    
    const getImageClass = (size) => {
      
      if (size === "horizontal") {
          return "md:max-w-[60%] ";
          
      } else if (size === "vertical") {
          return "md:max-w-[30%] ";
          
      } else {
        return "md:max-w-[30%] ";
      }
    };
    
    useEffect(() => {
      gsap.fromTo(
        ".imgAnim",
        {
          y: 70,
          opacity: 0,

        },
        {
          y: 0,
          opacity: 1,
            stagger: 0.5,
          duration: 0.5,

          scrollTrigger: {
            trigger: ".imgAnim",
            start: " center",
            end: "bottom center",
          },
        }
      );
    }, []);

  return (
    <section className="max-w-[1340px] mx-auto bg-slate-100 py-10 px-2">
      <div className=" mb-5 pl-[30px]">
        <h3 className="text-3xl">Sous titre</h3>
        <h2 className="text-xl">Nos réalisations</h2>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.img}
            alt={`Realisation ${index + 1}`}
            onClick={() => openImage(image.img)}
            className={`imgAnim cursor-pointer object-cover ${getImageClass(
              image.size
            )}`}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full z-60 cursor-pointer"
          />
        </div>
      )}
    </section>
  );
}
