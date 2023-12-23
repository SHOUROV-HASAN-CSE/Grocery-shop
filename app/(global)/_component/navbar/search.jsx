import { LuSearch } from 'react-icons/lu';

export const Search = () => {
  return (
    <div className='flex w-full rounded-lg bg-white'>
      <input
        className='text=sm form-input w-full border-0 bg-transparent text-black outline-none placeholder:text-sm'
        type='text'
        placeholder='Search ...'
      />
      <button className='pr-3'>
        <LuSearch className='text-2xl text-primary' />
      </button>
    </div>
  );
};
