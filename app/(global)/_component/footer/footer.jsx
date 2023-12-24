import { IoIosCall } from 'react-icons/io';
const Footer = () => {
  return (
    <footer className='bg-[#081621]'>
      <div className='container flex gap-6 whitespace-nowrap'>
        <div className='grid grid-cols-4 py-16'>
          <div className='text-white space-y-5 w-full'> 
            <h3 className='text-white'>SUPPORT</h3>
            <div className='inline-flex justify-start items-center gap-5 rounded-full border p-2 w-[270px] '>
              <IoIosCall className='font-bold text-3xl ps-2' />
              <div className=''>
                <p>10AM -7PM</p>
                <phone className="text-xl text-orange-600 font-semibold">16793</phone>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
