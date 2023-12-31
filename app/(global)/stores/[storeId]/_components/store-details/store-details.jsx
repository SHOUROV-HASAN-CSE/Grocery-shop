import { FilterOptions } from './filter-options';
import { ProductCard } from '@/components/product-cart/product-card';
import { featuredProductData } from '@/data/products-data';

export const StoreDetails = () => {
  return (
    <section className='container mt-6 flex gap-6'>
      <FilterOptions />
      <div className='flex-grow'>
        {/* header */}
        <div className='flex items-center gap-5 rounded bg-white p-4 shadow'>
          <h4 className='font-semibold'>Products</h4>
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
      </div>
    </section>
  );
};
