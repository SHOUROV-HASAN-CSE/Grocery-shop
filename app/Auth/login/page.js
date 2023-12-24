import Link from 'next/link';
import React from 'react';

import Image from 'next/image';

const login = () => {
  return (
    <div>
      {/* <br />
            <br /> */}
      <div className='hero min-h-screen bg-base-200 pt-20'>
        <div className=' flex-col lg:flex-row-reverse'>
          <div className='   w-1/2 text-center lg:text-left'>
            <Image src='/login.png' alt='#' fill ></Image>
          </div>
          <div className='card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl'>
            <form className='card-body'>
              <h1 className='text-center text-4xl font-bold text-black'>
                Login Now
              </h1>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-bold'>Email</span>
                </label>
                <input
                  type='text'
                  name='email'
                  placeholder='email'
                  className='input input-bordered text-black'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-bold'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  className='input input-bordered text-black'
                />
                <label className='label'>
                  <Link href={'#'} className='link-hover link label-text-alt text-red-400'>
                    Forgot password?
                  </Link>
                </label>
              </div>
              {/* {
                                loginError && <p className='text-red-500'>{loginError}</p>
                            } */}
              <div className='form-control mt-6'>
                <input className='btn btn-info' type='submit' value='Login' />
              </div>
            </form>

            <div>
              <div className='divider my-0 text-black'>OR</div>
              <h1 className='font-3xl mt-5 text-center font-bold text-black'>
                Sign in with
              </h1>
              <div className='relative h-2 w-2  flex justify-around py-4'>
                {/* <Image className='  ' src='/google.png' fill></Image> */}
              </div>
              <p className='mb-5 text-center text-black'>
                New to our shop{' '}
                <Link className='font-bold text-orange-500' href={'#'}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
