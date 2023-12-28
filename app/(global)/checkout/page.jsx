import { CheckoutForm } from './_components/checkout-form/checkout-form';

export default function CheckOutPage() {
  return (
    <main className='container py-6'>
      <div className='rounded bg-[#DDEDEC] px-10 py-2 font-semibold italic'>
        You should have a credit card of the back specified for EMI!
      </div>
      <h3 className='my-6 font-semibold'>Checkout</h3>
      <CheckoutForm />
    </main>
  );
}
