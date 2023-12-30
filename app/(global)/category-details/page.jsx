import { ProductCard } from '@/components/product-card';
import { featuredProductData } from '@/data/products-data';
import { FilterOptions } from '../stores/[storeId]/_components/store-details/filter-options';

const CategoryPage = () => {
  return (
    <div className='container bg-[#f2f4f8]'>
      {/* Header section with breadcrumbs */}
      <div className='my-2 rounded-md bg-[#fff] px-4 '>
        <div className='breadcrumbs py-6 text-sm'>
          <ul>
            <li>
              <a>Office Equipment </a>
            </li>
            <li>
              <a>Printer</a>
            </li>
            <li>Brother</li>
          </ul>
        </div>

        {/* Header text */}
        <div>
          <h1 className='pb-4 text-xl text-[#3749bb]'>
            Brother Printer Price in Bangladesh
          </h1>
          <p className='pb-4 text-xs'>
            Brother Printer Price in Bangladesh starts from BDT 17,000 to BDT
            111,000 depending on model and specification. Buy Brother printer
            for your office from Star Tech shop. Browse below and order yours
            now.
          </p>
        </div>
      </div>

      {/* main section */}
      <section className='container mt-6 flex gap-6'>
        <FilterOptions />
        <div className='flex-grow'>
          {/* header */}
          <div className='flex items-center gap-5 rounded bg-white p-4 shadow'>
            <h4 className='font-semibold'>Printer</h4>
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
    </div>
  );
};

export default CategoryPage;
