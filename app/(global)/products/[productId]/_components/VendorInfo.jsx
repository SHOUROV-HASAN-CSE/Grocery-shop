import Link from 'next/link';
import React from 'react';
import StarRating from './StarRating';
import { MdVerified } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';

const VendorInfo = ({ vendorInfo }) => {
  const { store, verified, id } = vendorInfo;
  return (
    <div className='flex flex-col gap-5 p-5 shadow-md' id='vendor'>
      <h4 className='text-xl font-semibold'>vendor Info</h4>
      <div className='flex flex-col gap-5 md:flex-row'>
        <div className='flex h-36 w-36 items-center justify-center rounded-md bg-gray-400'>
          Logo
        </div>

        <div className='flex flex-grow flex-col  gap-8 rounded'>
          <div>
            <Link
              href={`/store/${store}}`}
              className=' flex items-center gap-2 text-2xl font-semibold'
            >
              {store}
              {verified && <MdVerified className='text-lg text-[#EF4444]' />}
            </Link>
            <StarRating ratings={4} />
          </div>

          <div className='geid-cols-1 grid gap-2 md:grid-cols-3'>
            <p className='rounded border px-2 py-2 text-center'>
              Positive Seller Rating{' '}
              <span className='text-lg font-medium'>(90%)</span>
            </p>
            <p className='rounded border px-2 py-2 text-center'>
              Positive Seller Rating{' '}
              <span className='text-lg font-medium'>(90%)</span>
            </p>
            <Link
              href={`/stores/${id}`}
              className='flex  items-center justify-end '
            >
              <button className='flex  items-center gap-1 rounded-[4px] border-2 border-[#3749BB] px-3 py-2 text-sm font-semibold duration-500 hover:bg-[#3749BB] hover:text-white '>
                Visit Store <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorInfo;
