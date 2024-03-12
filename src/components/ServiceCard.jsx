import React, { useRef } from "react";
import { gsap } from "gsap";

export default function Card({ cardData }) {
  const cardRef = useRef(null);
  const textInfoRef = useRef(null);
  const textRef = useRef(null); // Référence pour le conteneur de la carte
  const imageRef = useRef(null); // Référence pour l'image
  const titleRef = useRef(null); // Référence pour le titre

  const animateIn = () => {
    // Animation pour l'entrée de la souris
    gsap.to(textRef.current, {y: -200, duration: 0.4 });
    gsap.to(textInfoRef.current, { duration: 0.4 });
    gsap.to(cardRef.current, { y: 10, boxShadow: "none", duration: 0.4 });
    gsap.to(imageRef.current, { opacity: 0.4, duration: 0.4 }); // Exemple d'animation de l'image
    gsap.to(titleRef.current, {
      background: "none",
      scale: 1.5,
      duration: 0.5,
    }); // Exemple d'animation du titre
  };

  const animateOut = () => {
    // Animation pour la sortie de la souris
    gsap.to(textRef.current, {y: 0, duration: 0.4 });
    gsap.to(textInfoRef.current, { duration: 0.4 });
    gsap.to(cardRef.current, { y: 0, duration: 0.4 });
    gsap.to(imageRef.current, { opacity: 1, duration: 0.4 }); // Retour à l'état initial de l'image
    gsap.to(titleRef.current, {
      // background: "#00000070",
      scale: 1,
      duration: 1,
    }); // Retour à l'état initial du titre
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      className=" z-10 bg-black cursor-pointer w-full h-[330px] overflow-hidden relative "
    >
      <img
        ref={imageRef}
        className="absolute w-full h-full object-cover"
        src={cardData.img}
        alt=""
      />
      <div
        ref={textRef}
        className="  h-[530px] absolute top-0 flex flex-col justify-end opacity-1 text-slate-50"
      >
        <h4
          ref={titleRef}
          className="  py-5 text-xl text-center mb-12"
        >
          {cardData.title}
        </h4>
        <p className=" p-1  " ref={textInfoRef}>{cardData.txt}</p>
        <p className="border transition-all hover:bg-slate-50 hover:text-slate-700 py-2 my-4 w-32 flex justify-center items-center mx-auto">
          {cardData.txtBtn}
        </p>
      </div>
    </div>
  );
}
