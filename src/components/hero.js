import React from 'react';
import PropTypes from 'prop-types';
// import Headerimage from '@components/headerimage.jpg'

const Hero = () => {
  return (
<section className= "text-gray-600 body-font"  >

<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium" style={{ color: '#001233' }}>Discover Oversite: 
        <br className="hidden lg:inline-block" /> Your all-in-one platform for data collection,monitoring,and evaluation. 
      </h1>
      <p className="mb-8 leading-relaxed">Oversite simplifies data collection, analysis, and action. With a user-friendly interface and robust tools,
       it converts data into actionable insights, 
       enabling informed decisions that fuel progress. Step into a future of efficiency and clarity with Oversite – where monitoring embraces innovation</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get started</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn more</button>
      </div>
    </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border-[#001233] border width-7px">
        <img className="object-cover object-center rounded " alt="hero" src="/img.png" />
      </div>
  </div>
</section>
  )
}
export default Hero;

// Hero.propTypes = {
//     imageSrc: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     buttonText1: PropTypes.string.isRequired,
//     buttonText2: PropTypes.string.isRequired,
// };
