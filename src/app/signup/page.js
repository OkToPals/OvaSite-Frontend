import React from 'react';
import Header from '../../components/header'

export default function SignUp() {
  return (
    <>
    {/* <Header/> */}
    <section className="text-gray-600 body-font pt-16">
      <div className="container px-5 py-24 mx-auto ">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mx-auto text-center">
  <h1 className="title-font font-medium text-3xl text-[#001233] mb-4">BEGIN YOUR DATA JOURNEY WITH OVASITE</h1>
  <p className="leading-relaxed text-[#fe5000] mb-20">
    Fill the form below to create an account with us
  </p>
</div>
<div className="flex justify-center">
  <div className="lg:w-2/6 md:w-1/2 bg-[#f0d3b2] rounded-lg p-8 w-full mt-10 md:mt-0 mx-auto">
    <h2 className="text-[#001233] text-lg font-medium title-font mb-5 text-center">Create An Account</h2>

          <div className="relative mb-4 animate__animated animate__fadeIn">
            <label htmlFor="username" className="leading-7 text-sm text-[#001233]">Username</label>
            <input type="text" id="username" name="username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out" />
          </div>

          <div className="relative mb-4 animate__animated animate__fadeIn">
            <label htmlFor="full-name" className="leading-7 text-sm text-[#001233]">Full Name</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div className="relative mb-4 animate__animated animate__fadeIn">
            <label htmlFor="email" className="leading-7 text-sm text-[#001233]">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div className="relative mb-4 animate__animated animate__fadeIn">
            <label htmlFor="password" className="leading-7 text-sm text-[#001233]">Password</label>
            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div className="relative mb-4 animate__animated animate__fadeIn">
            <label htmlFor="confirm-password" className="leading-7 text-sm text-[#001233]">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <button className="text-white bg-[#001233] border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg">Create Account</button>

          <p className="text-gray-600 mt-3 text-center">Already have an account? <a href="/signin" className="text-[#001233] underline">Sign in.</a></p>
        </div>
      </div>
      </div>
    </section>
  </>
  );
}
