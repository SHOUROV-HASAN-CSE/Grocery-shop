'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RatingStar } from './rating-start';

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

  return (
    <div
      onClick={() => router.push(url)}
      className='cursor-pointer overflow-hidden rounded-lg bg-white shadow transition hover:shadow-md'
    >
      <div className='relative h-[200px] overflow-hidden'>
        {discount && (
          <div className='absolute top-0 z-10 space-y-1'>
            <div className='w-fit rounded-br-lg bg-orange-500 px-2 py-1 text-xs text-white'>
              {discount}% Off
            </div>
          </div>
        )}
        <div className='absolute right-0 top-0 z-10 w-fit rounded-bl-lg bg-gray-900/50 px-2 py-1'>
          <RatingStar rating={rating} reviewsCount={reviewsCount} />
        </div>

        <Image
          className='bg-center object-cover transition hover:scale-110'
          src={image}
          fill
          alt={title}
        />
      </div>

      <div className='p-3 text-justify'>
        <h3 className='text-xs font-bold'>
          {title?.length > 50 ? title.slice(0, 47) + '...' : title}
        </h3>
        <div className='mt-2 flex items-center gap-2'>
          <p className='text-base font-bold text-orange-600'>
            ${discount ? price - (price * discount) / 100 : price}
          </p>
          {discount && (
            <p className='text-sm text-gray-500'>
              <span className='line-through'>${price}</span>{' '}
              <span>(-{discount}%)</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
