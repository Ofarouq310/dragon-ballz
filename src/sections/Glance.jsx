import goku from '../assets/imgs/goku.jpg'
import vegeta from '../assets/imgs/vegeta.jpg'
import picolo from '../assets/imgs/picolo.jpg'
import gohan from '../assets/imgs/gohan.jpg'
import trunks from '../assets/imgs/trunks.jpg'
 import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Glance() {

  useGSAP(() => {
    gsap.set(["#goku", "#vegeta", "#picolo", "#gohan", "#trunks"], {
        clipPath: "polygon(39% 0%, 61% 39%, 61% 61%, 39% 100%)",
        borderRadius: "0% 0% 40% 10%",
      });
    
    gsap.from(["#goku", "#vegeta", "#picolo", "#gohan", "#trunks"], {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#heroes",
        start: "10% top",
        end: "80% bottom",
        scrub: true,
      }
    });

  gsap.to(["#vegeta", "#picolo", "#gohan", "#trunks"], {
    x: 0,
    y:0,
    stagger: 0.09,
    scrollTrigger: {
      trigger: "#heroes",
      start: "top top", 
      end: "top 80%", 
      toggleActions: "play none play reverse",    
    },
  });
  

});

  return (
    <section className="min-h-screen bg-black" id='heroes'>
        <div className="container mx-auto w-full flex flex-col">
            <div className="py-32 text-blue-50 text-lg text-center flex flex-col justify-start items-center">
                <h2 className="font-zentry uppercase text-center md:text-[6rem] text-4xl special-font mb-5">
                    h<b>e</b>r<b>oe</b>s at <b>a</b> <b>g</b>lan<b>ce</b>
                </h2>

                <div className="w-full h-full flex flex-wrap justify-center items-center gap-5 2xl:max-w-[50vw]">
                    <div id="vegeta" className="translate-x-100 w-64 h-64 sm:w-80 sm:h-80 rounded-s-lg overflow-hidden perspective-dramatic ">
                      <img src= {vegeta} alt= "vegeta" className="rotate-y-0" />
                    </div>
                    
                    <div id="goku" className="z-10 w-64 h-64 sm:w-80 sm:h-[60vh] 2xl:h-[45vh] rounded-lg overflow-hidden perspective-dramatic ">
                      <img src= {goku} alt= "goku" className="rotate-y-0" />
                    </div>

                    <div id="picolo" className="-translate-x-100 w-64 h-64 sm:w-80 sm:h-80 rounded-e-lg overflow-hidden perspective-dramatic ">
                      <img src= {picolo} alt= "picolo" className= "rotate-y-0"/>
                    </div>

                    <div id="gohan" className=" -translate-y-80 w-64 h-64 sm:w-80 sm:h-80 rounded-lg overflow-hidden perspective-dramatic ">
                      <img src= {gohan} alt= "gohan" className="w-full h-full object-cover rotate-y-0" />
                    </div>

                    <div id="trunks" className="translate-x-5 -translate-y-80 w-64 h-64 sm:w-80 sm:h-80 rounded-lg overflow-hidden perspective-dramatic ">
                      <img src={trunks} alt="trunks" className="w-full h-full object-cover rotate-y-0" />
                    </div>
                    
                </div>

                <p className="md:max-w-[50vw] text-base font-circularweb text-center text-violet-50 mt-15 sm:mt-20">
                  Join the heroes of Dragon Ball Z as they embark on epic adventures, face formidable foes, and push their limits to protect the universe from impending threats.
                </p>
            </div>
        </div>
        <div className='min-h-dvh bg-black'></div>
    </section>
  )
}
