import {
  frieza,
  legendsOpening,
  kakarotOpening,
  sparkingOpening,
  gtOpening,
  majin,
  gt,
} from '../assets/videos/index.js';


export default function Hero() {
  const videos = [
    legendsOpening,
    kakarotOpening,
    sparkingOpening,
    gtOpening,
    majin,
    gt,
  ];

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden"> 
      <div className="relative w-full h-[100dvh]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex justify-center items-center size-64 absolute-center mask-[url(src/assets/imgs/z-ball3cut.png)] mask-no-repeat mask-cover">
            <video src={legendsOpening} className="w-full h-full object-cover" autoPlay muted loop playsInline />
          </div>
          <video src={legendsOpening} className="w-full h-full object-cover" autoPlay muted loop playsInline />
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full z-50'>
        <h1 className="text-5xl md:text-7xl lg:text-5xl text-white font-bold">
          Dragon Ball Legends
        </h1>
      </div>
    </div>
  );
}
