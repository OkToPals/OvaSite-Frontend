import React from 'react';
import '../styles/styles.css'



export const Steps = () => {
  return (
<section className="p-6 bg-[#ffffff] dark:text-gray-100">
  <div className="container mx-auto">
    <span className="block mb-2 text-3xl font-bold text-center dark:text-[#001233]">How it works</span>
    <h2 className="text-2xl text-center dark:text-[#001233]">Our application follows four steps to ensure efficient and effective data collection, monitoring, and evaluation.</h2>
    <div className="flex flex-wrap justify-between my-16">
      <div className="flex flex-col p-4 space-y-4 rounded-md bg-white shadow-custom" style={{ width: 'calc(25% - 1rem)' }}>
        <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">1</div>
        <p className="text-[#001233]">
          <b className="text-2xl font-semibold">Collect</b> <br />Using our simple and intuitive interface, gather data from various resources in one centralized platform.
        </p>
      </div>
      <div className="flex flex-col p-4 space-y-4 rounded-md bg-white shadow-custom" style={{ width: 'calc(25% - 1rem)' }}>
        <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">2</div>
        <p className="text-[#001233]">
          <b className="text-2xl font-semibold">Monitor</b> <br />Keep track of the data collection process and monitor progress in real-time with our robust tracking features.
        </p>
      </div>
      <div className="flex flex-col p-4 space-y-4 rounded-md bg-white shadow-custom" style={{ width: 'calc(25% - 1rem)' }}>
        <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">3</div>
        <p className="text-[#001233]">
          <b className="text-2xl font-semibold">Evaluate</b><br />Analyze data with our advanced evaluation tools to extract meaningful insights and inform decision-making.
        </p>
      </div>
      <div className="flex flex-col p-4 space-y-4 rounded-md bg-white shadow-custom" style={{ width: 'calc(25% - 1rem)' }}>
        <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">4</div>
        <p className="text-[#001233]">
          <b className="text-2xl font-semibold">Collaborate</b><br />Work together seamlessly on projects, share insights, and arrive at smart solutions with our effective team collaboration features.
        </p>
      </div>
    </div>
  </div>
</section>


    );
};

export default Steps;

