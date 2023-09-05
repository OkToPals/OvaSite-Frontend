"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faUser, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const DashboardHeader = () => {

  const [toggle_menu, set_toggle_menu] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mobileViewStyle = `flex flex-col top-20 transition-all duration-500 ease-linear md:h-12 h-[100vh] ${!toggle_menu ? ' -left-[70%]' : 'left-0 max-w-[500px] w-[70%] bg-[#FF595A] text-[#001233] py-8 px-4'} `

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  
  }

  const toggleMenu = () => {
      set_toggle_menu(!toggle_menu)
  }
  return (
    <header className="text-gray-600 body-font fixed w-full z-50 h-20">
      <div className="container mx-auto bg-[#001233] flex px-4 py-4 flex-row items-center justify-between" 
      >

          {/* logo */}
        <a className="flex title-font text-[14px] md:font-medium items-center text-gray-900" role='logo'>
          <span className="text-[#FF595A] text-2xl font-bold cursor-pointer">dashboard</span>
        </a>
       
        {/* navigation links */}
        <nav className ={`flex flex-col flex-wrap text-base 
         text-[#CAC0B3] font-bold absolute md:static md:ml-auto md:flex-row md:justify-center md:items-center
        ${mobileViewStyle}
        `}
        >
          <Link className="mb-4 md:mb-0 mr-5 hover:text-white cursor-pointer" href='/home' onClick={toggleMenu}>Home</Link>
          <Link className="mb-4 md:mb-0 mr-5 hover:text-white cursor-pointer" href='/dashboard/projects' onClick={toggleMenu}>Projects</Link>
          <Link className="mb-4 md:mb-0 mr-5 hover:text-white cursor-pointer" href='/dashboard/team' onClick={toggleMenu}>Team</Link>
          <Link className="mb-4 md:mb-0 mr-5 hover:text-white cursor-pointer" href='/dashboard/subscription' onClick={toggleMenu}>Subscription</Link>
          <Link className="mb-4 md:mb-0 mr-5 hover:text-white cursor-pointer" href='/dashboard/audit' onClick={toggleMenu}>Audit</Link>
          <Link className="mb-4 md:mb-0 mr-5 hover:text-white cursor-pointer" href='/dashboard/profile' onClick={toggleMenu}>Profile</Link>
        </nav>

        <div 
          className={`w-[30%] h-[100vh] absolute top-20 ${!toggle_menu ? ' -right-[70%]' : 'right-0'} md:hidden`}
          onClick={toggleMenu}  
        >
            
          </div>

        {/* signout and menu icon */}
        <div className='flex flex-row justify-between items-center'>

          {/* profile pic and dropdown */}
          <div role="region" aria-label="User Profile" className='flex flex-row items-center mr-2'>
            
            {/* profile pics */}
            <div role="img" aria-label="Profile picture of Jane Doe" 
              className='flex flex-row justify-center items-center w-12 h-12  
                rounded-full bg-[#cac0b3] mr-1'
              >
              <FontAwesomeIcon icon={faUser} size='lg'/>
               {/* <img src="" alt="Profile picture of Jane Doe"/> */}
            </div>

            {/* dropdown */}
            <div className="relative">
              <button
                className="flex flex-row justify-center items-center w-3 h-3 rounded-full focus:outline-none"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                {isDropdownOpen ? <FontAwesomeIcon icon={faCaretUp} color='#CAC0B3'/> : <FontAwesomeIcon icon={faCaretDown} color='#CAC0B3'/>}
              </button>

              <div
                className={`absolute -z-50 right-0 mt-9 bg-white shadow-md py-2 px-4 rounded transition-all duration-300 ease-in
                ${isDropdownOpen ? 'opacity-100 z-30' : 'opacity-0'}
                `}
                role="menu"
                aria-hidden={!isDropdownOpen}
              >
                {/* Dropdown menu items */}
                <li className="block py-2 w-full">User name</li>
                <li className="block py-2">Item 2</li>
                <button className="w-32 flex flex-row items-center bg-[#FF595A] border-0 py-2 px-4 focus:outline-none 
                  hover:bg-[#fe5000] rounded text-[#001233] mt-4 md:mt-0 font-bold">Sign Out
                </button>    
              </div>
            </div>
            
          </div>
          
          {/* menu icon */}
          <button className='md:hidden' onClick={toggleMenu}>{toggle_menu? <FontAwesomeIcon icon={faXmark} color='#CAC0B3'/> : <FontAwesomeIcon icon={faBars} color='#CAC0B3'/>}</button> 
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;