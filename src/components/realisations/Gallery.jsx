import React from 'react'
import { imagesData } from '../../data/gallery/galleryData'


export default function Gallery() {

    const images = imagesData

  return (
    <div>
      
          <div className="flex flex-wrap -m-1 md:-m-2">
              
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-wrap w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
          >
            <img
              alt={`Content ${index}`}
              src={image.img}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
