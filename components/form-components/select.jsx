export const Select = ({ name, label, options }) => {
  return (
    <div className='w-full space-y-2'>
      <label className='block text-sm font-bold' htmlFor={name}>
        {label}
      </label>
      <select
        className='w-full rounded border border-gray-300 outline-none placeholder:text-gray-500'
        id={name}
        name={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
