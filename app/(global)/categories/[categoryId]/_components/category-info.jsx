import { IoMdHome } from 'react-icons/io';



export const CategoryInfo = () => {
  return (
    <section className='bg-white shadow'>
      <div className='container py-4'>
        <p className='flex gap-2'>
          <span className='text-md  text-gray-500'>
            <IoMdHome />
          </span>
          {' '}
          /<span className='text-sm'>{'Office Equipment'}</span>
          {' '}
          /<span className='text-sm'>{'Printer'}</span>
          {' '}
          /<span className='text-sm'>{'Brother'}</span>
        </p>
        <h3 className='mt-5 text-[#3752bf] text-xl'>Brother Printer Price in Bangladesh</h3>
        <p className='mt-1 text-[13px]'>
        Brother Printer Price in Bangladesh starts from BDT 17,000 to BDT 111,000 depending on model and specification. Buy Brother printer for your office from Star Tech shop. Browse below and order yours now.
        </p>
      </div>
    </section>
  );
};
