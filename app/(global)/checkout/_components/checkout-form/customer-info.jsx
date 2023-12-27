import { CircleContainer } from '@/components/circle-container';
import { Input } from '@/components/form-components/input';
import { Select } from '@/components/form-components/select';
import { TextArea } from '@/components/form-components/text-area';
import { zones } from '@/data/zone';
import { orange } from 'tailwindcss/colors';

export const CustomerInfo = () => {
  return (
    <div className='rounded bg-white p-4 shadow'>
      <div className='flex items-center gap-3 border-b pb-3'>
        <CircleContainer
          bgColor={orange[100]}
          fontColor={orange[600]}
          className={'font-bold'}
        >
          1
        </CircleContainer>
        <h3 className=''>Customer Information</h3>
      </div>
      <div className='mt-4 space-y-4'>
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
    </div>
  );
};
