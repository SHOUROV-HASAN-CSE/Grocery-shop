'use client';

import { RiEditLine } from 'react-icons/ri';
import { Root, Trigger } from '@radix-ui/react-dialog';
import { Input } from '../../../../../components/form-components/input';
import { ModalBody } from '../../../../../components/modal-body';

export const EditCategory = ({ name }) => {
  const handleEditCategory = (event) => {
    event.preventDefault();
  };

  return (
    <Root>
      <Trigger asChild>
        <span className='cursor-pointer rounded bg-blue-600 p-1 text-xl text-white'>
          <RiEditLine />
        </span>
      </Trigger>
      <ModalBody title={'Edit Category'}>
        <form onSubmit={handleEditCategory}>
          <Input
            type={'text'}
            label={'Name'}
            name={'name'}
            defaultValue={name}
            placeholder={'Enter the name of the category'}
            required={true}
          />
          <button className='mt-5 w-full rounded bg-orange-500 px-5 py-2 font-semibold text-white'>
            Submit
          </button>
        </form>
      </ModalBody>
    </Root>
  );
};
