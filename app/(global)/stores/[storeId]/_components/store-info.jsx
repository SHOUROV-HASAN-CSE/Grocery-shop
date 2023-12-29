'use client';

import { IoMdHome } from 'react-icons/io';

export const StoreInfo = () => {
  return (
    <section className='bg-white shadow'>
      <div className='container py-4'>
        <p className='flex gap-2 text-gray-500'>
          <span className='text-xl'>
            <IoMdHome />
          </span>{' '}
          /<span className='font-semibold'>{'Intel'}</span>
        </p>
        <h3 className='mt-5 text-blue-500'>Intel Corporations</h3>
        <p className='mt-1 text-sm '>
          Intel Corporation is an American multinational corporation and
          technology company headquartered in Santa Clara, California.
        </p>
      </div>
    </section>
  );
};
