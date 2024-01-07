import Image from 'next/image';
import { useState } from 'react';
import { brandData } from '../../../../../data/brand-data';
import { categoriesDataForCategoriesPage as categories } from '../../../../../data/categories-data';

const Form = ({ previewImages, setPreviewImages, product }) => {
  const inputClass = 'rounded-md border-gray-300';
  const inputParent = 'flex flex-col gap-2';

  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );

      setPreviewImages([...previewImages, ...imageUrls]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const files = e.dataTransfer.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );

      setPreviewImages([...previewImages, ...imageUrls]);
    }
  };

  return (
    <form>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <div className='flex w-full flex-col gap-5 lg:w-1/2'>
          {/* title */}
          <div className={inputParent}>
            <label>Product Title/Name </label>
            <input value={product.title} type='text' className={inputClass} />
          </div>

          {/* description */}

          <div className={inputParent}>
            <label>Product Description </label>
            <textarea
              value={product.description}
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
              <p className='absolute left-[1px] flex h-[95%] items-center rounded-l  bg-gray-100 px-5 text-2xl text-gray-500'>
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
              <p className='absolute left-[1px] flex h-[95%] items-center rounded-l  bg-gray-100 px-5 text-2xl text-gray-500'>
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

        <div className='flex w-full flex-col gap-5 lg:w-1/2'>
          {/* images */}
          <div className={inputParent}>
            <label>Product Images </label>
            <div className='w-full'>
              <input
                type='file'
                accept='image/*'
                id='file'
                className='hidden'
                onChange={handleFileChange}
                multiple
              />
              <label
                htmlFor='file'
                className={` flex min-h-[10vh] w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-[#00000026]  ${
                  dragging ? 'bg-[#f974161e]' : 'bg-transparent'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <span className='block text-center text-black'>
                  Drag and drop your thumbnail here or click to browse
                </span>
              </label>

              {previewImages.length > 0 && (
                <div className='lg:grid-col-4 mt-5  grid grid-cols-2 gap-5  xl:grid-cols-6  '>
                  {previewImages?.map((image, i) => (
                    <Image
                      key={i}
                      width={150}
                      height={150}
                      src={image}
                      alt=''
                      className='max-h-[100px]  w-full rounded-md object-cover '
                    />
                  ))}
                </div>
              )}
            </div>
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
    </form>
  );
};

export default Form;
