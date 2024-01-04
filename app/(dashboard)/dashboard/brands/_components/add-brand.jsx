'use client';

import { IoMdAdd } from 'react-icons/io';
import * as Dialog from '@radix-ui/react-dialog';
import { ModalBody } from '@/components/modal-body';
import { Input } from '@/components/form-components/input';

export const AddBrand = () => {
  const handleAddBrand = (event) => {
    event.preventDefault();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span className='flex cursor-pointer items-center gap-2 rounded bg-orange-500 px-5 py-2 text-white transition delay-150 hover:scale-105'>
          <IoMdAdd className='text-xl' />
          Add Brand
        </span>
      </Dialog.Trigger>
      <ModalBody title={'Add Brand'}>
        <form onSubmit={handleAddBrand}>
          <Input
            type={'text'}
            label={'Name'}
            name={'name'}
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
