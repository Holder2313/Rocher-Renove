import Gallery from "../components/realisations/Gallery";
import Titre from "../components/titre/Titre";


export default function GalleryHome() {
  

  return (
    <section className="max-w-[1340px] mx-auto px-[30px] bg-slate-100 py-10">
      <Titre titre={"Nos réalisations"} />

      <Gallery />
      
    </section>
  );
}
