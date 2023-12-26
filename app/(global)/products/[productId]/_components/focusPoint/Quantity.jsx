import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='mt-5 flex items-center gap-5 md:mt-8'>
      <button
        className='border px-3   py-2 hover:bg-gray-200'
        onClick={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        }}
      >
        <FiMinus className='cursor-pointer text-2xl font-medium ' />
      </button>

      <span className='w-10 text-center text-xl font-medium'>{quantity}</span>

      <button
        className=' border px-3 py-2  hover:bg-gray-200 '
        onClick={() => setQuantity(quantity + 1)}
      >
        <FiPlus className='cursor-pointer text-2xl   font-medium ' />
      </button>

      <button className='rounded-sm bg-blue-700 px-5 py-2  text-[15px] font-semibold text-white  duration-200 hover:bg-blue-800 lg:px-20'>
        Buy Now
      </button>
    </div>
  );
};

export default Quantity;
