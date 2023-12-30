import { ImCross } from 'react-icons/im';

import { useState } from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const TableRow = ({ product, handleRemoveClick, handleQuantityChange }) => {
  const [value, setValue] = useState(product.quantity);
  return (
    <tr key={product.id} className='border-b-2'>
      <td className='hidden border-gray-400 px-4  py-2 md:table-cell'>
        <img
          src={product.image}
          alt={product.productName}
          className='h-20 object-cover'
        />
      </td>
      <td className='row-span-4 border-gray-400 px-4 py-2 md:w-6/12'>
        <div>
          <h5 className='font-semibold'>{product.productName}</h5>
          <p>{product.details}</p>
        </div>
      </td>
      <td className='hidden border-gray-400 px-4  py-2 md:table-cell'>
        {product.model}
      </td>
      <td className='border-gray-400 py-2 '>
        <div
          className='input-group mx-auto flex items-center justify-center gap-1 sm:gap-2'
          style={{ maxWidth: '120px' }}
        >
          <span
            onClick={() => handleQuantityChange(product.id, 'decrement')}
            class='minus inline-block h-8 w-20 cursor-pointer rounded-md border
            border-gray-300 bg-gray-200 p-1 text-center align-middle'
          >
            -
          </span>
          <input
            type='number'
            name={`quantity${product.id}`}
            value={product.quantity}
            size='1'
            className='form-input w-14 appearance-none rounded-sm border border-gray-200 text-center leading-tight text-gray-700 focus:border-blue-500 focus:outline-none'
            readOnly
          />
          <span
            onClick={() => handleQuantityChange(product.id, 'increment')}
            class='plus inline-block h-8 w-20 cursor-pointer rounded-md border border-gray-300 bg-gray-200 p-1 text-center align-middle'
          >
            +
          </span>

          <span className='input-group-btn flex items-center justify-center gap-1 sm:gap-1'>
            {/* <button
              type='submit'
              data-toggle='tooltip'
              title='Update'
              className='btn btn-circle btn-ghost btn-sm'
              onClick={() => handleUpdateClick(product.id)}
            >
              <AiOutlineLoading3Quarters />
            </button> */}

            <button
              type='button'
              data-toggle='tooltip'
              title='Remove'
              className='btn btn-circle btn-ghost btn-sm'
              onClick={() => handleRemoveClick(product.id)}
            >
              <ImCross />
            </button>
          </span>
        </div>
      </td>
      <td className='hidden border-gray-400 px-4 py-2  text-right md:table-cell'>
        {product.price}
        <FaBangladeshiTakaSign className='inline-flex items-center' />
      </td>
      <td className='border-gray-400 px-4 py-2 text-right font-semibold'>
        {(product.quantity * product.price).toFixed(2)}{' '}
        <FaBangladeshiTakaSign className='inline-flex items-center' />
      </td>
    </tr>
  );
};

export default TableRow;
