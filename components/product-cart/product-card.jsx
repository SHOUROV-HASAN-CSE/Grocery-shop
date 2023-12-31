'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RatingStar } from './rating-start';
import { ProductDetails } from './product-details';

export const ProductCard = ({
  image,
  title,
  price,
  discount,
  rating,
  reviewsCount,
  details,
  url,
}) => {
  const router = useRouter();

  return (
    <div className='cursor-pointer overflow-hidden rounded-lg bg-white shadow transition hover:shadow-md'>
      <div className='group relative h-[200px] overflow-hidden'>
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
        <ProductDetails title={title} image={image} details={details} />
      </div>

      <div className='p-3 text-justify'>
        <h3 className='truncate text-xs font-bold'>{title}</h3>
        <div className='mt-2 flex items-center gap-2'>
          <p className='text-base font-bold text-orange-600'>
            ${discount ? price - (price * discount) / 100 : price}
          </p>
          {discount && (
            <p className='text-sm text-gray-500 line-through'>${price}</p>
          )}
        </div>
        <div className='mt-3 flex items-center gap-3'>
          <button
            className={
              'w-full rounded bg-blue-700 p-2 text-xs text-white transition hover:scale-105'
            }
          >
            Add To Cart
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
