import React from 'react'
import Gallery from '../../components/realisations/Gallery'
import Bannner from "../../components/bannner/Banner";
import Titre from "../../components/titre/Titre";



export default function Realisations() {
  return <div className=" mt-[105px] ">
    <Bannner />
    <Titre titre={'Nos Réalisations'} />
    <Gallery />
  </div>
}
