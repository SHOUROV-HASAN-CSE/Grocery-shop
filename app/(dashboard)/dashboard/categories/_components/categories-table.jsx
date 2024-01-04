import { CategoriesRow } from './categories-row';

export const CategoriesTable = ({ categoriesData }) => {
  const thClass = `py-2 px-5 text-left whitespace-nowrap`;
  return (
    <table className=''>
      <thead className='bg-gray-300'>
        <tr>
          <th className={thClass}>Selected</th>
          <th className={`${thClass} w-full`}>Name</th>
          <th className={`${thClass} w-full`}>Total Products</th>
          <th className={thClass}>Edit</th>
          <th className={thClass}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {categoriesData?.map(({ name, totalProduct }, index) => (
          <CategoriesRow name={name} totalProduct={totalProduct} key={index} />
        ))}
      </tbody>
    </table>
  );
};
