import React, { useEffect, useRef } from "react";
import entreeCuisine from "../assets/images/home/entreeCuisine.jpg";
import AvantageItem from "../components/avantages/AvantageItem";
import { gsap } from "gsap";
import { avantagesList } from "../components/avantages/avantagesList";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Avantages() {
  const list = avantagesList;

  console.log(list);

  useEffect(() => {
    gsap.fromTo(
      ".avantageAnim",
      {
        x: 400,
          opacity: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6, 
      },
      {
          x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,

        scrollTrigger: {
          trigger: ".avantageAnim",
          start: " center",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <section className="max-w-[1340px] mx-auto my-24 overflow-auto">
      <div className=" my-14 pl-[30px]">
        <h3 className=" text-3xl">Sous titre</h3>
        <h2 className=" text-xl">Nos avantages</h2>
      </div>

      <div className=" flex flex-col lg:flex-row w-full lg:pl-[30px] ">
        {/* image */}
        <div className=" imgBoxShadowRight  mr-[100px]  w-[100%] h-[200px] lg:w-[480px] lg:h-[550px] ">
          <img
            className=" w-[100%] h-full object-cover "
            src={entreeCuisine}
            alt=""
          />
        </div>

        <div className=" max-w-[80%] lg:w-[60%] lg:pr-[10%] mx-auto pt-20 lg:pt-0  flex flex-col gap-6 items-center justify-betwen">
          {list.map((item, index) => (
            <AvantageItem
              key={index}
              title={item.title}
              txt={item.txt}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
