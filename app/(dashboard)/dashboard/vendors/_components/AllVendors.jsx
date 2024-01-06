import VendorFilters from './VendorFilters';
import VendorsTable from './VendorsTable';

const AllVendors = () => {
  return (
    <div className='mx-auto flex w-full flex-col gap-10  px-5 py-10 lg:w-[90%]'>
      <VendorFilters />
      <VendorsTable />
    </div>
  );
};

export default AllVendors;
