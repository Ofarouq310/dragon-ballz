  import {
    videoOne,
    videoTwo,
    videoThree,
    videoFour,

  } from '../assets/videos/index.js';

  import Button from '../components/Button.jsx';
  import threeStar from '../assets/imgs/z-ball3.png';
  import oneStar from '../assets/imgs/z-ball.png';
  import gsap from 'gsap';
  import { useGSAP } from '@gsap/react';
  import { useState } from 'react';


  export default function Hero() {
  const [videoIndex, setVideoIndex] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const videos = [videoOne, videoTwo, videoThree, videoFour];

  useGSAP(
      () => {
        if (isClicked) {
          gsap.set("#next-video", { visibility: "visible" });
          gsap.to("#next-video", {
            transformOrigin: "center center",
            scale: 1,
            width: "100%",
            height: "85%",
            borderRadius: "0%",
            duration: 1,
            ease: "power1.inOut",
          });
          gsap.from("#current-video", {
            transformOrigin: "center center",
            scale: 0,
            duration: 0.5 ,
            ease: "power2.inOut",
          });
          gsap.set("#bkg-video", {opacity: 0.5});
        }
      },
      {
        dependencies: [videoIndex],
        revertOnUpdate: true,
      }
    );

    const handleVideoClick = () => {
      const nextIndex = (videoIndex + 1) % videos.length;
      setVideoIndex(nextIndex);
      setIsClicked(true);

    };

    return (
      <div className="relative w-dvw h-dvh overflow-hidden">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 size-64 z-40 w-full h-full overflow-hidden">
              <div
              className="absolute z-[60] size-64 cursor-pointer pointer-events-auto inset-0 m-auto opacity-0 hover:opacity-100 scale-50 hover:scale-100
              transition-all duration-300 ease-in mask-[url('/src/assets/imgs/z-ball3cut.png')] mask-no-repeat mask-cover pointer-events-auto"
              onClick={handleVideoClick}
              >
                <video
                  src={videos[(videoIndex + 1) % videos.length]}
                  id="current-video"
                  className="w-full h-full object-cover origin-center"
                  muted
                  loop
                  playsInline 
                />
              </div>
            </div>

          </div>
            <video
              src={videos[videoIndex]}
              className= 'w-full h-full origin-center scale-0 object-cover absolute-center absolute z-35 pointer-events-none'
              id="next-video"
              autoPlay
              muted
              loop
              playsInline
            />

            <video
              src={videos[videoIndex]}
              id='bkg-video'
              className= 'w-full h-full origin-center object-cover absolute-center absolute z-30 pointer-events-none'
              autoPlay
              muted
              loop
            />
          
        </div>

        <div className="absolute top-0 left-0 z-40 mt-24 px-10 w-full h-full pointer-events-none flex flex-col gap-3">
          <h1 className="special-font flex items-center uppercase font-zentry text-white font-black lg:text-[12rem] text-7xl sm:text-9xl leading-none">
            dr<b>a</b>g
            <img src={oneStar} alt="One Star Dragon Ball" className="inline-block lg:w-37 w-15 sm:w-26" />
            n
          </h1>
          <p className="text-blue-100 text-md font-regular max-w-100 mb-5 font-robert-regular">
            Enter the world of Dragon Ball Z,<br /> where epic battles and legendary heroes come to life.
          </p>
         
          <Button title="Join the Adventure" image={threeStar} />
        </div>

        <div className="absolute bottom-0 right-0 z-40 mb-5 px-10">
          <h1 className="special-font uppercase font-zentry text-white font-black lg:text-[12rem] text-7xl sm:text-9xl leading-none">
            b<b>a</b>ll
          </h1>
        </div>
      </div>
    );
  };