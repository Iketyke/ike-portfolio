import React, {useState, useEffect} from 'react'
import "./Navbar.css"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
    <>
      <a href="#about">
        <p>About</p>
      </a>
      <a href="#skills">
        <p>Skills</p>
      </a>
      <a href="#projects">
        <p>Projects</p>
      </a>
      <a href="#contact">
        <p>Contact Me</p>
      </a>
    </>
  );

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="App__Navbar">
        
        <h3 className='App__Navbar-Logo'><a href="#home">IMP</a></h3>
        <div className="App__Navbar-Links">
          <Menu />
        </div>
        <div className="App__Navbar-Menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={43}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={43}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="App__Navbar-Menu-Container scale-up-center">
            <div className="App__Navbar-Menu_Container-Links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar