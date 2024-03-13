import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { imagesData } from "../../data/gallery/galleryData";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);




export default function Gallery() {
  const images = imagesData;

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const getImageClass = (size) => {
    if (size === "horizontal") {
      return "sm:max-w-[50%] lg:max-w-[50%] ";
    } else if (size === "vertical") {
      return "sm:max-w-[25%] lg:max-w-[25%] ";
    } else {
      return "md:max-w-[25%] ";
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".imgAnim",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        duration: 0.5,
        stagger: 0.1,

        scrollTrigger: {
          trigger: ".imgAnim",
          start: " center",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.img}
            alt={`Realisation ${index + 1}`}
            onClick={() => openImage(image.img)}
            className={` imgAnim cursor-pointer object-cover ${getImageClass(
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
            className=" max-w-full max-h-[80%] z-60 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
