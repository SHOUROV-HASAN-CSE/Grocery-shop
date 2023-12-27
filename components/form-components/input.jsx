export const Input = ({ name, label, placeholder, type, required }) => {
  return (
    <div className='w-full space-y-2'>
      <label className='block text-sm font-bold' htmlFor={name}>
        {label}
      </label>
      <input
        className='w-full rounded border border-gray-300 outline-none placeholder:text-gray-500'
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
