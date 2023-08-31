import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
<header className="text-gray-600 body-font fixed w-full z-50">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" 
    style={{ backgroundColor: '#001233', borderRadius: '2px', padding: '20px' }}>


    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
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
  <Link href="/signup">
    <button className="inline-flex items-center bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
      hover:bg-[#fe5000] rounded text-[#001233] mt-4 md:mt-0 font-bold">Sign Up
      
    </button>
  </Link>   
   
  </Link>   
   
  </div>
</header>
  );
}

export default Header;