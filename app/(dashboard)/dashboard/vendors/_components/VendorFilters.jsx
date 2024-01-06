import { MdDelete } from 'react-icons/md';
import { CiMoneyCheck1 } from 'react-icons/ci';
import Link from 'next/link';

const VendorFilters = () => {
  return (
    <div>
      <p className=' text-xl font-semibold'>All Stores</p>
      <div className='mt-5 flex justify-between gap-5'>
        <Link
          href={'/dashboard/vendors/submissions'}
          className='flex items-center gap-2 rounded-md bg-[#f97416dc] p-2 font-medium text-white duration-200 hover:bg-[#f97416]'
        >
          <CiMoneyCheck1 className='text-2xl' /> New Submissions
        </Link>
        <button className='flex items-center gap-2 rounded-md bg-red-500 p-2 font-medium text-white duration-200 hover:bg-red-600'>
          <MdDelete /> Delete
        </button>
      </div>

      {/* filtering */}
      <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-3'>
        <input
          placeholder='search by store name or owner email'
          type='text'
          className='rounded-md border-gray-300'
        />

        <select className='rounded-md border-gray-300'>
          <option value={'asc'}>Sold Low to High</option>
          <option value={'dsc'}>Sold High to Low</option>
        </select>

        <div className='flex justify-between'>
          <button className=' rounded-md bg-[#f97416dc]  p-2 px-10 font-medium text-white duration-200 hover:bg-red-600'>
            Filter
          </button>
          <button className=' rounded-md bg-gray-200 px-10 font-medium text-black duration-200 '>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorFilters;
