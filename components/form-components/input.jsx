export const Input = ({
  name,
  label,
  placeholder,
  type,
  defaultValue,
  required,
}) => {
  return (
    <div className={`w-full ${label ? 'space-y-2' : ''}`}>
      <label className='block text-sm font-bold' htmlFor={name}>
        {label}
      </label>
      <input
        className='w-full rounded border border-gray-300 outline-none placeholder:text-gray-500'
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
