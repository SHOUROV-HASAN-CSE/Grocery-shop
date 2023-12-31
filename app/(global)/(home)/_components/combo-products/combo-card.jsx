'use client';
import { RatingStar } from '@/components/product-cart/rating-start';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

export const ComboCard = ({
  title,
  image,
  price,
  regularPrice,
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
      className='cursor-pointer overflow-hidden rounded-lg bg-white shadow transition hover:shadow-md'
    >
      <div className='relative h-[200px] overflow-hidden'>
        <div className='absolute right-0 top-0 z-10 w-fit rounded-bl-lg bg-gray-900/50 px-2 py-1'>
          <RatingStar rating={rating} reviewsCount={reviewsCount} />
        </div>
        <Image className='object-cover' src={image} fill alt='image' />
      </div>

      <div className='p-3 text-justify'>
        <h3 className='truncate text-xs font-bold'>{title}</h3>
        <div className='flex items-center gap-3'>
          <p className='mt-1 text-sm font-bold text-orange-600'>${price}</p>
          <p className='mt-1 text-sm text-gray-500 line-through'>
            ${regularPrice}
          </p>
        </div>
        <div className='mt-3 flex items-center gap-3'>
          <button
            className={
              'w-full rounded bg-blue-700 p-2 text-xs text-white transition hover:scale-105'
            }
          >
            Buy Now
          </button>
          <button
            className='w-full rounded bg-primary p-2 text-xs text-white transition hover:scale-105'
            onClick={() => router.push(url)}
          >
            View Details
          </button>
        </div>
      </div>

      {/* <div className='mt-2 flex items-center'>
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
      </div> */}
    </div>
  );
};
