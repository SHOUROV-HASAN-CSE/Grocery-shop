import {
  Portal,
  Overlay,
  Content,
  Title,
  Close,
  Description,
} from '@radix-ui/react-dialog';

const DeleteDialog = () => {
  return (
    <Portal>
      <Overlay className='bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0' />
      <Content className='data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
        <Title className='text-mauve12 m-0 text-[17px] font-medium'>
          Delete Store
        </Title>
        <Description className='text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal'>
          You are deleting a store. Press confirm to proceed
        </Description>
        <div className=' mt-10 flex gap-5'>
          <Close asChild>
            <button className='w-1/2 rounded-md border border-red-200 p-2 text-red-600 duration-300 hover:bg-red-50'>
              Cancel
            </button>
          </Close>

          <button className='w-1/2 rounded-md border bg-[#f97416d7] p-2 text-white duration-200 hover:bg-[#F97316]'>
            Confirm
          </button>
        </div>
      </Content>
    </Portal>
  );
};

export default DeleteDialog;
