import Link from 'next/link';
import { IoIosCall } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';
const Support = () => {
  return (
    <div className='w-full text-white'>
      <h3 className='py-6 text-center text-lg tracking-wider text-white md:text-left'>
        SUPPORT
      </h3>
      <div className='flex flex-col sm:flex-row xl:flex-col  items-center justify-center gap-5 '>
        <div className='flex w-[270px] items-center justify-start gap-5 rounded-full border  border-slate-700 p-3 hover:border-orange-600 '>
          <IoIosCall className='ps-2 text-4xl font-bold ' />

          <div className='border-l-2 ps-3 text-center sm:text-left'>
            <p className='text-sm text-gray-300'>10AM -7PM</p>
            <phone className='text-xl font-semibold text-orange-600'>
              16793
            </phone>
          </div>
        </div>
      
        <div>
          <Link href='/location'>
            <div className='flex w-[270px] items-center justify-start gap-5 rounded-full border  border-slate-600 p-3 hover:border-orange-600 '>
              <IoLocation className='ps-2 text-4xl font-bold ' />

              <div className='border-l-2 ps-3 text-center sm:text-left'>
                <p className='text-sm text-gray-300'>Location</p>
                <phone className='text-xl font-semibold text-orange-600'>
                  Find Our Stores
                </phone>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
