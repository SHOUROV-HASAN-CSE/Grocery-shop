import Link from 'next/link';
import { IoIosCall } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';
import Aboutus from './footer-component/aboutus';
import StayConected from './footer-component/stayConected';
const Footer = () => {
  return (
    <footer className='bg-[#081621]'>
      <div className='container flex gap-6 whitespace-nowrap'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-16 gap-8 '>
          <div className='w-full space-y-5 text-white'>
            <h3 className='text-white'>SUPPORT</h3>
            <div className='space-y-1'>
              <div className='flex w-[270px] items-center justify-start gap-5 rounded-full border  border-slate-600 p-3 '>
                <IoIosCall className='ps-2 text-4xl font-bold ' />

                <div className='border-l-2 ps-3'>
                  <p className='text-sm text-gray-300'>10AM -7PM</p>
                  <phone className='text-xl font-semibold text-orange-600'>
                    16793
                  </phone>
                </div>
              </div>
              <br />
              
               <div>
                <Link href="/location">
                <div className='flex w-[270px] items-center justify-start gap-5 rounded-full border  border-slate-600 p-3 '>
                  <IoLocation className='ps-2 text-4xl font-bold ' />

                  <div className='border-l-2 ps-3'>
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
          <Aboutus/>
          <StayConected/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
