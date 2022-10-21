/* eslint-disable react/react-in-jsx-scope */

import '../css/Header.css';
import ThemeSelector from './ThemeSelector';

function Header() {
  return (
    <header>
      <div className='header-content'>
        <div className='left-side-of-header'>
          <ThemeSelector />
          <h1 className='golden-text '>Koen Hankel</h1>
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






