export const CompareProducts = () => {
  return (
    <div className='rounded-lg bg-yellow-100 p-6 text-center'>
      <h3 className='font-semibold'>Compare Products</h3>
      <p className='text-xs'>Choose Two Products to Compare</p>
      <form className='mt-6 space-y-4'>
        <input
          className='w-full rounded-lg border-none shadow'
          type='text'
          placeholder='Search and select products'
        />
        <input
          className='w-full rounded-lg border-none shadow'
          type='text'
          placeholder='Search and select products'
        />
        <button className='outlinedButton'>View Comparison</button>
      </form>
    </div>
  );
};
