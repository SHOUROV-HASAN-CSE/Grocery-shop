import Image from 'next/image';
import { Radio } from '@/components/form-components/radio';
import { CheckoutCard } from '../checkout-card';
import { CustomerInfo } from './customer-info';
import { Input } from '@/components/form-components/input';
import { CheckoutTable } from './checkout-table';
import { orders } from '@/data/orders';
import { twMerge } from 'tailwind-merge';

export const CheckoutForm = () => {
  return (
    <form>
      <div className='mt-6 gap-6 space-y-6 xl:grid xl:grid-cols-3 xl:space-y-0'>
        <CustomerInfo />
        <div className='col-span-2 gap-6 space-y-6 lg:gap-6 xl:grid xl:grid-cols-2  xl:space-y-0'>
          {/* ------- Payment Method ------- */}
          <CheckoutCard count={2} title='Payment Method'>
            <p className='mb-2 font-semibold'>Select a payment method</p>
            <Radio label='Cash on Delivery' name='paymentMethod' id='cash-on' />
            <Radio label='Online Payment' name='paymentMethod' id='online' />
            <Radio label='POS Delivery' name='paymentMethod' id='pos' />
            <p className='mt-3 font-semibold'> We Accept: </p>
            <div className='relative mt-2 h-[20px]'>
              <Image
                src={
                  'https://www.startech.com.bd/catalog/view/theme/starship/images/payment-methods.png'
                }
                fill
                alt='accepted payment method'
              />
            </div>
          </CheckoutCard>

          {/* ------- Delivery Method ------- */}
          <CheckoutCard count={3} title='Payment Method'>
            <p className='mb-2 font-semibold'>Select a delivery method</p>
            <Radio
              label='Home Delivery - 60$'
              name='paymentMethod'
              id='home-delivery'
            />
            <Radio
              label='Store Pickup'
              name='paymentMethod'
              id='store-pickup'
            />
            <Radio
              label='Request Express Charge Applicable'
              name='paymentMethod'
              id='request-express'
            />
          </CheckoutCard>

          {/* ------- gift voucher + promo code ------- */}
          <div className='col-span-2 space-y-6 rounded bg-white p-4 shadow lg:grid-cols-2 lg:gap-6 xl:grid xl:grid-cols-2 xl:gap-6 xl:space-y-0'>
            <div className='flex items-center gap-3'>
              <Input
                name='giftVoucher'
                placeholder='Gift Voucher'
                type='text'
              />
              <p className='outlinedButton w-fit whitespace-nowrap'>
                Apply Voucher
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <Input
                name='promoCode'
                placeholder='Promo / Coupon Code'
                type='text'
              />
              <p className='outlinedButton w-fit whitespace-nowrap'>
                Apply Coupon
              </p>
            </div>
          </div>

          {/* ------- Order Review ------- */}
          <CheckoutCard className='col-span-2' count={4} title='Order Review'>
            <CheckoutTable products={orders} />
            <button className={twMerge('blueButton', 'ml-auto mt-5 block')}>
              Place Order
            </button>
          </CheckoutCard>
        </div>
      </div>
    </form>
  );
};
