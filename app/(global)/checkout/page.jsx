import { CheckoutHead } from './_components/checkout-head';
import { CheckoutForm } from './_components/checkout-form/checkout-form';

export default function CheckOutPage() {
  return (
    <main className='container py-6'>
      <CheckoutHead />
      <CheckoutForm />
    </main>
  );
}
