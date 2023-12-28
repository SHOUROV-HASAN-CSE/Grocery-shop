'use client';

import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import TableRow from './table/tableRow';
import Thead from './table/thead';

const CartPage = () => {
  const products = [
    {
      id: 1,
      image:
        'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg',
      productName: 'Honor X6a Smartphone (4/128GB)',
      details: 'Reward Points: 150',
      model: 'Model X',
      quantity: 2,
      price: 25.99,
    },
    {
      id: 2,
      image:
        'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg',
      productName: 'Honor X5 Plus Smartphone (4/64GB)',
      details: 'Reward Points: 150',
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
          <Thead />
          <tbody className='bg-white'>
            {products.map((product) => (
              <TableRow key={product.id} product={product} />
            ))}
            {/* total and sub-total */}
            <tr className='h-16'>
              <td className='hidden md:table-cell' colSpan={3}></td>
              <td colSpan={2} className='border-b-2'>
                <h5 className='text-right font-semibold '>Sub-total:</h5>
              </td>
              <td className='border-b-2 text-right font-bold text-red-500'>
                <h5 className='flex items-center justify-end'>
                  5000
                  <FaBangladeshiTakaSign className='inline-flex items-center' />
                </h5>
              </td>
            </tr>
            <tr className='h-16'>
              <td className='hidden md:table-cell' colSpan={3}></td>
              <td colSpan={2} className='border-b-2'>
                <h5 className='text-right font-semibold '>Total:</h5>
              </td>
              <td className='border-b-2 text-right font-bold text-red-500'>
                <h5 className='flex items-center justify-end'>
                  6000
                  <FaBangladeshiTakaSign className='inline-flex items-center' />
                </h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* section dailog */}
      <div className='sm:px-2'>
        <div className='my-5'>
        <h2 className='text-base md:text-2xl font-semibold'>What would you like to do next?</h2>
        <p className='text-sm sm:text-base'>
          Choose if you have a discount code or reward points you want to use or
          would like to estimate your delivery cost.
        </p>
        </div>
        <div className='page-section ws-box coupon-voucher-cart'>
          <div className='rounded-md bg-[#f1f5f9] p-5 '>
            <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
              <div className='input-group flex w-1/2 items-center justify-center gap-3'>
                <input
                  type='text'
                  name='coupon'
                  placeholder='Promo / Coupon Code'
                  className='rounded-sm  md:w-3/4'
                />
                <span className='input-group-btn'>
                  <button type='button' className='outlinedButton '>
                    Apply Coupon
                  </button>
                </span>
              </div>
              <div className='input-group flex w-1/2 items-center justify-center gap-3'>
                <input
                  type='text'
                  name='coupon'
                  placeholder='Promo / Coupon Code'
                  className='rounded-sm md:w-3/4'
                />
                <span className='input-group-btn'>
                  <button type='button' className='outlinedButton'>
                    Apply Coupon
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className='my-5 md:mt-8 md:mb-10 flex justify-between items-center'>
            <button className='blueButton'>Continue Shopping</button>
            <button className='blueButton'>Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
