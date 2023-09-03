import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css'

const Content = () => {
  return (
  <section className="text-[#001233] body-font" >
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#001233] font-bold">Features that Transform, Benefits that Propel.</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Experience revolutionary features for gathering, analyzing, and utilizing data. From adaptable forms to real-time insights, OvaSite empowers you. Uncover actionable intelligence, streamline collaboration, and drive progress with your most valuable asset—data. Elevate your success with OvaSite</p></div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#001233] border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 font-bold">Data Collection and Storage</h2>
        <p className="leading-relaxed text-base mb-4">Collection and storage of quantitative and qualitative Data from multiple
         data source while ensuring data security</p>
       
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#001233] border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 font-bold">Real-time Data Entry and Updating</h2>
        <p className="leading-relaxed text-base mb-4">OvaSite facilitates real-time data entry and updating to ensure 
        the most current information is available for analysis</p>
       
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#001233] border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 font-bold">Cost-Effective Analysis and Feedback</h2>
        <p className="leading-relaxed text-base mb-4">After collecting your data, get instant feedback from your analyzed data for informed decision making.</p>
       
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#001233] border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 font-bold">Works Offline</h2>
        <p className="leading-relaxed text-base mb-4">You can collect data even without an internet connection.
         Data collected offline, is automatically uploaded once your device is connected to the internet.</p>
       
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-[#001233] border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg font-bold">Get Started</button>
  </div>
</section>
  )
}

export default Content;

Content.PropTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText1: PropTypes.string.isRequired,
    buttonText2: PropTypes.string.isRequired,

};
 
