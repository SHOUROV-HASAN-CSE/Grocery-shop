import Image from 'next/image';

export const ProfileIcon = ({ name, image, size }) => {
  return (
    <div className='flex items-center gap-4'>
      <div style={{ height: size, width: size }}>
        <Image
          className='rounded-full object-cover object-center'
          src={image}
          alt={`${name}'s image`}
          height={300}
          width={300}
        />
      </div>

      {name && (
        <h3 className='hidden font-semibold text-primary md:block'>{name}</h3>
      )}
    </div>
  );
};
