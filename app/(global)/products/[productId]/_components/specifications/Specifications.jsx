const Specifications = ({ Specifications }) => {
  return (
    <div className='flex flex-col gap-5 p-5 shadow-md' id='specification'>
      <h4 className='text-xl font-semibold'>Specification</h4>

      <div>
        <h3 className='bg-slate-200 p-2 px-3 font-semibold text-[#5049BB]'>
          Display
        </h3>
        <div className='flex border-b px-3 py-3 text-sm'>
          <div className='w-1/5'>Size</div>
          <div className='w-4/5'>4.7-inch (diagonal)</div>
        </div>
        <div className='flex border-b px-3 py-3 text-sm'>
          <div className='w-1/5'>Type</div>
          <div className='w-4/5'>Retina HD display</div>
        </div>
        <div className='flex border-b px-3 py-3 text-sm'>
          <div className='w-1/5'>Resolution</div>
          <div className='w-4/5'>1334-by-750-pixel resolution at 326 ppi</div>
        </div>
      </div>

      <div>
        <h3 className='bg-slate-200 p-2 px-3 font-semibold text-[#5049BB]'>
          Processor
        </h3>
        <div className='flex border-b px-3 py-3 text-sm'>
          <div className='w-1/5'>Chipset</div>
          <div className='w-4/5'>A15 Bionic chip</div>
        </div>
        <div className='flex border-b px-3 py-3 text-sm'>
          <div className='w-1/5'>CPU Type</div>
          <div className='w-4/5'>
            6-core CPU with 2 performance and 4 efficiency cores
          </div>
        </div>
        <div className='flex border-b px-3 py-3 text-sm'>
          <div className='w-1/5'>GPU</div>
          <div className='w-4/5'>4‑core GPU</div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
