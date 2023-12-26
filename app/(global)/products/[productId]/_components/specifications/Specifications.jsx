const Specifications = ({ Specifications }) => {
  return (
    <div className='flex flex-col gap-5 p-5 shadow-md' id='specification'>
      <h4 className='text-xl font-semibold'>Specification</h4>

      <div>
        <h3 className='bg-slate-200 p-2 px-3 font-semibold text-[#5049BB]'>
          Display
        </h3>

        <div className='flex flex-col gap-2 border-b px-3 py-2 text-sm md:flex-row md:py-3'>
          <div className='w-full text-gray-500 md:w-1/5'>Chipset</div>
          <div className='w-full md:w-4/5 '>A15 Bionic chip</div>
        </div>
        <div className='flex flex-col gap-1 border-b  px-3 py-2 text-sm md:flex-row md:py-3'>
          <div className='w-full text-gray-500 md:w-1/5'>CPU Type</div>
          <div className='w-full md:w-4/5'>
            6-core CPU with 2 performance and 4 efficiency cores
          </div>
        </div>
        <div className='flex flex-col gap-1 border-b px-3 py-2 text-sm md:flex-row md:py-3'>
          <div className='w-full text-gray-500 md:w-1/5'>GPU</div>
          <div className='w-full md:w-4/5'>4‑core GPU</div>
        </div>
      </div>

      <div>
        <h3 className='bg-slate-200 p-2 px-3 font-semibold text-[#5049BB]'>
          Processor
        </h3>
        <div className='flex flex-col gap-2 border-b px-3 py-2 text-sm md:flex-row md:py-3'>
          <div className='w-full text-gray-500 md:w-1/5'>Chipset</div>
          <div className='w-full md:w-4/5 '>A15 Bionic chip</div>
        </div>
        <div className='flex flex-col gap-1 border-b px-3 py-2 text-sm md:flex-row md:py-3'>
          <div className='w-full text-gray-500 md:w-1/5'>CPU Type</div>
          <div className='w-full md:w-4/5'>
            6-core CPU with 2 performance and 4 efficiency cores
          </div>
        </div>
        <div className='flex flex-col gap-1 border-b px-3 py-2 text-sm md:flex-row md:py-3'>
          <div className='w-full text-gray-500 md:w-1/5'>GPU</div>
          <div className='w-full md:w-4/5'>4‑core GPU</div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
