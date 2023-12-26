import { ProductCard } from "@/components/product-card";
import { flashProductsData } from "@/data/products-data";

const CategoryPage = () => {
  return (
    <div className='container bg-[#f2f4f8]'>
      {/* Header section with breadcrumbs */}
      <div className="my-2 px-4 rounded-md bg-[#fff] ">
        <div className='breadcrumbs text-sm py-6'>
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
          <h1 className='text-xl text-[#3749bb] pb-4'>Brother Printer Price in Bangladesh</h1>
          <p className='text-xs pb-4'>
            Brother Printer Price in Bangladesh starts from BDT 17,000 to BDT
            111,000 depending on model and specification. Buy Brother printer
            for your office from Star Tech shop. Browse below and order yours
            now.
          </p>
        </div>
      </div>

      {/* main section */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          {/* section 1 */}
          <div className="rounded-md bg-[#fff] p-6 mb-2">
          <p className="pb-20">Price Range</p>
          <div><input type="range" min={0} max="100" value="10" className="range range-error" /></div>
          </div>
          {/* section 2 */}
          <div className="rounded-md bg-[#fff] p-6 mb-2">
          <p className="pb-6">Availabilty</p>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" checked="checked" className="checkbox" />
              <span className="label-text">In Stock</span> 
            </label>
            <label className="label cursor-pointer">
              <input type="checkbox" checked="checked" className="checkbox" />
              <span className="label-text">Pre Order</span> 
            </label>
            <label className="label cursor-pointer">
              <input type="checkbox" checked="checked" className="checkbox" />
              <span className="label-text">Up Coming</span> 
            </label>
          </div>
          </div>
          {/* section 3 */}
          <div className="rounded-md bg-[#fff] p-6 mb-2">
          <p className="pb-6">Printer Type</p>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" checked="checked" className="checkbox" />
              <span className="label-text">Inkjet</span> 
            </label>
            <label className="label cursor-pointer">
              <input type="checkbox" checked="checked" className="checkbox" />
              <span className="label-text">Ink Tank</span> 
            </label>
            <label className="label cursor-pointer">
              <input type="checkbox" checked="checked" className="checkbox" />
              <span className="label-text">Laser</span> 
            </label>
            <label className="label cursor-pointer">
              <input type="checkbox" checked="checked" className="checkbox" />
              <span className="label-text">Dotmatrix</span> 
            </label>
          </div>
          </div>

        </div>
        {/* Second Section */}

        <div className="col-span-9">
          {/* section 1 */}
          <div className="rounded-md bg-[#fff] p-2 mb-2">
            <h2 className="ps-2">Brother</h2>
            <div></div>

          </div>
          {/* section 2     Product Section */}

         <div className='text-center'>
      <div className='grid grid-cols-4 gap-6'>
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
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <div className="join">
              <button className="join-item btn">PREV</button>
              <button className="join-item btn btn-active">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn">NEXT</button>
              </div>
              <p>Showing 1 to 20 of 31 (2 Pages)</p>
            </div>
          </div>

    
    
       
       
       
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
