import React from 'react';
import { products } from '@/data/allProducts';
import Image from 'next/image';

const Table = () => {
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <th>PRODUCT NAME</th>
              <th>CATEGORY</th>
              <th>VENDOR</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>STATUS</th>
              <th>PUBLISHED</th>
              <th>ACTIONS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <tr key={i}>
                {/* checbox */}
                <th>
                  <label>
                    <input type='checkbox' className='checkbox' />
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
                      <div className='font-medium'>Hart Hagerty</div>
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
                <td className='font-medium'>25</td>

                {/* status */}
                <td
                  className={`font-medium ${
                    product?.status === 'Sold Out' ? 'text-red-500' : ''
                  }`}
                >
                  {product?.status}
                </td>

                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className='badge badge-ghost badge-sm'>
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className='btn btn-ghost btn-xs'>details</button>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
