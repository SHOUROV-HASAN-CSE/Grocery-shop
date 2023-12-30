'use client';
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
      className='rounded bg-white p-5 text-justify'
    >
      <Image
        className='mx-auto w-fit object-contain'
        width={500}
        height={500}
        src={image}
        alt='image'
      />

      <h4 className='mt-5 font-semibold'>{title}</h4>
      <div className='flex items-center gap-3'>
        <p className='mt-1 text-sm font-bold text-orange-600'>${price}</p>
        <p className='mt-1 text-sm text-gray-500 line-through'>
          ${regularPrice}
        </p>
      </div>

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
      <button
        onClick={(e) => e.stopPropagation()}
        className={twMerge('blueButton', 'mt-4 w-full text-sm capitalize')}
      >
        Add to whish-list
      </button>
    </div>
  );
};
