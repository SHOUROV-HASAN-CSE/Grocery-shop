import Image from 'next/image';

const FocusPoint = ({
  images,
  price,
  regularPrice,
  status,
  productCode,
  brand,
}) => {
  return (
    <div>
      <div className='flex'>
        <div className='w=2/5'>
          <div className='flex'>
            {images.map((image, i) => (
              <Image src={image} alt='' key={i} width={100} height={100} />
            ))}
          </div>
        </div>
        <div className='w-3/5'></div>
      </div>
    </div>
  );
};

export default FocusPoint;
