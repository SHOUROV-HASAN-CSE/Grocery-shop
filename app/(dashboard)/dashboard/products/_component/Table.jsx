'use client';
import Image from 'next/image';
import { products } from '../../../../../data/allProducts';
import { Root, Trigger } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDelete, MdToggleOff, MdToggleOn } from 'react-icons/md';
import ResponsivePagination from 'react-responsive-pagination';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const Table = () => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [prodId, setProdId] = useState('');
  return (
    <div>
      <Root>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>
                  {/* <label>
                  <input
                    type='checkbox'
                    className='checkbox checkbox-sm rounded-sm'
                  />
                </label> */}
                </th>
                <th>PRODUCT NAME</th>
                <th>CATEGORY</th>
                <th>VENDOR</th>
                <th>PRICE</th>
                <th className='flex justify-center'>QUANTITY</th>
                <th>STATUS</th>
                <th className='flex justify-center'>PUBLISHED</th>
                <th className=' text-right'>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, i) => (
                <tr key={i} className='boeder-b border-gray-200'>
                  {/* checbox */}
                  <th>
                    <label>
                      <input
                        type='checkbox'
                        className='checkbox h-4 w-4 rounded-sm'
                      />
                    </label>
                  </th>

                  {/* image and name */}
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle h-12 w-12'>
                          <Image
                            src={product?.images[0]}
                            width={100}
                            height={100}
                            alt='Avatar Tailwind CSS Component'
                          />
                        </div>
                      </div>
                      <div>
                        <div className='font-medium'>{product.title}</div>
                      </div>
                    </div>
                  </td>

                  {/* category */}
                  <td>{product?.category}</td>

                  {/* vendor */}
                  <td>{product?.vendorInfo?.store}</td>

                  {/* price */}
                  <td className='font-bold'>{product?.price}৳</td>

                  {/* quantity */}
                  <td className='flex justify-center font-medium'>
                    {product?.quantity}
                  </td>

                  {/* status */}
                  <td
                    className={`font-medium ${
                      product?.status === 'Sold Out' ? 'text-red-500' : ''
                    }`}
                  >
                    {product?.status}
                  </td>

                  {/* published */}
                  <td className='flex justify-center  text-center text-3xl'>
                    {product?.published ? (
                      <MdToggleOn className='cursor-pointer text-green-600' />
                    ) : (
                      <MdToggleOff className='cursor-pointer text-gray-500' />
                    )}
                  </td>

                  {/* actions */}
                  <td>
                    <div className=' flex items-center justify-end gap-5 text-xl'>
                      <Trigger asChild>
                        <button
                          className='duration-200 hover:text-[#F97316]'
                          onClick={() => setProdId(product.id)}
                        >
                          <BiSolidEdit className='cursor-pointer duration-200 hover:text-[#F97316]' />
                        </button>
                      </Trigger>
                      {/* <BiSolidEdit className='cursor-pointer duration-200 hover:text-[#F97316]' /> */}
                      <MdDelete className='cursor-pointer duration-200 hover:text-red-500' />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center border-t pt-5'>
          {products.length >= 2 && (
            <ResponsivePagination
              total={totalPages}
              current={currentPage}
              onPageChange={(page) => handlePageChange(page)}
            />
          )}
        </div>

        {/* dialog */}
        {prodId && <EditProduct id={prodId} />}
      </Root>
    </div>
  );
};

export default Table;
