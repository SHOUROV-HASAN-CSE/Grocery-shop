import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { MdOutlineBookmarkBorder, MdBookmark } from 'react-icons/md';

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const [bookmarked, setBookmarked] = useState(false);

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
        <FiMinus className='cursor-pointer text-xl font-medium ' />
      </button>

      {/* <span className='w-6 text-center text-xl font-medium'>{quantity}</span> */}

      <input
        type='number'
        className=' h-10 w-16 border-gray-300 text-center text-xl font-medium'
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />

      <button
        className=' border px-3 py-2  hover:bg-gray-200 '
        onClick={() => setQuantity(quantity + 1)}
      >
        <FiPlus className='cursor-pointer text-xl   font-medium ' />
      </button>

      <button className='rounded-sm bg-blue-700 px-5 py-2  text-[15px] font-semibold text-white  duration-200 hover:bg-blue-800 lg:px-16'>
        Buy Now
      </button>

      <button
        title='Bookmark'
        className='  rounded-sm bg-gray-200 px-3 py-2 duration-200 hover:bg-gray-300'
        onClick={() => setBookmarked(!bookmarked)}
      >
        {bookmarked ? (
          <MdBookmark className='cursor-pointer text-2xl font-medium   text-blue-700 ' />
        ) : (
          <MdOutlineBookmarkBorder className='cursor-pointer text-2xl   font-medium ' />
        )}
      </button>
    </div>
  );
};

export default Quantity;
