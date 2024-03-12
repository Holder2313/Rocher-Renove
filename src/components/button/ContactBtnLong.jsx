import React from "react";
import { Link } from "react-router-dom";

export default function ContactBtnLong({ txt }) {
  return (
    <Link to='/contact'>
      <button className=" w-full mx-auto lg:mx-0 my-6 flex justify-center items-center text-slate-100 bg-main-color py-3 px-6">
        {txt}
      </button>
    </Link>
  );
}
