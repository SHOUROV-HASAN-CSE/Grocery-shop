import Link from 'next/link';
import { IoIosCall } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';
const Support = () => {
  return (
    <div className='w-full text-white'>
            <h3 className='text-white text-center sm:text-left text-lg py-6 tracking-wider'>SUPPORT</h3>
            <div className='flex flex-col gap-1 justify-center md:justify-start items-center'>
              <div className='flex w-[270px] items-center justify-start gap-5 rounded-full border  border-slate-700 hover:border-orange-600 p-3 '>
                <IoIosCall className='ps-2 text-4xl font-bold ' />

                <div className='border-l-2 ps-3 text-center sm:text-left'>
                  <p className='text-sm text-gray-300'>10AM -7PM</p>
                  <phone className='text-xl font-semibold text-orange-600'>
                    16793
                  </phone>
                </div>
              </div>
              <br />
              
               <div>
                <Link href="/location">
                <div className='flex w-[270px] items-center justify-start gap-5 rounded-full border  border-slate-600 hover:border-orange-600 p-3 '>
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
  )
}

export default Support
