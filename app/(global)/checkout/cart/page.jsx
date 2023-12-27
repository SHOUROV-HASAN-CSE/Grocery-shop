'use client';
import { ImCross } from "react-icons/im";

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const CartPage = () => {
  const products = [
    {
      id: 1,
      image:
        'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg',
      productName: 'Product A',
      model: 'Model X',
      quantity: 2,
      price: 25.99,
    },
    {
      id: 2,
      image:
        'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg',
      productName: 'Product B',
      model: 'Model Y',
      quantity: 1,
      price: 39.99,
    },
    // Add more products as needed
  ];
  const handleQuantityChange = (productId, event) => {
    // Handle quantity change logic here
  };

  const handleUpdateClick = (productId) => {
    // Handle update click logic here
  };

  const handleRemoveClick = (productId) => {
    // Handle remove click logic here
  };
  return (
    <div className='container rounded-md bg-white p-3'>
      <div>
        <h3 className='my-6 font-semibold'>Shopping Cart</h3>
      </div>
      <div className='overflow-x-auto'>
        <table className='table-xs min-w-full table-auto sm:table-sm'>
          <thead className='bg-gray-200'>
            <tr className='border-x text-gray-600 '>
              <th className='hidden border-x border-white px-4 py-2 text-left md:table-cell'>
                Image
              </th>
              <th className='border-x border-white px-4 py-2 text-left  '>
                Product Name
              </th>
              <th className='hidden  border-x border-white px-4 py-2  text-left md:table-cell'>
                Model
              </th>
              <th className='border-x  border-white px-4 py-2 text-center'>
                Quantity
              </th>
              <th className='hidden  border-x border-white px-4 py-2  text-right md:table-cell'>
                Price
              </th>
              <th className='border-x  border-white px-4 py-2 text-right'>
                Total
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {products.map((product) => (
              <tr key={product.id} className='border-b-2'>
                <td className='hidden border-gray-400 px-4  py-2 md:table-cell'>
                  <img
                    src={product.image}
                    alt={product.productName}
                    className='h-20 object-cover'
                  />
                </td>
                <td className='row-span-6 border-gray-400 px-4 py-2 md:w-6/12'>
                  {product.productName}
                </td>
                <td className='hidden border-gray-400 px-4  py-2 md:table-cell'>
                  {product.model}
                </td>
                <td className='border-gray-400 py-2 '>
                  <div
                    className='input-group flex items-center justify-center gap-2 mx-auto'
                    style={{ maxWidth: '120px' }}
                  >
                    <input
                      type='number'
                      name={`quantity${product.id}`}
                      defaultValue={product.quantity}
                      size='1'
                      className='form-input w-16 rounded-sm border-gray-200 text-center  appearance-none  border  text-gray-700 leading-tight focus:outline-none focus:border-blue-500'
                      onChange={(e) => handleQuantityChange(product.id, e)}
                    />
                    <span className='input-group-btn flex items-center justify-center gap-2'>
                      <button
                        type='submit'
                        data-toggle='tooltip'
                        title='Update'
                        className='btn btn-circle btn-ghost btn-sm'
                        onClick={() => handleUpdateClick(product.id)}
                      >
                        
                        <AiOutlineLoading3Quarters />
                      </button>
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
                </td>
                <td className='border-gray-400 px-4 py-2 text-right'>
                  {(product.quantity * product.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
            <tbody className="">
                <tr className="ml-auto">
                    <th>Sub-total</th>
                    <td>6000</td>
                </tr>
                <tr className="ml-auto">
                    <th>Total</th>
                    <td>6000</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
