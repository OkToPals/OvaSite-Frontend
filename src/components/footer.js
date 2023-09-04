import React from 'react';
import Link from 'next/link';
import '../styles/styles.css'

const Footer = () => {

  return (
    <div id='footz'>
    <footer class="bg-[#001233e3]">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2">
        <div
          class="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
        >
          <div class="block text-[#FF595A] lg:hidden">
          <h2 style={{fontSize:20,fontWeight:'bolder',}}>OvaSite</h2>
          </div>
  
          <div class="mt-8 space-y-4 lg:mt-0">
            <span class="hidden h-1 w-10 rounded bg-[#FF595A] lg:block"></span>
  
            <div>
              <h2 class="text-2xl font-medium text-[#f0ebeb]">Get the latest news!</h2>
  
              <p class="mt-4 max-w-lg text-gray-500">
              Subscribe to get the latest news on our products, new features, updates, promo and improvements.
              </p>
            </div>
  
            <form class="mt-6 w-full">
              <label for="UserEmail" class="sr-only"> Email </label>
  
              <div
                class="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="john@rhcp.com"
                  class="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                />
  
                <button
                  class="mt-1 w-full rounded bg-[#FF595A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-[#fe5000] sm:mt-0 sm:w-auto sm:shrink-0"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
  
        <div class="py-8 lg:py-16 lg:pe-16">
          <div class="hidden text-[#FF595A] lg:block">
           <h2 style={{fontSize:20,fontWeight:'bolder',}}>OvaSite</h2>
          </div>
  
          <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
    
  
            <div>
              <p class="font-medium text-[#f5f2f2]">Company</p>
  
              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-[#beb6b6] transition hover:opacity-75">
                    About
                  </a>
                </li>
  
                <li>
                  <a href="#" class="text-[#beb6b6] transition hover:opacity-75">
                    Meet the Team
                  </a>
                </li>
  
                <li>
                  <a href="#" class="text-[#beb6b6] transition hover:opacity-75">
                  Pricing
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <p class="font-medium text-[#f5f2f2]">Helpful Links</p>
  
              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-[#beb6b6] transition hover:opacity-75">
                    Contact
                  </a>
                </li>
  
                <li>
                  <a href="#" class="text-[#beb6b6] transition hover:opacity-75">
                    FAQs
                  </a>
                </li>
  
                <li>
                  <a href="#" class="text-[#beb6b6] transition hover:opacity-75">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="mt-8 border-t border-gray-100 pt-8">
            <ul class="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" class="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>
  
              <li>
                <a href="#" class="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>
  
              <li>
                <a href="#" class="text-gray-500 transition hover:opacity-75">
                  Cookies
                </a>
              </li>
            </ul>
  
            <p class="mt-8 text-xs text-gray-500">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>


  )
}

export default Footer;
