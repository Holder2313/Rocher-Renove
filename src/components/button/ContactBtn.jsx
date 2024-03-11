import React from "react";
import { Link } from "react-router-dom";


export default function ContactBtn({ txt }) {
  return (
      <Link to='/contact'>
      <button className="w-[120px] flex justify-center items-center text-slate-100 bg-main-color py-2 px-6">
        {txt}
      </button>
      </Link>
      
    
  );
}
