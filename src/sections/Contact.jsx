import dragonBall from '../assets/imgs/z-ball.png';

export default function Contact() {
  return (
    <section className= "w-screen min-h-96 px-10 mb-10 md:mt-32 mt-5 " id='contact'>
      <div className="bg-black overflow-hidden text-blue-50 py-24 rounded-lg relative bg-[url('/public/vegeta1.jpg')] bg-[132%_66%] bg-no-repeat bg-contain sm:bg-size-[50vw]">
        <div className="flex z-10 flex-col justify-center items-center text-center px-5">
            <h4 className="text-[12px] uppercase">Dragon Ball Z</h4>
            <p className="font-zentry uppercase text-center md:text-[6rem] leading-[.8] text-4xl special-font mt-10 max-w-md md:max-w-[41.5rem] special-font">
                <b>j</b>oin the her<b>o</b>es of Drag<b>o</b>n Ball <b>z</b> <b>as</b> they <b>e</b>mbark on epic advent<b>u</b>res.
            </p>

            <img src={dragonBall} alt="dragon ball" className='w-28 sm:w-34 absolute -bottom-13 translate-x-1/1.5' />

            <div className='w-fit rounded-full px-7 py-3 mt-7 bg-violet-50 text-black cursor-pointer text-xs uppercase group overflow-hidden'>
              <div className='relative'>
                  <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-9 group-hover:skew-y-12'>
                      Become a hero
                  </div>
                  <div className='absolute translate-y-5 skew-y-12 transition duration-500 group-hover:-translate-y-4 group-hover:skew-y-0'>
                      Become a hero
                  </div>
              </div>
            </div>  
        </div>
      </div>
    </section>
  )
}
