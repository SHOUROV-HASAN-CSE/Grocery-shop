import Filters from './Filters';
import Table from './Table';

const AllProducts = () => {
  return (
    <div className='mx-auto flex w-full flex-col gap-10 py-10 lg:w-[80%]'>
      <Filters />
      <Table />
    </div>
  );
};

export default AllProducts;
