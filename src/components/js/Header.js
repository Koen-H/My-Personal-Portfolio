/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import '../css/Header.css';
// import ThemeSelector from './ThemeSelector';

import { useNavigate } from 'react-router-dom';


function Header() {


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navigate = useNavigate();

  return (
    <header id='header' className={scrolled ? 'header scrolled' : 'header'}>
      <div className='header-content'>
        <div className='left-side-of-header'>
          {/* <ThemeSelector /> */}
            <h1 className='golden-text ' onClick={() =>{
              navigate("/")
            }}>Koen Hankel</h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;



function Navigation() {
  const navItems = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Github",
      href: "https://github.com/Koen-H"
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/koen-hankel/"
    },
  ]
  const listItems = navItems.map(({ title, href }) =>
    <a href={href} key={title}><li>{title}</li></a>
  )
  return (
    <nav className='header-nav'>
      <ul className='header-nav-ul'>
        {listItems}
      </ul>
    </nav>
  );
}






