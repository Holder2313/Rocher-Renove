import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// import { EffectCreative } from "swiper/modules";



import "swiper/css";
// import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { dataHeroSlider } from "../data/slider/sliderData";
import ContactBtn from "./button/ContactBtn";

export default function HeroSlider() {
  const textVariants = {
    hidden: { opacity: 0, scale:0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const dataSlider = dataHeroSlider;

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className=" w-[100%] overflow-hidden box-border">
      <Swiper
        className=" h-[250px] sm:h-[650px] "
        modules={[
          Navigation,
          Pagination,
          EffectFade,
          Scrollbar,
          A11y,
          // EffectCreative,
          Autoplay,
        ]}
        // spaceBetween={50}
        effect={"fade"}
        
        slidesPerView={1}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
       
      >
        {dataSlider.map((obj, index) => (
          <SwiperSlide
            key={index}
            className=" w-screen flex justify-center items-center"
          >
            <motion.div
              initial="hidden"
              animate={currentSlide === index ? "visible" : "hidden"}
              variants={textVariants}
              className=" hidden sm:block absolute text-slate-700 w-[400px] font-semibold bg-white/80 p-4  "
            >
              <h1 className=" text-3xl text-center mb-4">{obj.titre} </h1>
              <h2 className=" text-lg mb-4 text-center">{obj.sousTitre}</h2>
              <div className=" flex justify-center">
                <ContactBtn txt={'Contact'} />
              </div>
            </motion.div>

            <img
              className=" w-full h-full object-cover brightness-90 -z-10 "
              src={obj.img}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
