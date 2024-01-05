import { Portal, Overlay, Content, Title, Close } from '@radix-ui/react-dialog';
import { IoClose } from 'react-icons/io5';
import Form from './Form';
import { useState } from 'react';
import FormActions from './FormActions';

const EditProduct = () => {
  const [previewImage, setPreviewImage] = useState('');

  return (
    <Portal>
      <Overlay className='bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0' />

      <Content className='data-[state=open]:animate-contentShow bg-red-100focus:outline-none fixed right-[0%] top-[50%] z-[1001] h-full  w-full translate-y-[-50%] rounded-[6px] bg-white  md:w-[85%] '>
        <div className='flex items-center justify-between bg-gray-200 px-5 py-6 text-white'>
          <div className='text-black'>
            <Title className=' m-0 text-[20px] leading-5'>Update Product</Title>
            <p>Update products info, combinations and extras.</p>
          </div>

          <Close asChild>
            <button
              className='text-violet11 hover:bg-violet4 focus:shadow-violet7  rounded-full bg-white p-2 text-black focus:shadow-[0_0_0_2px] focus:outline-none'
              aria-label='Close'
            >
              <IoClose className='text-3xl' />
            </button>
          </Close>
        </div>

        {/* content */}
        <div>
          <div className='mt-5 h-[75vh] overflow-y-auto px-5'>
            <Form
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
            />
          </div>
          <FormActions edit={true} />
        </div>
      </Content>
    </Portal>
  );
};

export default EditProduct;
