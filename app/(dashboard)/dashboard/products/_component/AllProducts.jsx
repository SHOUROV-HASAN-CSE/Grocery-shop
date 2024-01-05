import Filters from './Filters';
import Table from './Table';

const AllProducts = () => {
  return (
    <div className='mx-auto flex w-full flex-col gap-10  px-5 py-10 lg:w-[90%]'>
      <Filters />
      <Table />
    </div>
  );
};

export default AllProducts;
