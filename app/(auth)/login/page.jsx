import Link from 'next/link';
import React from 'react';

import Image from 'next/image';

const LoginPage = () => {
  return (
    <div>
      <div class='relative bg-white lg:py-10'>
        <div
          class='mb-0 ml-auto mr-auto mt-0 flex max-w-7xl flex-col items-center justify-between pb-0 pl-10 pr-10 pt-0
      lg:flex-row xl:px-5'
        >
          <div class='flex w-full flex-col items-center pb-20 pl-10 pr-10 pt-5 lg:flex-row lg:pt-20'>
            <div class=' relative w-full max-w-md bg-cover lg:w-7/12 lg:max-w-2xl'>
              <div class='relative flex h-full w-full flex-col items-center justify-center lg:pr-10'>
                <img
                  src='https://www.go.ooo/img/bg-img/Login.jpg'
                  class='btn-'
                />
              </div>
            </div>
            <div class='relative z-10 mb-0 ml-0 mr-0 mt-20 w-full max-w-2xl lg:mt-0 lg:w-5/12'>
              <div
                class='relative z-10 flex flex-col items-start justify-start rounded-xl bg-white pb-10 pl-10 pr-10
            pt-10 shadow-2xl'
              >
                <p class='w-full font-serif text-4xl  font-medium leading-snug'>
                  Account login
                </p>
                <div class='relative mb-0 ml-0 mr-0 mt-6 w-full space-y-8'>
                  <div class='relative'>
                    <p class='absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600'>
                      Email
                    </p>
                    <input
                      placeholder='123@ex.com'
                      type='text'
                      class='mb-0 ml-0 mr-0
                   mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400
                  focus:border-b-cyan-900 focus:outline-none'
                    />
                  </div>
                  <div class='relative'>
                    <p
                      class='absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium
                  text-gray-600'
                    >
                      Password
                    </p>
                    <input
                      placeholder='Password'
                      type='password'
                      class='mb-0 ml-0 mr-0
                  mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400
                  focus:border-b-cyan-900 focus:outline-none'
                    />
                  </div>
                  <div class='text-sm'>
                    <a href='#' class='text-indigo-500 hover:text-indigo-600'>
                      Forgot your password?
                    </a>
                  </div>
                  <div class='relative'>
                    <a
                      class='ease inline-block w-full rounded-lg bg-indigo-500 pb-2 pl-5 pr-5 pt-2 text-center text-base
                  font-medium text-white transition duration-200 hover:bg-indigo-600'
                    >
                      Submit
                    </a>
                  </div>

                  <div class='inline-flex w-full items-center justify-center'>
                    <hr class='white my-8 h-px w-64 border-0 bg-neutral-200' />
                    <span class='text-black-200 absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium'>
                      Do not have account?
                    </span>
                  </div>

                  <div class='relative'>
                    <Link
                      href={'/register'}
                      class=' ease btn btn-outline btn-primary inline-block w-full rounded-lg pb-3 pl-5 pr-5 pt-3 text-center text-base  
                  font-medium text-indigo-500 transition duration-200 hover:bg-indigo-600 hover:text-white'
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </div>
              <svg
                viewbox='0 0 91 91'
                class='absolute left-0 top-0 z-0 -ml-12 -mt-12 h-32 w-32 fill-current
            text-yellow-300'
              >
                <g stroke='none' strokewidth='1' fillrule='evenodd'>
                  <g fillrule='nonzero'>
                    <g>
                      <g>
                        <circle cx='3.261' cy='3.445' r='2.72' />
                        <circle cx='15.296' cy='3.445' r='2.719' />
                        <circle cx='27.333' cy='3.445' r='2.72' />
                        <circle cx='39.369' cy='3.445' r='2.72' />
                        <circle cx='51.405' cy='3.445' r='2.72' />
                        <circle cx='63.441' cy='3.445' r='2.72' />
                        <circle cx='75.479' cy='3.445' r='2.72' />
                        <circle cx='87.514' cy='3.445' r='2.719' />
                      </g>
                      <g transform='translate(0 12)'>
                        <circle cx='3.261' cy='3.525' r='2.72' />
                        <circle cx='15.296' cy='3.525' r='2.719' />
                        <circle cx='27.333' cy='3.525' r='2.72' />
                        <circle cx='39.369' cy='3.525' r='2.72' />
                        <circle cx='51.405' cy='3.525' r='2.72' />
                        <circle cx='63.441' cy='3.525' r='2.72' />
                        <circle cx='75.479' cy='3.525' r='2.72' />
                        <circle cx='87.514' cy='3.525' r='2.719' />
                      </g>
                      <g transform='translate(0 24)'>
                        <circle cx='3.261' cy='3.605' r='2.72' />
                        <circle cx='15.296' cy='3.605' r='2.719' />
                        <circle cx='27.333' cy='3.605' r='2.72' />
                        <circle cx='39.369' cy='3.605' r='2.72' />
                        <circle cx='51.405' cy='3.605' r='2.72' />
                        <circle cx='63.441' cy='3.605' r='2.72' />
                        <circle cx='75.479' cy='3.605' r='2.72' />
                        <circle cx='87.514' cy='3.605' r='2.719' />
                      </g>
                      <g transform='translate(0 36)'>
                        <circle cx='3.261' cy='3.686' r='2.72' />
                        <circle cx='15.296' cy='3.686' r='2.719' />
                        <circle cx='27.333' cy='3.686' r='2.72' />
                        <circle cx='39.369' cy='3.686' r='2.72' />
                        <circle cx='51.405' cy='3.686' r='2.72' />
                        <circle cx='63.441' cy='3.686' r='2.72' />
                        <circle cx='75.479' cy='3.686' r='2.72' />
                        <circle cx='87.514' cy='3.686' r='2.719' />
                      </g>
                      <g transform='translate(0 49)'>
                        <circle cx='3.261' cy='2.767' r='2.72' />
                        <circle cx='15.296' cy='2.767' r='2.719' />
                        <circle cx='27.333' cy='2.767' r='2.72' />
                        <circle cx='39.369' cy='2.767' r='2.72' />
                        <circle cx='51.405' cy='2.767' r='2.72' />
                        <circle cx='63.441' cy='2.767' r='2.72' />
                        <circle cx='75.479' cy='2.767' r='2.72' />
                        <circle cx='87.514' cy='2.767' r='2.719' />
                      </g>
                      <g transform='translate(0 61)'>
                        <circle cx='3.261' cy='2.846' r='2.72' />
                        <circle cx='15.296' cy='2.846' r='2.719' />
                        <circle cx='27.333' cy='2.846' r='2.72' />
                        <circle cx='39.369' cy='2.846' r='2.72' />
                        <circle cx='51.405' cy='2.846' r='2.72' />
                        <circle cx='63.441' cy='2.846' r='2.72' />
                        <circle cx='75.479' cy='2.846' r='2.72' />
                        <circle cx='87.514' cy='2.846' r='2.719' />
                      </g>
                      <g transform='translate(0 73)'>
                        <circle cx='3.261' cy='2.926' r='2.72' />
                        <circle cx='15.296' cy='2.926' r='2.719' />
                        <circle cx='27.333' cy='2.926' r='2.72' />
                        <circle cx='39.369' cy='2.926' r='2.72' />
                        <circle cx='51.405' cy='2.926' r='2.72' />
                        <circle cx='63.441' cy='2.926' r='2.72' />
                        <circle cx='75.479' cy='2.926' r='2.72' />
                        <circle cx='87.514' cy='2.926' r='2.719' />
                      </g>
                      <g transform='translate(0 85)'>
                        <circle cx='3.261' cy='3.006' r='2.72' />
                        <circle cx='15.296' cy='3.006' r='2.719' />
                        <circle cx='27.333' cy='3.006' r='2.72' />
                        <circle cx='39.369' cy='3.006' r='2.72' />
                        <circle cx='51.405' cy='3.006' r='2.72' />
                        <circle cx='63.441' cy='3.006' r='2.72' />
                        <circle cx='75.479' cy='3.006' r='2.72' />
                        <circle cx='87.514' cy='3.006' r='2.719' />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                viewbox='0 0 91 91'
                class='absolute bottom-0 right-0 z-0 -mb-12 -mr-12 h-32 w-32 fill-current
            text-indigo-500'
              >
                <g stroke='none' strokewidth='1' fillrule='evenodd'>
                  <g fillrule='nonzero'>
                    <g>
                      <g>
                        <circle cx='3.261' cy='3.445' r='2.72' />
                        <circle cx='15.296' cy='3.445' r='2.719' />
                        <circle cx='27.333' cy='3.445' r='2.72' />
                        <circle cx='39.369' cy='3.445' r='2.72' />
                        <circle cx='51.405' cy='3.445' r='2.72' />
                        <circle cx='63.441' cy='3.445' r='2.72' />
                        <circle cx='75.479' cy='3.445' r='2.72' />
                        <circle cx='87.514' cy='3.445' r='2.719' />
                      </g>
                      <g transform='translate(0 12)'>
                        <circle cx='3.261' cy='3.525' r='2.72' />
                        <circle cx='15.296' cy='3.525' r='2.719' />
                        <circle cx='27.333' cy='3.525' r='2.72' />
                        <circle cx='39.369' cy='3.525' r='2.72' />
                        <circle cx='51.405' cy='3.525' r='2.72' />
                        <circle cx='63.441' cy='3.525' r='2.72' />
                        <circle cx='75.479' cy='3.525' r='2.72' />
                        <circle cx='87.514' cy='3.525' r='2.719' />
                      </g>
                      <g transform='translate(0 24)'>
                        <circle cx='3.261' cy='3.605' r='2.72' />
                        <circle cx='15.296' cy='3.605' r='2.719' />
                        <circle cx='27.333' cy='3.605' r='2.72' />
                        <circle cx='39.369' cy='3.605' r='2.72' />
                        <circle cx='51.405' cy='3.605' r='2.72' />
                        <circle cx='63.441' cy='3.605' r='2.72' />
                        <circle cx='75.479' cy='3.605' r='2.72' />
                        <circle cx='87.514' cy='3.605' r='2.719' />
                      </g>
                      <g transform='translate(0 36)'>
                        <circle cx='3.261' cy='3.686' r='2.72' />
                        <circle cx='15.296' cy='3.686' r='2.719' />
                        <circle cx='27.333' cy='3.686' r='2.72' />
                        <circle cx='39.369' cy='3.686' r='2.72' />
                        <circle cx='51.405' cy='3.686' r='2.72' />
                        <circle cx='63.441' cy='3.686' r='2.72' />
                        <circle cx='75.479' cy='3.686' r='2.72' />
                        <circle cx='87.514' cy='3.686' r='2.719' />
                      </g>
                      <g transform='translate(0 49)'>
                        <circle cx='3.261' cy='2.767' r='2.72' />
                        <circle cx='15.296' cy='2.767' r='2.719' />
                        <circle cx='27.333' cy='2.767' r='2.72' />
                        <circle cx='39.369' cy='2.767' r='2.72' />
                        <circle cx='51.405' cy='2.767' r='2.72' />
                        <circle cx='63.441' cy='2.767' r='2.72' />
                        <circle cx='75.479' cy='2.767' r='2.72' />
                        <circle cx='87.514' cy='2.767' r='2.719' />
                      </g>
                      <g transform='translate(0 61)'>
                        <circle cx='3.261' cy='2.846' r='2.72' />
                        <circle cx='15.296' cy='2.846' r='2.719' />
                        <circle cx='27.333' cy='2.846' r='2.72' />
                        <circle cx='39.369' cy='2.846' r='2.72' />
                        <circle cx='51.405' cy='2.846' r='2.72' />
                        <circle cx='63.441' cy='2.846' r='2.72' />
                        <circle cx='75.479' cy='2.846' r='2.72' />
                        <circle cx='87.514' cy='2.846' r='2.719' />
                      </g>
                      <g transform='translate(0 73)'>
                        <circle cx='3.261' cy='2.926' r='2.72' />
                        <circle cx='15.296' cy='2.926' r='2.719' />
                        <circle cx='27.333' cy='2.926' r='2.72' />
                        <circle cx='39.369' cy='2.926' r='2.72' />
                        <circle cx='51.405' cy='2.926' r='2.72' />
                        <circle cx='63.441' cy='2.926' r='2.72' />
                        <circle cx='75.479' cy='2.926' r='2.72' />
                        <circle cx='87.514' cy='2.926' r='2.719' />
                      </g>
                      <g transform='translate(0 85)'>
                        <circle cx='3.261' cy='3.006' r='2.72' />
                        <circle cx='15.296' cy='3.006' r='2.719' />
                        <circle cx='27.333' cy='3.006' r='2.72' />
                        <circle cx='39.369' cy='3.006' r='2.72' />
                        <circle cx='51.405' cy='3.006' r='2.72' />
                        <circle cx='63.441' cy='3.006' r='2.72' />
                        <circle cx='75.479' cy='3.006' r='2.72' />
                        <circle cx='87.514' cy='3.006' r='2.719' />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
