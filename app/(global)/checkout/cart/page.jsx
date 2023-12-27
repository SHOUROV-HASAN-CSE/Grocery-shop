"use client"

import { FaRegClipboard } from "react-icons/fa";

const CartPage = () => {
  const products = [
    {
      id: 1,
      image: 'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg',
      productName: 'Product A',
      model: 'Model X',
      quantity: 2,
      price: 25.99,
    },
    {
      id: 2,
      image: 'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg',
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
        <table className='min-w-full table-auto table-xs sm:table-sm'>
          <thead className='bg-gray-200'>
            <tr className="border-x text-gray-600 ">
              <th className='border-white px-4 py-2 text-left border-x hidden md:table-cell'>Image</th>
              <th className='border-white px-4 py-2 text-left border-x  '>
                Product Name
              </th>
              <th className='border-white  border-x px-4 py-2 text-left  hidden md:table-cell'>Model</th>
              <th className='border-white  border-x px-4 py-2 text-left'>Quantity</th>
              <th className='border-white  border-x px-4 py-2 text-right  hidden md:table-cell'>Price</th>
              <th className='border-white  border-x px-4 py-2 text-right'>Total</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {products.map((product) => (
              <tr key={product.id} className="border-b-2">
                <td className='border-gray-400 px-4 py-2  hidden md:table-cell'>
                  <img
                    src={product.image}
                    alt={product.productName}
                    className='h-12 object-cover'
                  />
                </td>
                <td className='border-gray-400 px-4 py-2'>
                  {product.productName}
                </td>
                <td className='border-gray-400 px-4 py-2  hidden md:table-cell'>{product.model}</td>
                <td className='border-gray-400 px-4 py-2'>

                  <div className="input-group flex gap-2 justify-center items-center" style={{ maxWidth: '200px' }}>
                  <input
                    type="number"
                    name={`quantity${product.id}`}
                    value={product.quantity}
                    size="1"
                    className=""
                    onChange={(e) => handleQuantityChange(product.id, e)}
                  />
                  <span className="input-group-btn ">
                    <button
                      type="submit"
                      data-toggle="tooltip"
                      title="Update"
                      className="btn btn-primary btn-xs"
                      onClick={() => handleUpdateClick(product.id)}
                    >
                      <FaRegClipboard/>
                    </button>
                    <button
                      type="button"
                      data-toggle="tooltip"
                      title="Remove"
                      className="btn btn-xs"
                      onClick={() => handleRemoveClick(product.id)}
                    >
                      <i className="material-icons">clear</i>
                    </button>
                  </span>
                </div>
                </td>
                <td className='border-gray-400 px-4 py-2 text-right  hidden md:table-cell'>{product.price}</td>
                <td className='border-gray-400 px-4 py-2 text-right'>
                  {(product.quantity * product.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
