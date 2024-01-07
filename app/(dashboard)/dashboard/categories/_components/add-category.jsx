'use client';

import { IoMdAdd } from 'react-icons/io';
import { Root, Trigger } from '@radix-ui/react-dialog';
import { ModalBody } from '../../../../../components/modal-body';
import { Input } from '../../../../../components/form-components/input';

export const AddCategory = () => {
  const handleAddCategory = (event) => {
    event.preventDefault();
  };

  return (
    <Root>
      <Trigger asChild>
        <span className='flex cursor-pointer items-center gap-2 rounded bg-orange-500 px-5 py-2 text-white transition delay-150 hover:scale-105'>
          <IoMdAdd className='text-xl' />
          Add Category
        </span>
      </Trigger>
      <ModalBody title={'Add Category'}>
        <form onSubmit={handleAddCategory}>
          <Input
            type={'text'}
            label={'Name'}
            name={'name'}
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
