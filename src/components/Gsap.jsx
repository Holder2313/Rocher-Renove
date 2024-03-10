import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Gsap() {
  

  useEffect(() => {
    gsap.to(".anim", {
      x: 220,
      opacity: 1,
      stagger: 0.1,
      duration: 1,

      scrollTrigger: {
        trigger: '.anim',
        start: " center",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <div className=" h-screen grid grid-cols-2">
      {Array.from({ length: 9 }, (_, i) => (
        <div className="w-[400px] h-[170px] bg-indigo-600 anim opacity-0 "></div>
      ))}
    </div>
  );
}
