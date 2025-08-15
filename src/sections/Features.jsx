import {frieza} from "../assets/videos/index"

export default function Features() {
  return (
    <section className='min-h-screen bg-black pb-[200px]' id='features'>
      <div className="container mx-auto md:px-10 px-3">

        <div className="py-32 px-5 font-circularweb text-blue-50 text-lg">
          <h3>Into the Dragon Ball Z World,</h3>
          <p className="opacity-50 max-w-md">
            Immerse yourself in the legendary universe of Dragon Ball Z, where epic battles, powerful transformations,
            and unforgettable heroes await. Discover unique features that bring the world of Saiyans, Namekians, and more to life.
          </p>
        </div>

        <div>
          <div className="grid grid-rows-4 grid-cols-2 gap-10 grid-flow-row justify-items-center">
            <div className="relative w-full h-80 border-1 border-amber-100 col-span-2 flex items-end justify-end">
              <div className="absolute size-full z-10 top-0 left-0 flex flex-col text-blue-50 p-5">
                <h4 className="card-title special-font">
                  Fri<b>e</b>za
                </h4>
                <p className="max-w-64 mt-3 md:text-base text-xs">
                  Frieza is .....
                </p>
              </div>

              <div className="bg-gray-900 h-full clip-parallelogram">
                <video src={frieza} className="size-full origin-center object-cover opacity-30" autoPlay muted playsInline loop />    
              </div>
            </div>
            <div className="w-full h-full border-1 border-amber-100 row-span-2" />
            <div className="w-full h-80 border-1 border-amber-100" />
            <div className="w-full h-80 border-1 border-amber-100" />
            <div className="w-full h-80 border-1 border-amber-100" />
            <div className="w-full h-80 border-1 border-amber-100" />
          </div>
        </div>


      </div>
    </section>
  )
}
