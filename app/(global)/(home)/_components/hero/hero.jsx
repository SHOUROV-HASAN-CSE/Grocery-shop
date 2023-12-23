import { Banner } from './banner';
import { CompareProducts } from './compare-products';
import { Anton } from 'next/font/google';

const anTonFont = Anton({ subsets: ['latin'], weight: ['400'] });

export const Hero = () => {
  return (
    <div className='mt-6 flex gap-6'>
      <Banner />
      <div className='min-w-[280px] max-w-[350px]'>
        <CompareProducts />
        <div className='mt-6 overflow-hidden rounded-lg text-center'>
          <div className='bg-[#0A142C] p-6'>
            <h5 className='text-white'>Introducing</h5>
            <h2
              className={`${anTonFont.className} mt-2 text-2xl tracking-widest text-blue-500`}
            >
              Laptop Finder
            </h2>
          </div>
          <div className='bg-gradient-to-tr from-purple-900 from-10% via-blue-950 via-40% to-purple-950 to-90% p-6 text-lg text-white'>
            Find everything according to your budget!
          </div>
        </div>
      </div>
    </div>
  );
};
