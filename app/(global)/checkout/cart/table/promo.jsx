import { Input } from '../../../../../components/form-components/input';

const Promo = () => {
  return (
    <div className='col-span-2 space-y-6 rounded bg-white p-4 shadow lg:grid-cols-2 lg:gap-6 xl:grid xl:grid-cols-2 xl:gap-6 xl:space-y-0'>
      <div className='flex items-center gap-3'>
        <Input name='giftVoucher' placeholder='Gift Voucher' type='text' />
        <p className='outlinedButton w-fit whitespace-nowrap'>Apply Voucher</p>
      </div>
      <div className='flex items-center gap-3'>
        <Input name='promoCode' placeholder='Promo / Coupon Code' type='text' />
        <p className='outlinedButton w-fit whitespace-nowrap'>Apply Coupon</p>
      </div>
    </div>
  );
};

export default Promo;
