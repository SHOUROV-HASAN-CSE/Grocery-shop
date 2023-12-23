'use client';
import Image from 'next/image';

export const ProductCard = ({ image, title, price, info }) => {
  return (
    <div className='overflow-hidden rounded-lg bg-white py-3'>
      <div className='relative h-[250px]'>
        {info ? (
          <div className='absolute top-0 z-10 space-y-1'>
            {Object.keys(info).map((information, index) => (
              <div
                key={index}
                className='w-fit rounded-e-full bg-purple-800 px-2 py-1 text-xs text-white'
              >
                {information} : {info[information]}
              </div>
            ))}
          </div>
        ) : null}
        <Image
          className='object-cover object-center'
          src={image}
          fill
          alt={title}
        />
      </div>
      <div className='mt-3 px-6 text-justify'>
        <h3 className='text-sm font-semibold'>{title}</h3>
        <p className='mt-5 text-xl font-bold text-orange-600'>{price}$</p>
      </div>
    </div>
  );
};
