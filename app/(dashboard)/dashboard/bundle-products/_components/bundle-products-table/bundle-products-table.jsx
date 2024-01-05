import { twMerge } from 'tailwind-merge';
import { BundleProductsRow } from './bundle-products-row';

export const BundleProductsTable = ({ bundleProductsData }) => {
  const thClass = `py-2 px-5 text-left whitespace-nowrap text-center`;
  return (
    <table className='w-full'>
      <thead className='w-full bg-gray-300'>
        <tr>
          <th className={thClass}>Selected</th>
          <th className={`${thClass}`}>Image</th>
          <th className={twMerge(thClass, 'text-left')}>Title</th>
          <th className={thClass}>Price</th>
          <th className={thClass}>Rating</th>
          <th className={thClass}>Details</th>
          <th className={thClass}>Edit</th>
          <th className={thClass}>Delete</th>
        </tr>
      </thead>
      <tbody className='w-full'>
        {bundleProductsData.map(
          ({ image, price, products, rating, title }, index) => (
            <BundleProductsRow
              key={index}
              price={price}
              products={products}
              rating={rating}
              title={title}
              image={image}
            />
          ),
        )}
      </tbody>
    </table>
  );
};
