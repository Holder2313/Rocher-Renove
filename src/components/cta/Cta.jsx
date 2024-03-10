import React from 'react'
import ContactBtn from '../button/ContactBtn';

export default function Cta() {
  return (
    <section className=" bg-gray-500 max-w-[1280px] mx-auto h-[300px] flex flex-col justify-center items-center   ">
      <h2 className=" text-3xl py-1">Demandez un devis gratuit</h2>
      <p className=" py-1 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        perferendis corporis beatae.
      </p>
      <ContactBtn txt={'Contact'} />
    </section>
  );
}
