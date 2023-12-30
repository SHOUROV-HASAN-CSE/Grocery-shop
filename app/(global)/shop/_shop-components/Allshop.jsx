import { IoMdHome } from 'react-icons/io';

const Allshop = () => {
  return (
    <section className='bg-white shadow'>
      <div className='container py-4'>
        <p className='flex gap-2 text-gray-500'>
          <span className='text-xl'>
            <IoMdHome />
          </span>{' '}
          /<span className='font-semibold'>{'shop'}</span>
        </p>
        <h3 className='mt-5 text-blue-500'>All Products</h3>
      
      </div>
    </section>
  );
};

export default Allshop;
