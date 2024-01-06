'use client';
import Image from 'next/image';
import { RatingStar } from '../../../../../components/product-cart/rating-star';
import { useRouter } from 'next/navigation';

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
    </div>
  );
};
