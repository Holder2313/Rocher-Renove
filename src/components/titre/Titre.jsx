import React from 'react'

export default function Titre ({titre}) {
  return (
    <div className=" text-center sm:text-justify mb-10 ">
      <h3 className=" text-">ROCHER RENOVE</h3>
      <h2 className=" text-3xl">{titre} </h2>
    </div>
  );
}
