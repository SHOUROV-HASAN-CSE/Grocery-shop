import { useRouter } from 'next/navigation';

const BtnComponent = () => {
  const router = useRouter();
  return (
    <div className='my-5 flex items-center justify-between md:mb-10 md:mt-8'>
      <button onClick={() => router.push('/')} className='blueButton'>
        Continue Shopping
      </button>
      <button onClick={() => router.push('/checkout')} className='blueButton'>
        Confirm Order
      </button>
    </div>
  );
};

export default BtnComponent;
