import { BrandRow } from './brand-row';

export const BrandsTable = ({ brandsData }) => {
  const thClass = `py-2 px-5 text-left whitespace-nowrap`;
  return (
    <table className='w-full'>
      <thead className='w-full bg-gray-300'>
        <tr>
          <th className={thClass}>Selected</th>
          <th className={`${thClass} w-full`}>Name</th>
          <th className={`${thClass} w-full`}>Total Products</th>
          <th className={thClass}>Edit</th>
          <th className={thClass}>Delete</th>
        </tr>
      </thead>
      <tbody className='w-full'>
        {brandsData?.map(({ name, totalProduct }, index) => (
          <BrandRow name={name} totalProduct={totalProduct} key={index} />
        ))}
      </tbody>
    </table>
  );
};
