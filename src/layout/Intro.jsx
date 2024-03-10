import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

import entreeCuisine from "../assets/images/home/entreeCuisine.jpg";

import ContactBtnLong from "../components/button/ContactBtnLong";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Intro() {
  const picture = useRef();
  const text = useRef();

  const imgScale = (elem, delay = 0, duration = 4) => {
    gsap.fromTo(
      ".imgAnimIntro",
      {
        width: 0,
        y: 0,
      },
      {
        
        width: innerWidth,
        delay,
        duration,
        y: 0,

        scrollTrigger: {
          trigger: ".imgAnimIntro",
          start: " center",
          end: "bottom center",
        },
      }
    );
  };

  const textToLeft = (elem, delay = 0, duration = 1) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        duration,
        x: 0,

        onUpdate: ()=> console.log('ok'),
       

        scrollTrigger: {
          trigger: elem,
          start: " center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    console.log(picture);
    imgScale(picture.current);
  }, []);
  useEffect(() => {
    console.log(picture);
    textToLeft(text.current);
  }, []);

  return (
    <section className=" flex flex-col-reverse gap-5 max-w-[1340px] mx-auto py-10 lg:py-32 lg:flex-row lg:justify-between ">
      <div
        ref={text}
        className=" lg:w-[50%]  flex flex-col justify-between px-[30px]  "
      >
        <div className=" mb-10 ">
          <h2 className=" text-">ROCHER RENOVE</h2>
          <h3 className=" text-3xl">Excellence en Peinture et Rénovation</h3>
        </div>
        <div className="  w-[85%]py-10  ">
          <p className=" font-['Rubik']  text-lg text-justify text-slate-700  lg:pr-20 ">
            Chez <strong>Rocher Renove</strong> , nous sommes fiers d'offrir un
            travail de peinture et de rénovation d'excellence depuis plus de
            quinze ans. <br />
            Situés dans le <strong>94</strong> et intervenant sur toute{" "}
            <strong>l'Île-de-France</strong> , nous nous spécialisons dans la
            transformation de vos intérieurs et extérieurs, avec un œil pour le
            design et un autre pour la durabilité. <br /> Notre palette de
            services inclut la <strong>peinture décorative</strong> , la
            rénovation de <strong>parquet</strong> , et la métamorphose de
            pièces maîtresses telles que les <strong>salons</strong> , les{" "}
            <strong>cuisines</strong> <strong>salles de bains</strong> . <br />{" "}
            La satisfaction de nos clients est au cœur de notre démarche,
            guidant chaque coup de pinceau et chaque choix de matériaux. Pour
            redéfinir votre espace avec goût et professionnalisme,{" "}
            <strong>Rocher Renove</strong> est votre partenaire de confiance.{" "}
          </p>
          <div className=" lg:w-[85%]">
          <ContactBtnLong txt={'Débutez vore projet de rénovation'} />
        </div>
        </div>
        
      </div>

      <div className=" hidden lg:flex -z-10 relative lg:w-[50%]  justify-center items-center lg:px-[30px]">
        <div className=" absolute top-14 right-10 w-[300px] h-[300px] bg-main-color  "></div>
        <div className=" imgBoxShadowRight w-[100%] h-[200px] lg:w-[480px] lg:h-[550px] ">
          <img
            className=" w-[100%] h-full object-cover imgAnimIntro "
            src={entreeCuisine}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
