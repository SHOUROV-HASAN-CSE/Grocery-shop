const registration = () => {
  return (
    <div className="    flex   h-screen items-center justify-center bg-[url('https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=740&t=st=1703600703~exp=1703601303~hmac=70c29866dc8c4df6d181cb14362a69bb299b9c9dff54512ef72567c127dde05e')] ">
      <div className='w-full max-w-sm rounded-lg bg-white p-8 shadow-lg '>
        <div className='mb-6 flex justify-center'>
          <span className='inline-block rounded-full bg-gray-200 p-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4'
              />
            </svg>
          </span>
        </div>
        <h2 className='mb-4 text-center text-2xl font-semibold'>
          Create a new account
        </h2>
        <p className='mb-6 text-center text-gray-600'>
          Enter your details to register.
        </p>
        <form>
          <div className='relative mt-4'>
            <p className='absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600'>
              Name
            </p>
            <input
              placeholder='Name'
              type='text'
              className='mb-0 ml-0 mr-0
                   mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400
                  focus:border-b-cyan-900 focus:outline-none'
            />
          </div>
          <div className='relative mt-4'>
            <p className='absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600'>
              Email
            </p>
            <input
              placeholder='123@ex.com'
              type='email'
              className='mb-0 ml-0 mr-0
                   mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400
                  focus:border-b-cyan-900 focus:outline-none'
            />
          </div>
          <div className='relative mt-5'>
            <p className='absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600'>
              Password
            </p>
            <input
              placeholder='Password'
              type='text'
              className='mb-0 ml-0 mr-0
                   mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400
                  focus:border-b-cyan-900 focus:outline-none'
            />
          </div>

          <button
            type='submit'
            className=' mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          >
            Register
          </button>
          <p className='mt-4 text-center text-xs text-gray-600'>
            By clicking Register, you agree to accept Grocery Shop
            <a href='#' className='text-blue-500 hover:underline'>
              Terms and Conditions
            </a>
            .
          </p>

          <div className='inline-flex w-full items-center justify-center'>
            <hr className='white my-8 h-px w-64 border-0 bg-neutral-200' />
            <span className='text-black-200 absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium'>
              Have you an account?
            </span>
          </div>

          <div className='relative'>
            <a
              className=' ease btn btn-outline btn-primary inline-block w-full rounded-lg pb-2 pl-5 pr-5 pt-2 text-center text-base  
                  font-medium text-indigo-500 transition duration-200 hover:bg-indigo-600'
            >
              Login your account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default registration;
