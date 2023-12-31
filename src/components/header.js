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
  const linkStyles = {
    display: 'flex',
    fontWeight: 500,
    alignItems: 'center',
    color: '#333',
    marginTop: '14px',
    justifyContent: 'center',
  };
  return (
<header className=" body-font fixed w-full z-50">
  <div  className="custom-container">
<div class="text-[#1F1F1F] body-font" style={{backgroundColor:'white'}}>
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-bold items-center mb-4 md:mb-0 " style={{color:'rgb(256, 89, 90)',marginLeft:'50px'}}>
      <img src='/Logo.jpg' width={60} />
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-4">
      <Link class="mr-5 hover:text-gray-900" href='/home'>Home</Link>
      <Link class="mr-5 hover:text-gray-900" href='/About'>About</Link>
      <Link class="mr-5 hover:text-gray-900" href='/features'>Features</Link>
      <Link class="mr-5 hover:text-gray-900" href='/pricing'>Pricing</Link>
    </nav>
    <Link href="/signin"> <button class="inline-flex items-centerborder-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"  style={{marginRight:'10px'}}>Sign in
     </button></Link>
   
     <Link href="/signup"> <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" style={{backgroundColor:'rgb(255, 89, 90)',color:'white'}}>Get Started
    </button></Link>
  </div>
</div></div>

  <div id='header'>
 <div style={linkStyles} id='divs'>
 <span className=" text-[#FF595A] text-2xl font-bold cursor-pointer" style={{marginRight:'70px'}}>OvaSite</span>
 
  <div><Link className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]" href='/signin'  onClick={closeMenu}>Sign In</Link>
</div>
<div><Link href="/signup">
  <button style={{marginRight:'30px'}} className="items-center bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
    hover:bg-[#fe5000] rounded text-[#001233]  font-bold"  onClick={closeMenu}>Get Started
    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>*/}
  </button>
</Link></div>
</div> <span id="span" onClick={toggleMenu}>&#9776;</span>
  
</div>

<div>
<ul id='ul'style={menuStyle}>
  <li><Link className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]" href='/home'  onClick={closeMenu}>Home</Link></li>
  <li><Link className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]" href='/About'  onClick={closeMenu}>About</Link></li>   
  <li><Link className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]" href='/features'  onClick={closeMenu}>Features</Link></li>   
  <li> <Link className="hover:text-[#fe5000]  cursor-pointer text-[#1F1F1F]" href='/pricing'  onClick={closeMenu}>Pricing</Link></li>  
 
   </ul>
   
  </div>
</header>
  );
}

export default Header;