'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarBorder,
} from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

export const ProductCard = ({
  image,
  title,
  price,
  discount,
  rating,
  reviewsCount,
  url,
}) => {
  const router = useRouter();
  const starCount = {
    fullStar: Math.floor(rating),
    halfStar: Math.ceil(rating) > Math.floor(rating),
    emptyStar: 5 - Math.ceil(rating),
  };

  return (
    <div
      onClick={() => router.push(url)}
      className='cursor-pointer overflow-hidden rounded-lg bg-white p-5'
    >
      <div className='relative h-[250px]'>
        {discount ? (
          <div className='absolute top-0 z-10 space-y-1'>
            <div className='w-fit rounded-e-full bg-purple-800 px-2 py-1 text-xs text-white'>
              Discount : {discount}%
            </div>
          </div>
        ) : null}
        <Image
          className='object-contain object-center'
          src={image}
          fill
          alt={title}
        />
      </div>
      <div className='mt-6 text-justify'>
        <h3 className='text-sm font-semibold'>{title}</h3>
        <p className='mt-5 text-xl font-bold text-orange-600'>
          ${discount ? price - (price * discount) / 100 : price}
        </p>
        {discount ? (
          <p className='mt-1 text-sm text-gray-500'>
            <span className='line-through'>{price}</span>{' '}
            <span>(-{discount}%)</span>
          </p>
        ) : null}
        <div className='mt-2 flex items-center'>
          {[...Array(starCount.fullStar)].map((el, index) => (
            <div key={`${el}-${index}`} className='text-orange-300'>
              <MdOutlineStar />
            </div>
          ))}
          {starCount.halfStar ? (
            <div className='text-orange-300'>
              <MdOutlineStarHalf />
            </div>
          ) : null}
          {[...Array(starCount.emptyStar)].map((el, index) => (
            <div
              key={`${el}-${index + starCount.fullStar}`}
              className='text-orange-300'
            >
              <MdOutlineStarBorder />
            </div>
          ))}
          <span className='ml-3 text-gray-500'>({reviewsCount})</span>
        </div>
      </div>
      <button
        onClick={(e) => e.stopPropagation()}
        className={twMerge('blueButton', 'mt-5 w-full text-sm capitalize')}
      >
        Add to whish-list
      </button>
    </div>
  );
};
