import { Description } from '@radix-ui/react-dialog';
import React from 'react';

const FormActions = ({ edit }) => {
  return (
    <Description className='absolute bottom-5 w-full '>
      <div className=' flex gap-5 px-5'>
        <button className='w-1/2 rounded-md border border-red-200 p-2 text-red-600 duration-300 hover:bg-red-50'>
          Cancel
        </button>
        {edit ? (
          <button className='w-1/2 rounded-md border bg-[#f97416d7] p-2 text-white duration-200 hover:bg-[#F97316]'>
            Update Product
          </button>
        ) : (
          <button className='w-1/2 rounded-md border bg-[#f97416d7] p-2 text-white duration-200 hover:bg-[#F97316]'>
            Add Product
          </button>
        )}
      </div>
    </Description>
  );
};

export default FormActions;
