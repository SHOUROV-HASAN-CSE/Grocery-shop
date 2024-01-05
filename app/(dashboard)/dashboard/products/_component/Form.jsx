import { brandData } from '@/data/brand-data';
import React from 'react';

const Form = () => {
  const inputClass = 'rounded-md border-gray-300';
  const inputParent = 'flex flex-col gap-2';
  return (
    <form>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <div className='flex w-full flex-col gap-3 lg:w-1/2'>
          <div className={inputParent}>
            <label>Product Title/Name </label>
            <input type='text' className={inputClass} />
          </div>

          <div className={inputParent}>
            <label>Product Description </label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='5 '
              className={inputClass}
            ></textarea>
          </div>

          <div className={inputParent}>
            <label>Brand </label>
            <select name='' id='' className={inputClass}>
              {brandData.map((brand, i) => (
                <option key={i} value={brand?.name}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>

          {/* price */}
          <div className={inputParent}>
            <label> Price </label>
            <div className='relative flex items-center'>
              <input
                type='text'
                className='w-full rounded-md border-gray-300 pl-16'
              />
              <p className='absolute left-[1px] flex h-[95%] items-center rounded-l  bg-gray-100 px-5 text-xl text-gray-500'>
                ৳
              </p>
            </div>
          </div>

          {/* sale price */}
          <div className={inputParent}>
            <label>Sale Price </label>
            <div className='relative flex items-center'>
              <input
                type='text'
                className='w-full rounded-md border-gray-300 pl-16'
              />
              <p className='absolute left-[1px] flex h-[95%] items-center rounded-l  bg-gray-100 px-5 text-xl text-gray-500'>
                ৳
              </p>
            </div>
          </div>
        </div>

        <div className='flex w-full flex-col gap-3 lg:w-1/2'>
          <div className={inputParent}>
            <label>Product Images </label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='5 '
              className={inputClass}
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
