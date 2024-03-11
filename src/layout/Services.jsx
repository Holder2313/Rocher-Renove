import React from "react";
import ServiceCard from "../components/ServiceCard";
import { carData } from "../data/services/cardData";
import Titre from "../components/titre/Titre";


export default function Services() {
  const cardData = carData;
  console.log(cardData);

  return (
    <section className=" max-w-[1340px] mx-auto px-[30px]">
      
<Titre titre={'Nos Services'} />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center my-20 gap-6  ">
        {cardData &&
          cardData.map((card, index) => (
            <ServiceCard key={index} cardData={card} />
          ))}
      </div>
    </section>
  );
}
