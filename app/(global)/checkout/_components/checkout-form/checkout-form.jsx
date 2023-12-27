import { CustomerInfo } from './customer-info';

export const CheckoutForm = () => {
  return (
    <form>
      <div className='mt-6 grid grid-cols-1 lg:grid-cols-3'>
        <CustomerInfo />
      </div>
    </form>
  );
};
