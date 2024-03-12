import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Titre from "../components/titre/Titre";
import entreeCuisine from "../assets/images/home/entreeCuisine.webp";
import ContactBtnLong from "../components/button/ContactBtnLong";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const textIntroRef = useRef(null);

  useEffect(() => {
    const lines = textIntroRef.current.innerHTML
      .split("\n")
      .map(
        (line) =>
          `<div style=" animTxt opacity: 0; transform: translateY(20px);">${line.trim()}</div>`
      )
      .join("");
    textIntroRef.current.innerHTML = lines;

    gsap.to('.textIntro div', {
      // Modifie ici pour cibler les div
      opacity: 1,
      y: 0, // Annule la translation en Y pour faire apparaître le texte
      duration: 1,
      stagger: 0.2, // Anime chaque div avec un délai pour un effet séquentiel
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.textIntro div',
        start: "top center+=100",
        toggleActions: "play none  ",
      },
    });

    gsap.to(".longBtnContact", {
      opacity: 1,
      x: 0,
      transition: 1,
      scrollTrigger: {
        trigger: ".longBtnContact",
        start: " center+=200 ",
        markers: false,
      },
    });
  }, []);

  return (
    <section className="  gap-5 max-w-[1340px] mx-auto py-10 md:py-20 md:px-[30px] ">

      <div className=" lg:pl-8 mb-20">
        <Titre titre={"Excellence en Peinture et Rénovation"} />
      </div>
      

      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <div className="   md:w-[50%] flex flex-col justify-between px-[30px]  ">
          <div className=" h-[100%] flex flex-col justify-between py-5   ">
            <p
              ref={textIntroRef}
              className=" textIntro text-lg lg:text-[20px] text-justify text-slate-700 lg:pr-20"
            >
              <span>
                Chez <strong>Rocher Renove</strong>, nous sommes fiers d'offrir
                un travail de peinture et de rénovation d'excellence depuis plus
                de quinze ans.
                
              </span>
              <br />
              <span>
                Situés dans le <strong>94</strong> et intervenant sur toute{" "}
                <strong>l'Île-de-France</strong>, nous nous spécialisons dans la
                transformation de vos intérieurs et extérieurs, avec un œil pour
                le design et un autre pour la durabilité.
              </span>
              <br />
              <span>
                Notre palette de services inclut la{" "}
                <strong>peinture décorative</strong>, la rénovation de{" "}
                <strong>parquet</strong>, et la métamorphose de pièces
                maîtresses telles que les <strong>salons</strong>, les{" "}
                <strong>cuisines</strong> <strong>salles de bains</strong>.
              </span>
              <br />
              <span>
                La satisfaction de nos clients est au cœur de notre démarche,
                guidant chaque coup de pinceau et chaque choix de matériaux.
                Pour redéfinir votre espace avec goût et professionnalisme,{" "}
                <strong>Rocher Renove</strong> est votre partenaire de
                confiance.
              </span>
            </p>
            <div className=" longBtnContact opacity-0 -translate-x-40 md:w-[85%]">
              <ContactBtnLong txt={"Débutez vore projet de rénovation"} />
            </div>
          </div>
        </div>

        <div className="   hidden md:flex -z-10 relative md:w-[50%] justify-end">
          {/* <div className=" absolute top-14 right-10 w-[300px] h-[300px] bg-main-color  "></div> */}
          <div className=" imgAnimIntro   imgBoxShadowRight w-[400px] h-[200px] sm:w-[550px] md:h-[100%] ">
            <img
              className=" w-[100%] h-[95%] object-cover  imgAnimIntro "
              src={entreeCuisine}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
