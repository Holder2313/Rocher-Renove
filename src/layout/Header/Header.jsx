import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ContactBtn from "../../components/button/ContactBtn";
import logo from "../../assets/logo/logo.png";
import close from "../../assets/icons/close.svg";
import ContactBtnLong from "../../components/button/ContactBtnLong";
import { linksData } from "./headerLinksData";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const btnRef = useRef(null);

  const links = linksData;

  useEffect(() => {
    if (isMenuOpen) {
      // Appliquer des animations sur mobile uniquement
      gsap.to(navRef.current, { opacity: 1, duration: 0.5 });
      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
      );
      gsap.fromTo(
        btnRef.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, delay: 0.3, duration: 0.4 }
      );
    }
  }, [isMenuOpen]);

  return (
    <header className="z-30 border bg-white fixed top-0 w-full flex justify-between items-center py-4 px-4 lg:px-[8%]">
      <div className="flex items-center gap-2">
        <img className="w-[50px] sm:w-[70px]" src={logo} alt="Logo" />
        <h1 className="font-['Rubik'] text-lg sm:text-xl">
          ROCHER <span>RENOVE</span>
        </h1>
      </div>

      <button
        className="lg:hidden bg-main-color text-slate-100 py-2 px-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span>Menu</span>
      </button>

      <nav
        ref={navRef}
        className={`fixed bg-white text-slate-700 lg:static top-0 right-0 lg:w-[85%] h-full lg:h-auto ${
          isMenuOpen ? "flex py-28 px-4 flex-col lg:flex-row w-full" : "hidden"
        } lg:flex lg:items-center lg:justify-end transition-opacity duration-500`}
      >
        <div className="lg:hidden w-[95%] flex justify-between items-center absolute top-4  ">
          {/* logo */}
          <div className="flex items-center gap-2 ">
            <img className="w-[50px] sm:w-[70px]" src={logo} alt="Logo" />
            <h1 className="font-['Rubik'] text-lg sm:text-xl">
              ROCHER <span>RENOVE</span>
            </h1>
          </div>

          {/* close */}
          <button className=" mr-4" onClick={() => setIsMenuOpen(false)}>
            <img className=" w-7  " src={close} />{" "}
          </button>
        </div>

        {links.map((link, index) => (
          <Link to={`${link.path}`}>
            <p
              onClick={() => setIsMenuOpen(false)}
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              className="my-4 mx-4 lg:flex text-3xl lg:text-sm font-semibold"
            >
              {link.link}
            </p>
          </Link>
        ))}

        <div
          ref={btnRef}
          className={`ml-4 items-end ${isMenuOpen ? "w-[30%]" : "w-[11%] "}`}
        >
          {isMenuOpen ? (
            <ContactBtnLong txt={"Contact"} />
          ) : (
            <ContactBtn txt={"Contact"} />
          )}
        </div>
      </nav>
    </header>
  );
}
