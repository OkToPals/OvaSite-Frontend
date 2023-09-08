'use client';

import Link from 'next/link';
import { City, Country, State } from 'country-state-city';
import { useEffect, useState } from 'react';
import Selector from '@/components/selector';

export default function Location() {
  //! ================================================================================
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);
  //! ================================================================================

  return (
    <>
      <main className='flex flex-1'>
        <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 my-20'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-[#001233]'>
                Create your organization account?
              </h2>
            </div>

            <div className='mt-10'>
              <div>
                <form action='#' method='POST' className='space-y-6'>
                  <div>
                    <div>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium leading-6 text-[#001233]'
                      >
                        {"What's your organization name?"}
                      </label>
                      <div className='mt-2'>
                        <input
                          id='password'
                          name='password'
                          type='password'
                          autoComplete='current-password'
                          required
                          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'
                          placeholder='Organization name'
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='country'
                      className='block text-sm font-medium leading-6 text-[#001233]'
                    >
                      Where is your organization located?
                    </label>
                  </div>
                  <div className='mt-2'>
                    <p className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'>
                      <label
                        class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        for='grid-city'
                      >
                        Country
                      </label>

                      <Selector
                        data={countryData}
                        selected={country}
                        setSelected={setCountry}
                      />
                    </p>
                  </div>

                  {state && (
                    <div className='mt-2'>
                      <p className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'>
                        <label
                          class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                          for='grid-city'
                        >
                          State
                        </label>
                        <Selector
                          data={stateData}
                          selected={state}
                          setSelected={setState}
                        />
                      </p>
                    </div>
                  )}
                  {city && (
                    <div className='mt-2'>
                      <p className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'>
                        <label
                          class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                          for='grid-city'
                        >
                          City
                        </label>
                        <Selector
                          data={cityData}
                          selected={city}
                          setSelected={setCity}
                        />
                      </p>
                    </div>
                  )}
                </form>
              </div>

              <div className='mt-10'>
                <div className='relative'>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='w-full border-t border-gray-200' />
                  </div>
                </div>

                <div className='mt-6 grid grid-cols-2 gap-4'>
                  <Link
                    href='/signup'
                    className='flex w-full items-center justify-center gap-3 rounded-md bg-[#001233] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
                  >
                    <button className='text-[#CAC0B3] bg-[#001233] hover:bg-gray-800 focus:outline-none font-bold'>
                      Back
                    </button>
                  </Link>

                  <Link
                    href='#'
                    className='flex w-full items-center justify-center gap-3 rounded-md bg-[#001233] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
                  >
                    {/* <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        /> */}
                    <button className='text-[#CAC0B3] bg-[#001233 hover:bg-gray-800 focus:outline-none font-bold'>
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            className='absolute inset-0 h-full w-full object-cover rounded-md ps-8'
            src='https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
            alt=''
          />
        </div>
      </main>
    </>
  );
}