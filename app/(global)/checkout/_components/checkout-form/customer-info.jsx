import { zones } from '../../../../../data/zone';
import { CheckoutCard } from '../checkout-card';
import { Input } from '../../../../../components/form-components/input';
import { Select } from '../../../../../components/form-components/select';
import { TextArea } from '../../../../../components/form-components/text-area';

export const CustomerInfo = () => {
  return (
    <CheckoutCard count={1} title='Customer Information' className='h-fit'>
      <div className='space-y-4'>
        <div className='flex gap-4'>
          <Input
            label='First Name'
            placeholder='First Name'
            name='firstName'
            type='text'
            required={true}
          />
          <Input
            label='Last Name'
            placeholder='Last Name'
            name='lastName'
            type='text'
            required={true}
          />
        </div>
        <Input
          label='Address'
          placeholder='Address'
          name='address'
          type='text'
          required={true}
        />
        <Input
          label='Email'
          placeholder='Email'
          name='email'
          type='email'
          required={true}
        />
        <Input
          label='Mobile'
          placeholder='Phone Number'
          name='mobile'
          type='number'
          required={true}
        />
        <div className='flex gap-4'>
          <Input
            label='City'
            placeholder='City'
            name='city'
            type='text'
            required={true}
          />
          <Select label='Zone' name='zone' options={zones} />
        </div>
        <TextArea label='Comment' name='comment' placeholder='Comment' />
      </div>
    </CheckoutCard>
  );
};
