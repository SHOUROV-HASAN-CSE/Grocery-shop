
const Thead = () => {
  return (
    <thead className='bg-gray-200'>
      <tr className='border-x text-gray-600 '>
        <th className='hidden border-x border-white px-4 py-2 text-left md:table-cell'>
          Image
        </th>
        <th className='border-x border-white px-4 py-2 text-left  '>
          Product Name
        </th>
        <th className='hidden  border-x border-white px-4 py-2  text-left md:table-cell'>
          Model
        </th>
        <th className='border-x  border-white px-4 py-2 text-center'>
          Quantity
        </th>
        <th className='hidden  border-x border-white px-4 py-2  text-right md:table-cell'>
          Price
        </th>
        <th className='border-x  border-white px-4 py-2 text-right'>Total</th>
      </tr>
    </thead>
  );
};

export default Thead;
