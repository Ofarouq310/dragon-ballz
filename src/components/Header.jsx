import gokuLogo from '../assets/imgs/goku-logo.png';
import Buttom from './Button.jsx';
import threeStar from '../assets/imgs/z-ball3.png';

export default function Header() {

  const navList = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'News', href: '#news' },
    { name: 'Prologue', href: '#prologue' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className='absolute z-60 bg-transparent text-white top-0 left-0 px-10 flex justify-between items-center w-full'>
        <div className='flex items-center gap-5 text-white bg-transparent'>
            <img src={gokuLogo} alt="Dragon Ball Z Logo" className="w-12" />
            <Buttom title="Games" image={threeStar}
            containerClass = "bg-blue-50 flex flex-row-reverse"
            />
        </div>
        <nav className='md:block hidden'>
          <ul className='flex items-center gap-5 text-white bg-transparent'>
            {navList.map(({name, href})=> {
              return (
                <li className='nav-hover-btn' key={name}>
                  <a href={href}>{name}</a>
                </li>
              );
            })}  
          </ul>
        </nav>
    </header>
  )
}
