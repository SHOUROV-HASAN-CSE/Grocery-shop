
const LoadingSection = () => {
  return (
    <section className='relative grid h-screen w-screen place-items-center gap-4 bg-white'>
      <div className='delay-5s absolute h-48 w-48 animate-ping rounded-full bg-blue-500 shadow-xl'></div>

      <div className='absolute h-32 w-32 animate-ping rounded-full bg-blue-400 shadow-xl'></div>

      <div className='absolute h-24 w-24 animate-pulse rounded-full bg-white shadow-xl'></div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-16 w-16 text-blue-900 mix-blend-overlay filter'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z'
        />
      </svg>
    </section>
  );
};

export default LoadingSection;
