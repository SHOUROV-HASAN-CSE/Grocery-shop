import { brandData } from '@/data/brand-data';
import { categoriesDataForCategoriesPage as categories } from '@/data/categories-data';
import React from 'react';

const Form = ({ edit }) => {
  const inputClass = 'rounded-md border-gray-300';
  const inputParent = 'flex flex-col gap-2';
  return (
    <form>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <div className='flex w-full flex-col gap-3 lg:w-1/2'>
          {/* title */}
          <div className={inputParent}>
            <label>Product Title/Name </label>
            <input type='text' className={inputClass} />
          </div>

          {/* description */}

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
          {/* brand */}
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

          {/* quantity */}
          <div className={inputParent}>
            <label>Quantity</label>
            <input type='text' className={inputClass} />
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

          {/* key features */}
          <div className={inputParent}>
            <label>Key Features </label>
            <input type='text' className={inputClass} />
          </div>

          {/* Category */}
          <div className={inputParent}>
            <label>Category </label>
            <select name='' id='' className={inputClass}>
              {categories.map((category, i) => (
                <option key={i} value={category?.name}>
                  {category?.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sku */}
          <div className={inputParent}>
            <label>Product SKU </label>
            <input type='text' className={inputClass} />
          </div>

          {/* Tags */}
          <div className={inputParent}>
            <label>Tags</label>
            <input type='text' className={inputClass} />
          </div>

          {/* vendor */}
          <div className={inputParent}>
            <label>Vendor</label>
            <input
              type='text'
              defaultValue={'KYC Store'}
              className={`${inputClass} cursor-not-allowed text-gray-600`}
              disabled
            />
          </div>
        </div>
      </div>
      <div className='mt-10 flex gap-5'>
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
    </form>
  );
};

export default Form;
