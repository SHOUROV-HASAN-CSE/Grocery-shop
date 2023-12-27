import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineLibraryAdd } from 'react-icons/md';

const SimilarProducts = ({ title }) => {
  const products = [
    {
      id: '1',
      title: 'LG 19M38A 18.5 Inch Monitor',
      price: '9,500৳',
      img: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-01-500x500.webp',
    },
    {
      id: '1',
      title: 'LG 19M38A 18.5 Inch Monitor',
      price: '9,500৳',
      img: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-01-500x500.webp',
    },
    {
      id: '1',
      title: 'LG 19M38A 18.5 Inch Monitor',
      price: '9,500৳',
      img: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-01-500x500.webp',
    },
  ];
  return (
    <div className='shadow-md'>
      <h3 className=' py-2 text-center text-lg font-medium text-[#3749CA]'>
        {title}
      </h3>

      <div className='mt-5 px-4 '>
        {products.map((product, i) => (
          <div key={i} className='  flex gap-3 border-t py-6'>
            <div>
              <Link href={product?.id}>
                <Image src={product?.img} alt='' width={100} height={100} />
              </Link>
            </div>
            <div className='flex flex-col gap-3'>
              <Link
                href={product?.id}
                className='hover:text-[#EF4A23] hover:underline'
              >
                {product?.title}
              </Link>

              <p className='font-semibold text-[#EF4A23]'>{product?.price}</p>
              <button className='flex items-center gap-2 text-sm font-medium text-gray-600 duration-200 hover:text-black'>
                <MdOutlineLibraryAdd className='text-lg' />
                Add to Compare{' '}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
