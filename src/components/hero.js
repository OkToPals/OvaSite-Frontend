import React from 'react';
import '../styles/styles.css'
import PropTypes from 'prop-types';


export const Hero = () => {
  return (
    <div>
   <div id='wider'>
    <video autoPlay loop muted id='video'>
      <source src='/video.mp4' />
    </video>
    <div id='upper'>
  <h1 style={{fontWeight:'bolder',fontSize:35,}}>Discover OverSite:</h1>  
<h2 style={{fontWeight:'bolder',fontSize:25,}}>Your all-in-one platform <br/>for data collection,monitoring and evaluation.</h2><br/>
<p>OvaSite simplifies data collection, analysis and action. With a user-friendly interface and robust tools, <br/>it converts data into actionable insights, enabling informed decisions that fuel progress. <br/>Step into a future of efficiency and clarity with OvaSite – where monitoring embraces innovation.
</p>    
<br/>
<div className="flex items-center" >
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FF595A] hover:text-[#141414] focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-[#ffffff]  transition-colors duration-200 hover:text-[#fe5000]"
            >
              Learn more
            </a>
          </div>
</div>
   </div>

   <div id='smaller'>
   <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
         <br/>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#182642] sm:text-4xl sm:leading-none">
          Discover OverSite:
            <br className="hidden md:block" />
            Your all-in-one platform
            <span className="inline-block text-deep-purple-accent-400">
            for data collection,monitoring and evaluation.
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-[#182642] md:text-lg">
          OvaSite simplifies data collection, analysis and action. With a user-friendly interface and robust tools,
it converts data into actionable insights, enabling informed decisions that fuel progress.
Step into a future of efficiency and clarity with OvaSite – where monitoring embraces innovation.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FF595A] hover:text-[#141414] focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-[#182642]  transition-colors duration-200 hover:text-[#fe5000]"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>



   </div>
   </div>
  );
};

export default Hero;