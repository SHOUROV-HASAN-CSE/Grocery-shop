'use client';
import Link from 'next/link';
import AuthBreadcrumbs from '../_login_Components/login-bradcamb';

const RegisterPage = () => {
  const onSubmit = (event) => {
    event.preventDefault();

    // Add your form submission logic here
  };
  return (
    <div className='container my-4'>
      <AuthBreadcrumbs path={'register'} />
      <div className='mt-6 bg-white'>
        <div className='mx-auto w-full max-w-md p-4'>
          <div className='mb-4 rounded px-8 pb-8 pt-6 '>
            <h3 className='mb-6 text-left text-2xl font-semibold'>
              Register Account
            </h3>
            <form
              action='https://www.startech.com.bd/account/register'
              method='post'
              id='form-register'
              encType='multipart/form-data'
              onSubmit={onSubmit}
            >
              <div className=' flex gap-4'>
                <div className='mb-4'>
                  <label
                    htmlFor='input-firstname'
                    className='mb-2 block text-sm font-bold text-gray-700'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    name='firstname'
                    value=''
                    placeholder='First Name'
                    id='input-firstname'
                    className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='input-lastname'
                    className='mb-2 block text-sm font-bold text-gray-700'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lastname'
                    value=''
                    placeholder='Last Name'
                    id='input-lastname'
                    className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  />
                </div>
              </div>

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
                <label
                  htmlFor='input-telephone'
                  className='mb-2 block text-sm font-bold text-gray-700'
                >
                  Mobile Number
                </label>
                <input
                  type='tel'
                  name='mobile'
                  value=''
                  placeholder='Mobile Number'
                  id='input-telephone'
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='input-password'
                  className='mb-2 block text-sm font-bold text-gray-700'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  value=''
                  placeholder='password'
                  id='input-password'
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='input-confirm-password'
                  className='mb-2 block text-sm font-bold text-gray-700'
                >
                  Confirm Password
                </label>
                <input
                  type='password'
                  name='confirm-password'
                  value=''
                  placeholder='confirmed password'
                  id='input-confirm-password'
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                />
              </div>

              <br />

              <button type='submit' className='blueButton w-full'>
                Continue
              </button>
              <div className=' divider my-8 text-center'>
                <span className=' text-gray-600'>Already have an account?</span>
              </div>
              <p className='text-center'>
                If you already have an account with us, <br />
                please login at the
                <Link
                  href='/login'
                  className='ms-1 font-semibold text-blue-500'
                >
                  Login
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
