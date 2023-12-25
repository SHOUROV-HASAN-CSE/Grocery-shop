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
        <div className="col-span-3 rounded-md bg-[#fff] mr-2 p-6 mb-2 ">
          <p className="pb-20">Price Range</p>
          <div><input type="range" min={0} max="100" value="10" className="range range-error" /></div>
        </div>

        <div className="col-span-9 rounded-md bg-[#fff] ">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa repellat necessitatibus illum accusamus ut. Cum minima veritatis autem iusto excepturi quis, ratione ut iure voluptate odit assumenda dolorum molestias quibusdam!</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
