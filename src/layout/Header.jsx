import React, { useState } from "react";
import ContactBtn from "../components/button/ContactBtn";
import logo from "../assets/logo/logo.png";
import ContactBtnLong from "../components/button/ContactBtnLong";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLink = " my-4 mx-4 lg:flex";

  return (
    <header className="z-30 border bg-white fixed top-0 w-full flex justify-between items-center py-4 px-4 lg:px-[10%]">
      <div className="flex items-center gap-2">
        <img className=" w-[50px] sm:w-[70px]" src={logo} alt="Logo" />
        <h1 className="font-['Rubik'] text-lg sm:text-xl">
          ROCHER <span>RENOVE</span>
        </h1>
      </div>

      <button
        className="lg:hidden bg-main-color text-slate-100 py-2 px-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Ici, tu peux ajouter une icône de menu hamburger */}
        <span>Menu</span>
      </button>

      <nav
        className={`fixed bg-white lg:static top-0 right-0 xl:w-[60%] h-full lg:h-auto  ${
          isMenuOpen ? " px-8 py-20 mt5 w-full text-3xl flex flex-col items-end " : "hidden"
        } lg:flex lg:items-center lg:justify-between`}
      >
        <div className="lg:hidden absolute top-5 right-5">
          <button onClick={() => setIsMenuOpen(false)}>Fermer</button>
          {/* Bouton de fermeture pour le menu mobile */}
        </div>
        {/* Tes liens de navigation ici */}
        <p className={`${navLink}`}>Accueil</p>
        <p className={`${navLink}`}>Intérieur</p>
        <p className={`${navLink}`}>Revêtement mural</p>
        <p className={`${navLink}`}>Revêtement sol</p>
        <p className={`${navLink} lg:mr-10`}>Réalisations</p>
        {isMenuOpen ? (
          <div className=" w-[40%] ">
            <ContactBtnLong txt={"Contact"} />
          </div>
        ) : (
          <ContactBtn txt={'Contact'} />
        )}
      </nav>
    </header>
  );
}
