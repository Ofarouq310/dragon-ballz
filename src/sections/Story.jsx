import shenron from '../assets/imgs/dragon-ball-shenron1.jpg';
import Tilt from 'react-parallax-tilt'
 import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


export default function Story() {

    useGSAP(() => {
  gsap.set("#story", {
    backgroundColor: "rgb(116 33 23)",
  });

  gsap.from("#story", {
    backgroundColor: "black", 
    scrollTrigger: {
      trigger: "#story",
      start: "top top", 
      end: "bottom bottom", 
      scrub: true,           
    },
  });
});
     

  return (
    <section className="min-h-dvh bg-black pb-[500px]" id='story'>

        <div className="container h-full mx-auto md:px-10 px-3 flex flex-col">
            <div className="relative py-32 px-5 h-dvh text-blue-50 text-lg text-center flex flex-col justify-start items-center">
                <h3 className="text-sm uppercase">Welcome to Dragon Ball Z</h3>
                <h2 className="z-10 font-zentry sm:mt-17 uppercase text-center md:text-[6rem] leading-[.8] text-4xl special-font mix-blend-overlay">
                    th<b>e</b> St<b>o</b>ry<br /> o<b>f</b> <b>7-</b><b>d</b>rag<b>o</b>n <b>balls</b>
                </h2>
                <h2 className="absolute font-zentry mt-7 sm:mt-22 uppercase text-center md:text-[6rem] leading-[.8] text-4xl special-font">
                    th<b>e</b> St<b>o</b>ry<br /> o<b>f</b> <b>7-</b><b>d</b>rag<b>o</b>n <b>balls</b>
                </h2>

                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                    <div className='pl-15 mx-auto sm:-mt-10 -mt-4 w-3xl relative perspective-dramatic'>
                        <img src={shenron} alt="shenron image" className='object-cover rounded-xl absolute rotate-y-3 -rotate-x-1 rotate-2' />
                    </div>
                </Tilt>

                <div className="w-full flex justify-end mt-[75vh] md:mt-[70vh]">
                    <div className='flex flex-col justify-center'>
                        <p className='max-w-[22rem] text-left justify-self-end text-violet-50 font-circularweb text-sm sm:text-base '>The seven Dragon Balls are magical orbs that, when gathered, summon a dragon to grant wishes before scattering again.</p>
                        <div className='w-fit rounded-full px-7 py-3 mt-5 bg-violet-50 text-black cursor-pointer text-xs uppercase font-black group overflow-hidden'>
                            <div className='relative'>
                                <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-9 group-hover:skew-y-12'>
                                    Discover Story
                                </div>
                                <div className='absolute translate-y-5 skew-y-12 transition duration-500 group-hover:-translate-y-4 group-hover:skew-y-0'>
                                    Discover Story
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
