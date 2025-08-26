import gokuLogo from '../assets/imgs/goku-logo.png';
import Buttom from './Button.jsx';
import threeStar from '../assets/imgs/z-ball3.png';
import {useEffect, useState, useRef} from 'react';
import { useWindowScroll } from 'react-use';

export default function Header() {

  const navList = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'News', href: '#news' },
    { name: 'Prologue', href: '#prologue' },
    { name: 'Contact', href: '#contact' },
  ];

  const headerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  

 useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      headerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      headerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      headerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  return (
    <header ref={headerRef} className='fixed top-1 left-1/2 transform -translate-x-1/2 w-[95%] z-60 flex justify-between items-center px-10 transition-transform duration-300' style={{ transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
        <div className='flex items-center gap-5 text-white bg-transparent'>
            <img src={gokuLogo} alt="Dragon Ball Z Logo" className="w-10" />
            <Buttom title="Games" image={threeStar}
            containerClass = "flex text-xs flex-row-reverse bg-violet-50 text-black"
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
