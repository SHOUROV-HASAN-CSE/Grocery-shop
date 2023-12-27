import Image from 'next/image';

const ImageView = ({ setActiveImage, activeImage, images }) => {
  return (
    <div className='w-full lg:w-2/5 '>
      <div className='flex justify-center overflow-hidden'>
        <Image
          src={activeImage}
          alt=''
          width={500}
          height={500}
          className='cursor-pointer duration-700 hover:scale-[115%]'
        />
      </div>

      <div className=' flex  justify-center  '>
        <div className='flex '>
          {images.map((image, i) => (
            <Image
              src={image}
              alt=''
              key={i}
              width={70}
              height={70}
              onClick={() => setActiveImage(image)}
              className='mx-[2px] cursor-pointer border'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageView;
