'use client';
import { useState } from 'react';
import Info from './focusPoint/Info';
import ImageView from './focusPoint/Image';

import { MdOutlineStar } from 'react-icons/md';

import Quantity from './focusPoint/Quantity';
import PayOption from './focusPoint/PayOption';
import Link from 'next/link';

const FocusPoint = ({
  images,
  price,
  regularPrice,
  status,
  productCode,
  brand,
  title,
  keyFeatures,
}) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className='  py-10'>
      <div className='flex flex-col lg:flex-row'>
        <ImageView
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          images={images}
        />

        <div className=' w-full  lg:w-3/5'>
          <h2 className='mt-4 text-xl font-medium lg:mt-[unset]'>{title}</h2>
          <div className='mt-3 flex flex-wrap gap-y-1'>
            <Info info={price} title={'Price'} />
            <Info info={`${regularPrice}৳`} title={'Regular Price'} />
            <Info info={status} title={'Status'} />
            <Info info={productCode} title={'Product Code'} />
            <Info info={brand} title={'Brand'} />
          </div>
          <div className='mt-6 lg:mt-10'>
            <h4 className=' text-lg font-medium'>Key Features </h4>
            <div className='mt-3 flex flex-col gap-3'>
              {keyFeatures.map((feature, i) => (
                <p key={i} className='text-[14px]'>
                  {feature}
                </p>
              ))}
            </div>

            <p className='mt-3'>
              <Link
                href={'#specification'}
                className=' cursor-pointer border-b-2 border-red-400 pb-[2px] font-medium  text-red-500 hover:text-red-700 '
              >
                View More Info
              </Link>
            </p>
          </div>

          <button className='mt-10 flex w-full cursor-default items-center justify-center gap-5  rounded-full bg-red-100 p-5 md:w-[unset]'>
            <MdOutlineStar className='rounded-full bg-red-500 p-[2px] text-3xl text-white' />
            <p>
              <span className='text-xl font-semibold'>100</span> Star Points
            </p>
          </button>

          <PayOption />

          <Quantity />
        </div>
      </div>
    </div>
  );
};

export default FocusPoint;
