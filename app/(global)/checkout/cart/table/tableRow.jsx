import { ImCross } from 'react-icons/im';

import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const TableRow = ({ product, handleRemoveClick, handleQuantityChange }) => {
  
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
          <input
            type='number'
            name={`quantity${product.id}`}
            defaultValue={product.quantity}
            size='1'
            className='form-input w-16 appearance-none rounded-sm border  border-gray-200  text-center  leading-tight text-gray-700 focus:border-blue-500 focus:outline-none'
            onChange={(e) => handleQuantityChange(product.id, e)}
          />
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
