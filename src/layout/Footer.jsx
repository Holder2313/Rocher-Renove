import React from "react";

export default function Footer() {
  const titreFooter = "text-2xl mb-1";

  return (
    <footer className=" w-full bg-main-color pt-10 mt-20 text-slate-100 flex flex-col justify-between ">
      <div className=" flex flex-col md:flex-row max-w-[1340px] mx-auto px-[30px] ">
        <article className="  flex flex-col md:w-1/2 mb-5 md:mb-0 text-center md:text-justify    ">
          <h5 className={`${titreFooter} font-['Rubik'] px-4 `}>
            Rocher <span className=" font-thin">Renove</span>{" "}
          </h5>
          <p className=" text-sm italic font-thin px-4  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            cum laborum aliquid, libero natus, autem nesciunt vel quam quae
            laudantium velit!
          </p>
        </article>

        <section className="  w-full md:w-1/2 flex items-center  justify-between ">
          <article className=" md:w-[30%] flex flex-col justify-center items-center  md:mb-0 ">
            <h5 className={`${titreFooter}`}>Services</h5>
            <ul className=" text-sm font-thin">
              <li>Interieur</li>
              <li>Exterieur</li>
              <li>Parquet</li>
              <li>Salle de bain</li>
            </ul>
          </article>

          <article className="md:w-[50%] md:text-justify flex flex-col justify-center ">
            <h5 className={`${titreFooter}`}>Contact</h5>

            <address className=" flex flex-col text-sm font-thin">
              123 Rue Exemple <br />
              75000 Paris <br />
              <a href="tel:+33123456789">Tél : +33 1 23 45 67 89</a>
            <a className="" href="">Contact</a>
            </address>
          </article>
        </section>
      </div>

      <section className=" bg-gray-900 w-full flex justify-center text-sm py-2 mt-10 font-thin">
        <p>
          ROCHER RENOVE © <span> 2024 | </span>{" "}
          <span className=" cursor-pointer">Mentions légales</span>{" "}
        </p>
      </section>
    </footer>
  );
}
