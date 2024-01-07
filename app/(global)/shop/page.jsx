'use client';
import { ProductCard } from '../../../components/product-cart/product-card';
import { featuredProductData } from '../../../data/products-data';
import { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import { FilterOptions } from '../stores/[storeId]/_components/store-details/filter-options';
import Allshop from './_shop-components/Allshop';

const ShopPage = () => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className='mb-10'>
      <Allshop />
      <section className='container mt-6 flex gap-6'>
        <FilterOptions />
        <div className='flex-grow'>
          {/* header */}
          <div className='flex items-center gap-5 rounded bg-white p-4 shadow'>
            <h4 className='font-semibold'>All Products</h4>
            <div className='ml-auto flex items-center gap-2'>
              <label className='font-semibold text-gray-600' htmlFor='show'>
                Show :
              </label>
              <select
                className='w-fit rounded border border-gray-300 bg-gray-200 py-0 pl-4 outline-none placeholder:text-gray-500'
                name='show'
                id='show'
              >
                <option value='20'>20</option>
                <option value='30'>30</option>
              </select>
            </div>
            <div className='flex items-center gap-2'>
              <label className='font-semibold text-gray-600' htmlFor='show'>
                Sort By :
              </label>
              <select
                className='w-fit rounded border border-gray-300 bg-gray-200 py-0 pl-4  outline-none placeholder:text-gray-500'
                name='show'
                id='show'
              >
                <option value='default'>Default</option>
                <option value='lowPrice'>{`Price (Low > High )`}</option>
                <option value='maxPrice'>{`Price (High > Low )`}</option>
              </select>
            </div>
          </div>
          {/* products */}

          <div className='mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {featuredProductData?.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                price={product.price}
                title={product.title}
                rating={product.rating}
                reviewsCount={product.reviewsCount}
                url={product.url}
              />
            ))}
          </div>
          <div className='my-4 flex items-center justify-between border-y-2 border-gray-300 py-5'>
            <ResponsivePagination
              total={totalPages}
              current={currentPage}
              onPageChange={(page) => handlePageChange(page)}
            />
            <p className='hidden md:block'>
              Showing {currentPage} to {totalPages} of 4416 ({currentPage}{' '}
              Pages)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
