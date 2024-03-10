import React from "react";

export default function ContactBtn({txt}) {
  return (
    <p className=" w-[120px] flex justify-center items-center text-slate-100 bg-main-color py-2 px-6">
      {txt}
    </p>
  );
}
