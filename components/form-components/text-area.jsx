export const TextArea = ({ name, label, placeholder }) => {
  return (
    <div className='w-full space-y-2'>
      <label className='block text-sm font-bold' htmlFor={name}>
        {label}
      </label>
      <textarea
        className='w-full rounded border border-gray-300 outline-none placeholder:text-gray-500'
        id={name}
        rows={5}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
