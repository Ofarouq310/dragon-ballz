import heros from '../assets/imgs/heros.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function About() {

 useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,  
        pinSpacing: true,
      },
    });

    clipAnimation.to("#heroes-image", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section className="relative flex flex-col justify-start items-center w-full min-h-screen text-black mt-36">
        <div className=" relative w-full h-full text-center flex flex-col justify-center items-center gap-3 mb-8">
            <h3 className="text-sm uppercase">Welcome to Dragon Ball Z</h3>
            <h2 className="sm:text-8xl text-5xl text-black font-zentry text-center max-w-5xl special-font ">Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure,</h2>

            <div className='absolute -bottom-[80dvh] flex flex-col items-center justify-center w-full font-circularweb text-sm md:text-base max-w-96 text-center md:max-w-[34rem]'>
                <p className=" text-lg">
                  The ultimate adventure—awaits!
                </p>
                <p className="text-lg text-gray-500">Join your favorite heroes in a universe filled with epic battles,
                  powerful transformations, and legendary quests
                </p>
            </div>
        </div>
        
            <div className='w-screen h-dvh flex justify-center' id="clip">
              <div className="absolute top-0 z-10 w-96 h-[50vh] sm:h-[60vh] md:w-[30vw] overflow-hidden rounded-3xl shadow-lg" id='heroes-image'>
                  <img className='object-cover w-full h-full origin-center sm:object-[80%]' src={heros} alt="Heros"></img>
              </div>  
            </div>
    </section>
  )
}
