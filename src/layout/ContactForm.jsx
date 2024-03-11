import React from 'react'

export default function ContactForm() {
  return (
    <form className=" w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:p-4 ">
      <div className=" col-span-2 sm:col-span-1 flex flex-col">
        <label htmlFor="name" className="mb-2">
          Nom
        </label>
        <input
          type="text"
          id="name"
          className="  border-2 p-2"
          placeholder="Votre nom"
        />

        <label htmlFor="email" className="mb-2 mt-4">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border-2 p-2"
          placeholder="Email"
        />
      </div>

      <div className="col-span-1 flex flex-col">
        <label htmlFor="location" className="mb-2">
          Localité
        </label>
        <input
          type="text"
          id="location"
          className="border-2 p-2"
          placeholder="Votre localité"
        />

        <label htmlFor="phone" className="mb-2 mt-4">
          Numéro de tel
        </label>
        <input
          type="text"
          id="phone"
          className="border-2 p-2"
          placeholder="Votre numéro de téléphone"
        />
      </div>

      <div className="col-span-2 flex flex-col">
        <label htmlFor="message" className="mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="border-2 p-2"
          rows="8"
          placeholder="Votre message"
        ></textarea>
      </div>

      <div className=" col-span-2 flex justify-center">
        <button
          type="submit"
          className=" h-12 mt-4 px-9 bg-main-color text-white "
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
