import Link from 'next/link';
import { FaAppleAlt, FaFacebook, FaGooglePlay, FaInstagram, FaYoutube } from 'react-icons/fa';
import Aboutus from './footer-component/aboutus';
import StayConected from './footer-component/stayConected';
import Support from './footer-component/support';
const Footer = () => {
  return (
    <footer className='bg-[#081621]'>
      <div className='container whitespace-nowrap'>
        <div className='grid grid-cols-1 gap-3 md:gap-7 py-16 xl:grid-cols-4 '>
          <Support />
          <Aboutus />
          <StayConected />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between gap-3 text-gray-300 border-y py-3 border-gray-400'>
          <div className='flex sm:flex-row flex-col items-center justify-center gap-3'>
            <p>Experience Star Tech App on your mobile:</p>
            <div className='flex justify-center items-center gap-3'>
              <Link href='/download/play'>
                <div className='flex w-[135px] items-center justify-center rounded-lg border-2 border-slate-500 px-2 py-1 hover:border-white'>
                  <FaGooglePlay className='mx-2 ' />
                  <span className='text-xs text-gray-400'>
                    <p>Download on</p>
                    <h5 className='text-sm font-semibold text-white'>
                      Google Play
                    </h5>
                  </span>
                </div>
              </Link>
              <Link href='/download/play'>
                <div className='flex w-[135px] items-center justify-center rounded-lg border-2 border-slate-500 px-2 py-1 hover:border-white'>
                  <FaAppleAlt className='mx-2 ' />
                  <span className='text-xs text-gray-400'>
                    <p>Download on</p>
                    <h5 className='text-sm font-semibold text-white'>
                      App Store
                    </h5>
                  </span>
                </div>
              </Link>
            </div>
            <div>
              
            </div>
          </div>
          <div className='space-x-3  '>
            <Link href='https://www.youtube.com/'>
              <span className='hover:bg-red-500 bg-[#ffffff1a] mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'>
                <FaYoutube className='text-2xl text-white' />
              </span>
            </Link>
            <Link href='https://www.facebook.com/'>
              <span className='hover:bg-blue-600 bg-[#ffffff1a] mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'>
                <FaFacebook className='text-2xl text-white' />
              </span>
            </Link>
            <Link href='https://www.isntagram.com/'>
              <span className='hover:bg-pink-600 bg-[#ffffff1a] mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'>
                <FaInstagram className='text-2xl text-white' />
              </span>
            </Link>
            
          </div>
          
        </div>
        <div className='flex sm:flex-row text-gray-300 flex-col justify-between items-center sm:px-3 py-5'>
            <p>© 2023 Star Tech Ltd | All rights reserved</p>
            <p>Powered By: Star Tech</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
