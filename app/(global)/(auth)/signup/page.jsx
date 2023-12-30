'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import AuthBreadcrumbs from '../_login_Components/login-bradcamb';

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='container my-4'>
      <AuthBreadcrumbs path={'login'} />
      <div className='mt-6 bg-white'>
        <div className='mx-auto w-full max-w-md p-4'>
          <div className='mb-4 rounded  px-8 pb-8 pt-6 '>
            <h3 className='mb-6 text-left text-2xl font-semibold'>
              Login Account
            </h3>
            <form
              action='https://www.startech.com.bd/account/register'
              method='post'
              id='form-register'
              encType='multipart/form-data'
              onSubmit={onSubmit}
            >
              <div className='mb-4'>
                <label
                  htmlFor='input-email'
                  className='mb-2 block text-sm font-bold text-gray-700'
                >
                  E-Mail
                </label>
                <input
                  type='email'
                  name='email'
                  value=''
                  placeholder='E-Mail'
                  id='input-email'
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                />
              </div>
              <div className='mb-4'>
                <span className='flex items-center justify-between'>
                  <label
                    htmlFor='input-password'
                    className='mb-2 block text-sm font-bold text-gray-700'
                  >
                    Password
                  </label>
                  <label
                    htmlFor='input-password'
                    className='mb-2 block text-sm font-bold text-red-500'
                  >
                    <Link href='/forget-password'>Forget Password</Link>
                  </label>
                </span>

                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    //   value={password}
                    placeholder='Password'
                    id='input-password'
                    className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  />
                  <button
                    type='button'
                    onClick={handleTogglePassword}
                    className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 focus:outline-none'
                  >
                    {showPassword ? (
                      <FaEyeSlash className='text-xl' />
                    ) : (
                      <FaEye className='text-xl' />
                    )}
                  </button>
                </div>
              </div>

              <br />

              <button type='submit' className='blueButton w-full'>
                Continue
              </button>
              <div className=' my-8 text-center'>
                <div className='divider'>
                  <span className=' text-gray-600'>
                    Already have an account?
                  </span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => router.push('/register')}
                  className='outlinedButton w-full'
                >
                  Create Your Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
