import React from 'react';
import Link from 'next/link';


export default function Example() {
  return (
    <>

      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              {/* <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              /> */}
              <br/>
              <h1 className="title-font font-medium text-3xl text-[#001233] mb-4 mt-10">Begin Your Data Journey With Ovasite</h1>
            </div>

            <div className="mt-10">
              <div>
                <form action="email" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#001233]">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Email address
                    </span> 
                      
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com"
  
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#001233]">

                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Password
                    </span>  
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="{showPassword ? 'text' : 'password'}"
                        autoComplete="current-password"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password"
  
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#001233] px-3 py-1.5 text-sm font-bold leading-6 text-[#CAC0B3] shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001233]"
                    >
                      Sign Up
                    </button>
                    <p className="text-center mt-6 text-sm leading-6 text-[#001233]">
                      By signing up, you are indicating that you have read and agreed to our 
                      <Link href="/terms" className="font-bold text-teal-500 hover:text-[#001233]">
                        <span bg-white px-6 text-gray-900> Terms and Conditions.</span>
                      </Link>
                    </p>                  
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4">

                <p className="text-[#001233] text-sm mt-3 text-center">
                  Already have an account?{' '} 
                <Link href="/signin" className="font-bold text-teal-500 hover:text-[#001233]">
                  Sign In.
                </Link>
                </p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover rounded-md ps-8"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
