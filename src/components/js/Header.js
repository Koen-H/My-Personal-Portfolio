/* eslint-disable react/react-in-jsx-scope */

import '../css/Header.css';

function Header() {
  return (
    <header>
      <h1>Koen Hankel</h1>
      <Navigation />
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
  const listItems = navItems.map(({title,href}) =>
    <li key={title}><a href={href}>{title}</a></li>
  )
  return (
    <nav className='headerNav'>
      <ul>
        {listItems}
      </ul>
    </nav>
  );
}






