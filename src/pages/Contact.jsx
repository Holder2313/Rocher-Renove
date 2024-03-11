import React from "react";
import Banner from "../components/bannner/Banner";
import interieur from "../assets/images/services/interieur.jpeg";
import ContactForm from "../layout/ContactForm";
import Titre from "../components/titre/Titre";

export default function Contact() {
  return (
      <section className=" mt-[105px] ">
           <Banner />
      <div className="max-w-[1340px] mx-auto px-[30px]">
       

        <Titre titre={"Contactez Nous"} />

        <div className=" w-full flex justify-between items-center p-5">
          <div className=" border h-full hidden lg:block  lg:w-[40%] ">
            <img
              className=" h-[460px] w-[80%] object-cover "
              src={interieur}
              alt=""
            />
          </div>

          <div className="  w-full lg:w-[50%] ">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
