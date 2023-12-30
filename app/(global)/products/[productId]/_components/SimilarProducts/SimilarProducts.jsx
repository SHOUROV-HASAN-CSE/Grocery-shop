import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
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
      id: '2',
      title: 'LG 19M38A 18.5 Inch Monitor',
      price: '9,500৳',
      img: 'https://www.startech.com.bd/image/cache/catalog/television/sony/kd-50x75/kd-50x75-02-500x500.jpg',
    },
    {
      id: '3',
      title: 'LG 19M38A 18.5 Inch Monitor',
      price: '9,500৳',
      img: 'https://www.startech.com.bd/image/cache/catalog/smartwatch/amazfit/pop-3r/pop-3r-01-500x500.webp',
    },
  ];
  return (
    <div className='shadow-md'>
      <h3 className=' py-2 text-center text-lg font-medium text-[#3749CA]'>
        {title}
      </h3>

      <div className='mt-5 px-4 '>
        {products.map((product, i) => (
          <div key={i} className='  flex  gap-3 border-t py-3'>
            <div>
              <Link href={product?.id}>
                <Image src={product?.img} alt='' width={140} height={140} />
              </Link>
            </div>
            <div className='mt-3 flex flex-col gap-2'>
              <Link
                href={product?.id}
                className='hover:text-[#EF4A23] hover:underline'
              >
                {product?.title}
              </Link>

              <p className='font-semibold text-[#EF4A23]'>{product?.price}</p>
              <Link
                href={`/products/${product?.id}`}
                className='flex items-center gap-2 text-sm font-medium text-gray-600 duration-200 hover:text-black'
              >
                <p className='rounded border p-2 duration-200 hover:border-black '>
                  View Details
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
