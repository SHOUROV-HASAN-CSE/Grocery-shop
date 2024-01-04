import { Portal, Overlay, Content, Title, Close } from '@radix-ui/react-dialog';
import { IoClose } from 'react-icons/io5';

const AddProuct = () => {
  return (
    <Portal>
      <Overlay className='bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0' />

      <Content className='data-[state=open]:animate-contentShow bg-red-100focus:outline-none fixed right-[0%] top-[50%] z-[1001]  h-full w-full translate-y-[-50%] rounded-[6px] bg-white  md:w-96 '>
        <div className='flex items-center justify-between bg-gray-800 px-5 py-3 text-white'>
          <Title className='text-mauve12 m-0 text-[17px] font-medium'>
            Your Cart
          </Title>

          <Close asChild>
            <button
              className='text-violet11 hover:bg-violet4 focus:shadow-violet7  rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
              aria-label='Close'
            >
              <IoClose className='text-xl' />
            </button>
          </Close>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            quod?
          </p>
          <p>
            Eum consequatur tenetur velit ratione a. Quos ratione mollitia
            accusamus.
          </p>
          <p>
            Magni nisi iure sapiente repellat. Ducimus soluta quae reprehenderit
            illo?
          </p>
          <p>
            Inventore rem recusandae magni sapiente perspiciatis eum, aliquam
            modi ad.
          </p>
          <p>
            Unde ut autem quaerat iusto, ad obcaecati aperiam recusandae fugiat.
          </p>
        </div>
      </Content>
    </Portal>
  );
};

export default AddProuct;
