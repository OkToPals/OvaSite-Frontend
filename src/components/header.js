"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import '../styles/styles.css'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuHeight = menuOpen ? 'auto' : '0'; // Set it to 'auto' when open

  const menuStyle = {
    height: menuHeight,
    overflow: 'hidden',
    transition: 'height 0.3s ease', // Transition the height property
  };
  
  return (
<header className="text-gray-600 body-font fixed w-full z-50">
<div className="custom-container">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" 
        stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span className="ml-3 text-[#FF595A] text-2xl font-bold cursor-pointer">OvaSite</span>
    </a>
     
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-[#CAC0B3] font-bold">
      <Link className="mr-5 hover:text-white cursor-pointer" href='/home'>Home</Link>
      <Link className="mr-5 hover:text-white cursor-pointer" href='/About'>About</Link>
      <Link className="mr-5 hover:text-white cursor-pointer" href='/features'>Features</Link>
      <Link className="mr-5 hover:text-white cursor-pointer" href='/pricing'>Pricing</Link>
      <Link className="mr-5 hover:text-white cursor-pointer" href='/signin'>Sign In</Link>
    </nav>
  <Link href="/signup">
    <button className="inline-flex items-center bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
      hover:bg-[#fe5000] rounded text-[#001233] mt-4 md:mt-0 font-bold">Sign Up
      {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>*/}
    </button>
  </Link>   
   
  </div>

  <div id='header'>
  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 justify-center">
  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" 
    stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg> */}
  <span className="ml-3 text-[#FF595A] text-2xl font-bold cursor-pointer">OvaSite</span>
</a>

    <span id="span" onClick={toggleMenu}>&#9776;</span>
</div>

<div>
<ul id='ul'style={menuStyle}>
  <li><Link className="hover:text-[#fe5000] cursor-pointer text-[#fcfcfc]" href='/home'  onClick={closeMenu}>Home</Link></li>
  <li><Link className="hover:text-[#fe5000] cursor-pointer text-[#fcfcfc]" href='/About'  onClick={closeMenu}>About</Link></li>   
  <li><Link className="hover:text-[#fe5000] cursor-pointer text-[#fcfcfc]" href='/features'  onClick={closeMenu}>Features</Link></li>   
  <li> <Link className="hover:text-[#fe5000]  cursor-pointer text-[#fcfcfc]" href='/pricing'  onClick={closeMenu}>Pricing</Link></li>  
  <li><Link className="hover:text-[#fe5000] cursor-pointer text-[#fcfcfc]" href='/signin'  onClick={closeMenu}>Sign In</Link></li>   

  <li> <Link href="/signup">
    <button className="items-center bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
      hover:bg-[#fe5000] rounded text-[#001233] mt-4 md:mt-0 font-bold"  onClick={closeMenu}>Sign Up
      {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>*/}
    </button>
  </Link></li>
   </ul>
   
  </div>
</header>
  );
}

export default Header;