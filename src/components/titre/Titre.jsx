import React from 'react'

export default function Titre ({titre}) {
  return (
    <div className=" text-center lg:text-justify mb-10 ">
      <h3 className=" text-">ROCHER RENOVE</h3>
      <div className='  inline-block'>
        <h2 className=" text-3xl mb-2 md:text-5xl">{titre} </h2>
      <div className=' h-[0px]  w-[100%] bg-slate-700 '></div>
      </div>
      
    </div>
  );
}
