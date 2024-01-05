import Image from 'next/image';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { BundleProductDetails } from './bundle-product-details';

export const BundleProductsRow = ({
  image,
  title,
  price,
  rating,
  products,
}) => {
  const tdClass = `px-5 py-2 text-center whitespace-nowrap`;
  const tdBtnClass = `rounded p-1 text-xl text-white transition hover:scale-110`;
  return (
    <tr className='border-b border-gray-400'>
      <td className={tdClass}>
        <input type='checkbox' />
      </td>
      <td className={`${tdClass} w-fit`}>
        <div className='mx-auto h-16 w-16'>
          <Image
            src={image}
            width={400}
            height={400}
            className='rounded object-cover'
            alt={title}
          />
        </div>
      </td>
      <td className={`${tdClass} text-justify`}>{title}</td>
      <td className={tdClass}>{price}</td>
      <td className={tdClass}>{rating}</td>
      <td className={tdClass}>
        <BundleProductDetails title={title} image={image} products={products} />
      </td>
      <td className={tdClass}>Edit</td>
      <td className={tdClass}>
        <button className={`${tdBtnClass} bg-red-600`}>
          <RiDeleteBin7Fill />
        </button>
      </td>
    </tr>
  );
};
