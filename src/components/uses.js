import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';



const Uses = () => {
  return (
    <section className="text-[#001233] body-font" id='uses'>
  <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-[#001233]">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#001233] font-bold">Empowering Change Across Sectors</h1>
      <p className="leading-relaxed text-base">OverSite empowers various sectors—Government, NGOs, researchers, individuals, students, and
       customer-centric organizations—enhancing transparency, streamlining missions, and fostering growth through valuable data insights. Adaptability underscores its commitment to driving positive change</p>
      <Link href='/about' className="text-[#001233] inline-flex items-center mt-4 font-bold">Learn More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
      <h2 className="title-font font-semibold text-[#001233] tracking-wider text-xl mb-3 font-bold">Used By</h2>
      <nav className="flex flex-wrap list-none -mb-1">
       <li className="lg:w-1/3 mb-1 w-1/2">
          <p className="text-[#001233] hover:text-[#001233]">The Government</p>
        </li><br/><br/>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <p className="text-[#001233]  hover:text-gray-800">Students</p>
        </li><br/>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <p className="text-[#001233] hover:text-gray-800"></p>
        </li><br/>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <p className="text-[#001233] hover:text-gray-800">NGOs</p>
        </li><br/>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <p className="text-[#001233]  hover:text-gray-800">Research institutions and individual researchers</p>
        </li><br/>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <p className="text-[#001233] hover:text-gray-800"></p>
        </li><br/>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <p className="text-[#001233] hover:text-gray-800">Customer-centric Organizations</p>
        </li><br/>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <p className="text-[#001233] hover:text-gray-800"></p>
        </li>
      </nav>
    </div>
  </div>
</section>
  )
}

export default Uses;

// Uses.PropTypes = {
//     imageSrc: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     buttonText1: PropTypes.string.isRequired,
//     buttonText2: PropTypes.string.isRequired,

// };
 

