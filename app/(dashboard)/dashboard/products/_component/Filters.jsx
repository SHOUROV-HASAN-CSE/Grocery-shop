'use client';
import AddProduct from './AddProduct';
import { FiPlus } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { products } from '../../../../../data/allProducts';
import { Root, Trigger } from '@radix-ui/react-dialog';

const Filters = () => {
  return (
    <div>
      <Root className=' px-3'>
        <p className=' text-xl font-semibold'>All Products</p>
        <div className='mt-5 flex justify-end gap-5'>
          <button className='flex items-center gap-2 rounded-md bg-red-500 p-2 font-medium text-white duration-200 hover:bg-red-600'>
            <MdDelete /> Delete
          </button>
          <Trigger asChild>
            <button className='flex items-center gap-2 rounded-md bg-[#f97416dc] p-2 font-medium text-white duration-200 hover:bg-[#f97416]'>
              <FiPlus /> Add Product
            </button>
          </Trigger>
        </div>

        {/* filtering */}
        <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
          <input type='text' className='rounded-md border-gray-300' />

          <select className='rounded-md border-gray-300'>
            <option disabled selected>
              Category
            </option>
            {products.map((p, i) => (
              <option key={i} value={p.category}>
                {p?.category}
              </option>
            ))}
          </select>

          <select className='rounded-md border-gray-300'>
            {/* <option disabled selected>
            Sort
          </option> */}
            <option value={'asc'}>Price Low to High</option>
            <option value={'dsc'}>Price High to Low</option>
          </select>

          <div className='flex justify-between  '>
            <button className=' rounded-md bg-[#f97416dc]  p-2 px-10 font-medium text-white duration-200 hover:bg-red-600'>
              Filter
            </button>
            <button className=' rounded-md bg-gray-200 px-10 font-medium text-black duration-200 '>
              Reset
            </button>
          </div>
        </div>
        <AddProduct />
      </Root>
    </div>
  );
};

export default Filters;
