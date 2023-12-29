'use client';

import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import Loading from '../../loading';
import Breadcrumbs from './table/breadcrumbs';
import BtnComponent from './table/btnCmponent';
import Promo from './table/promo';
import TableRow from './table/tableRow';
import Thead from './table/thead';

const CartPage = () => {
  const [products, setProducts] = useState([
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
  ]);

  // const handleQuantityChange = (productId, event) => {
  //   const updatedProducts = products.map((product) => {
  //     if (product.id === productId) {
  //       return { ...product, quantity: parseInt(event.target.value, 10) || 0 };
  //     }
  //     return product;
  //   });
  //   setProducts(updatedProducts);
  // };
  const handleQuantityChange = (productId, action) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity:
            action === 'increment'
              ? product.quantity + 1
              : Math.max(product.quantity - 1, 1),
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  const handleRemoveClick = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId,
    );
    setProducts(updatedProducts);
  };
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const router = useRouter();
  if (!products.length) {
    router.push('/');
  }
  return (
    <div className='container '>
      <Breadcrumbs />
      {/* main section */}
      <div className='mt-2 rounded-md bg-white p-3'>
        <div>
          <h3 className='my-6 font-semibold'>Shopping Cart</h3>
        </div>
        <div className='overflow-x-auto'>
          <table className='table-xs min-w-full table-auto sm:table-sm'>
            <Thead />
            <tbody className='bg-white'>
              <Suspense fallback={Loading}>
                {products.map((product) => (
                  <TableRow
                    key={product.id}
                    product={product}
                    handleRemoveClick={handleRemoveClick}
                    handleQuantityChange={handleQuantityChange}
                  />
                ))}
              </Suspense>
              {/* total and sub-total */}
              <tr className='h-16'>
                <td className='hidden md:table-cell' colSpan={3}></td>
                <td colSpan={2} className='border-b-2'>
                  <h5 className='text-right font-semibold '>Sub-total:</h5>
                </td>
                <td className='border-b-2 text-right font-bold text-red-500'>
                  <h5 className='flex items-center justify-end'>
                    {totalPrice.toFixed(2)}
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
                    {totalPrice.toFixed(2)}
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
            <h2 className='text-base font-semibold md:text-2xl'>
              What would you like to do next?
            </h2>
            <p className='text-sm sm:text-base'>
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
          </div>
          <div className='page-section ws-box coupon-voucher-cart'>
            <div className='rounded-md bg-[#f1f5f9] p-5 '>
              {/* <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
                <div className='input-group flex w-1/2 items-center justify-center gap-3'>
                  <input
                    type='text'
                    name='coupon'
                    placeholder='Promo / Coupon Code'
                    className='w-[145px] rounded-sm sm:w-3/4'
                  />
                  <span className='input-group-btn'>
                    <button type='button' className='outlinedButton truncate'>
                      Apply Coupon
                    </button>
                  </span>
                </div>
                <div className='input-group flex w-1/2 items-center justify-center gap-3'>
                  <input
                    type='text'
                    name='coupon'
                    placeholder='Enter your gift voucher'
                    className='w-[145px] rounded-sm sm:w-3/4'
                  />
                  <span className='input-group-btn'>
                    <button type='button' className='outlinedButton truncate'>
                      Apply Voucher
                    </button>
                  </span>
                </div>
              </div> */}
              <Promo />
            </div>
          </div>
          <BtnComponent />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
