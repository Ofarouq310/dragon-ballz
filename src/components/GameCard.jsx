import Button from "./Button"
import oneStar from '../assets/imgs/z-ball.png';
import Tilt from 'react-parallax-tilt';

export default function GameCard({video, title, description}) {
  
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={.97} className="h-full">
      <div className= 'relative size-full rounded-md border-hsla flex items-end justify-end' >
        <div className="absolute size-full z-10 top-0 left-0 flex flex-col justify-between text-blue-100 max-[25rem]:p-2 p-5">
          <div>
            <h4 className="card-title special-font">
              {title}
            </h4>
            <p className="max-w-82 mt-3 md:text-base text-xs">
              {description}
            </p>

          </div> 
            <Button title={'Visit Website'} image={oneStar} containerClass={'bg-black text-neutral-600 border-hsla max-sm:!text-xs max-sm:!h-[34px] hover:bg-blue-50 transition-all duration-200 ease-in'} />
        </div>
          <div className="bg-gray-900 h-full clip-parallelogram video-mask">
            <video src={video} className="size-full origin-center object-cover opacity-50"
            autoPlay muted playsInline loop
            />    
          </div>
        </div>
      </Tilt>
    )
}
