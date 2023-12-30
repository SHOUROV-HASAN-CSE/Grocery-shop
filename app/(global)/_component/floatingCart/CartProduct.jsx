import Image from 'next/image';
import { MdDelete } from 'react-icons/md';

const CartProduct = ({ item, handleRemoveFromCart }) => {
  return (
    <div className='flex  items-center gap-3 border-b p-5 py-3 '>
      <div className=''>
        <Image src={item?.product?.images[0]} alt='' width={80} height={80} />
      </div>
      <div className=' flex flex-col gap-2'>
        <p className='text-sm '>{item?.product?.title}</p>

        <div className='flex items-center justify-between'>
          <p className='font-semibold '>
            {item?.product?.price} x {item?.quantity} ={' '}
            {item?.product?.price * item?.quantity}৳
          </p>
          <MdDelete
            onClick={() => handleRemoveFromCart(item)}
            className='cursor-pointer  text-xl duration-300 hover:text-red-700'
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
