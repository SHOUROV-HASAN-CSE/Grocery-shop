'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ModalBody } from '@/components/modal-body';
import { Input } from '@/components/form-components/input';
import { RiEditLine } from 'react-icons/ri';

export const EditBrand = ({ name }) => {
  const handleEditBrand = (event) => {
    event.preventDefault();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span className='cursor-pointer rounded bg-blue-600 p-1 text-xl text-white'>
          <RiEditLine />
        </span>
      </Dialog.Trigger>
      <ModalBody title={'Edit Brand'}>
        <form onSubmit={handleEditBrand}>
          <Input
            type={'text'}
            label={'Name'}
            name={'name'}
            defaultValue={name}
            placeholder={'Enter the name of the brand'}
            required={true}
          />
          <button className='mt-5 w-full rounded bg-orange-500 px-5 py-2 font-semibold text-white'>
            Submit
          </button>
        </form>
      </ModalBody>
    </Dialog.Root>
  );
};
