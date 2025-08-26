import GameCard from "../components/GameCard.jsx";

import { kakarot, breakers, sparkingZero, superHeroes, xenoverse, fighterZ } from "../assets/videos/index"

export default function Features() {

  return (
    <section className='min-h-dvh bg-black pb-[200px]' id='features'>
      <div className="container mx-auto md:px-10 px-3">

        <div className="py-32 px-5 font-circularweb text-blue-50 text-lg">
          <h3>Into the Dragon Ball Z World,</h3>
          <p className="opacity-50 max-w-md">
            Immerse yourself in the legendary universe of Dragon Ball Z, where epic battles, powerful transformations,
            and unforgettable heroes await. Discover unique features that bring the world of Saiyans, Namekians, and more to life.
          </p>
        </div>

        <div>
          <div className="relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <GameCard video={kakarot} title={<><b>K</b>ak<b>a</b>rot</>} description={'A sprawling action RPG that allows players to relive the iconic Dragon Ball Z story, battling familiar villains and exploring the world'} />
          </div>
          <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
            <div className="md:col-span-1 md:row-span-2 col-span-2 row-span-1">
              <GameCard video={sparkingZero} title={<>Sp<b>a</b>r<b>k</b>ing <b>Ze</b>ro</>} description={'Sparking Zero is a 3D team fighting game and expansion onto earlier games such as Budokai Tenkaichi 3, Budokai Tenkaichi 2, and Budokai Tenkaichi'} />
            </div>
            <GameCard video={xenoverse} title={<><b>X</b>en<b>o</b>verse</>} description={'History is being attacked by evil intruders, players will have to protect the Dragon Ball world'} />
            <GameCard video={fighterZ} title={<>Fig<b>ht</b>er <b>Z</b></>} description={'Involves the player picking a team of three characters and a unique assist for each, then fighting an AI'} />
            <GameCard video={breakers} title={<>Bre<b>ak</b>ers</>} description={'An Action game in which players take on the role of the "Raider" who hunts down the rest of players'} />
            <GameCard video={superHeroes} title={<>Su<b>p</b>er <b>H</b>ero<b>e</b>s</>} description={'Uses a turn-based card battle system in five rounds or less'} />
          </div>
        </div>
      </div>
    </section>
  )
}
