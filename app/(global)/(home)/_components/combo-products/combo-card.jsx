import Image from 'next/image';

export const ComboCard = ({
  title,
  image,
  price,
  rating,
  reviewsCount,
  url,
}) => {
  return (
    <div className='rounded bg-white p-5'>
      <div className='relative h-[300px]'>
        <Image src={image} fill alt='image' />
      </div>
      <h3 className='font-semibold'>{title}</h3>
    </div>
  );
};
