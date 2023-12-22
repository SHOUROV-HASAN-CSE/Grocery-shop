import { LuSearch } from 'react-icons/lu';

export const Search = () => {
  return (
    <div className='flex w-full max-w-[500px] rounded-lg bg-white'>
      <input
        className='form-input w-full border-0 bg-transparent text-black outline-none'
        type='text'
        placeholder='Search ...'
      />
      <button className='pr-3'>
        <LuSearch className='text-2xl text-primary' />
      </button>
    </div>
  );
};
