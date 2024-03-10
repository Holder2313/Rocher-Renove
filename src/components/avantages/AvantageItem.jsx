import React from "react";


export default function AvantageItem({title, txt, icon}) {
  return (
    <article className="   avantageAnim opacity-0 flex flex-col lg:flex-row items-center  w-full ">
      {/* icon */}
      <img className=" w-10 mx-7 my-4" src={icon} alt="" />

      <div className="">
        <h4 className=" text-2xl text-center lg:text-justify">{title} </h4>
        <p className="text-lg text-center lg:text-justify">{txt}</p>
      </div>
    </article>
  );
}
