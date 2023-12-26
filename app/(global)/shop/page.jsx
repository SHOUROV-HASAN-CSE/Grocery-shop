import { ProductCard } from '@/components/product-card';
import { flashProductsData } from '@/data/products-data';

const ShopPage = () => {
  return (
    <div className='container bg-[#f2f4f8]'>
      {/* Header section with breadcrumbs */}
      <div className='my-2 rounded-md bg-[#fff] px-4 '>
        <div className='breadcrumbs py-6 text-sm'>
          <ul>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <a className='ms-1'>Home </a>
            </li>
            <li>
              <a>All Products </a>
            </li>
          </ul>
        </div>

        {/* Header text */}
        <div>
          <h1 className='pb-4 text-xl text-[#3749bb]'>All Products</h1>
        </div>
      </div>

      {/* main section */}
      <div className='grid grid-cols-12 gap-4'>
        <div className='hidden md:flex flex-col md:col-span-3'>
          {/* section 1 */}
          <div className='mb-2 rounded-md bg-[#fff] p-6'>
            <p className='pb-20'>Price Range</p>
            <div>
              <input
                type='range'
                min={0}
                max='100'
                value='10'
                className='range range-error'
              />
            </div>
          </div>
          {/* section 2 */}
          <div className='mb-2 rounded-md bg-[#fff] p-6'>
            <p className='pb-6'>Availabilty</p>
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <input type='checkbox' checked='checked' className='checkbox' />
                <span className='label-text'>In Stock</span>
              </label>
              <label className='label cursor-pointer'>
                <input type='checkbox' checked='checked' className='checkbox' />
                <span className='label-text'>Pre Order</span>
              </label>
              <label className='label cursor-pointer'>
                <input type='checkbox' checked='checked' className='checkbox' />
                <span className='label-text'>Up Coming</span>
              </label>
            </div>
          </div>
          {/* section 3 */}
          <div className='mb-2 rounded-md bg-[#fff] p-6'>
            <p className='pb-6'>Printer Type</p>
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <input type='checkbox' checked='checked' className='checkbox' />
                <span className='label-text'>Inkjet</span>
              </label>
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <span className='label-text'>Remember me</span>
                  <input
                    type='checkbox'
                    checked=''
                    className='checkbox-info checkbox'
                  />
                </label>
              </div>
              <label className='label cursor-pointer'>
                <input type='checkbox' checked='checked' className='checkbox' />
                <span className='label-text'>Ink Tank</span>
              </label>
              <label className='label cursor-pointer'>
                <input type='checkbox' checked='checked' className='checkbox' />
                <span className='label-text'>Laser</span>
              </label>
              <label className='label cursor-pointer'>
                <input type='checkbox' checked='checked' className='checkbox' />
                <span className='label-text'>Dotmatrix</span>
              </label>
            </div>
          </div>
        </div>
        {/* Second Section */}

        <div className='md:col-span-9 col-span-12'>
          {/* section 1 */}
          <div className='mb-2 flex h-[50px] items-center justify-between rounded-md bg-[#fff] p-2'>
            <h2 className=''>Brother</h2>
            <div className='flex items-center justify-center gap-x-3'>
              <p>Show:</p>
              <div className='dropdown dropdown-end dropdown-bottom'>
                <div tabIndex={0} role='button' className='btn btn-sm m-1'>
                  Click
                </div>
                <ul
                  tabIndex={0}
                  className='menu dropdown-content z-[1] w-28 rounded-box text-xs  p-2 shadow'
                >
                  
                  <li>
                    <a>40</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* section 2     Product Section */}

          <div className='text-center'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
              {flashProductsData?.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  rating={product.rating}
                  discount={product.discount}
                  reviewsCount={product.reviewsCount}
                />
              ))}
            </div>
          </div>

          {/* section 3 */}
          <div className=''>
            <div className='flex items-center justify-between'>
              <div className='join'>
                <button className='btn join-item'>PREV</button>
                <button className='btn join-item btn-active'>1</button>
                <button className='btn join-item'>2</button>
                <button className='btn join-item'>NEXT</button>
              </div>
              <p>Showing 1 to 20 of 31 (2 Pages)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
